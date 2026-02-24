import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePrevNextButtons } from "../../components/ui/usePrevNextButtons";

const ITEM_WIDTH = 400;

function Carousel({ data, setModelDescription, doorControls }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", containScroll: "keepSnaps", watchDrag: false});


  const {
    nextBtnDisabled,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, setModelDescription);

  const handleNext = async () => {
    // Close doors
    await doorControls.start("closed");

    // Move carousel
    onNextButtonClick();

    // Re-open doors after slide change
    setTimeout(() => {
      doorControls.start("open");
    }, 500);
  };

  return (
    <div className=" tablet:col-span-2 laptop:absolute laptop:min-h-[100px] laptop:bottom-0 w-full left-0 z-100 ">
      <div className="w-full grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_400px] gap-3 laptop:h-[100px] place-content-center border">

        {/* Navigation */}
        <div className="flex gap-1 h-[80px]">


          <button
            onClick={handleNext}
           
            className="flex items-center justify-center bg-white px-4 rounded-sm hover:bg-gray-50 disabled:opacity-40 transition cursor-pointer"
          >
            <span className="p-2 rounded-full bg-black">
              <ChevronLeft size={20} color="#fff" />
            </span>
          </button>
        </div>

        {/* Embla Viewport */}
        <div
          ref={emblaRef}
          className="relative overflow-hidden min-w-0 embla__viewport"
        >
          <div className="flex gap-3 ">
            {data.map((item) => (
              <div
                key={item.id}
                className={`h-[80px]  relative flex flex-col justify-center items-start bg-white rounded-sm px-6 min-w-100 ${data.length === item.id ? "mr-3": ""}`}
              >

                <span className="font-bold text-[10px] uppercase tracking-widest text-gray-400">
                  {item.subTitle}
                </span>
                <span className="font-bold text-sm leading-wider truncate">
                  {item.title}
                </span>
                {item.stock >= 30 ? 
                <div className="mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-xs text-gray-500">In Stock</span>
                </div> : 
                <div className="mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    <span className="text-xs text-gray-500">Low Stock</span>
                </div>
                }
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="min-h-[80px] text-2xl md:text-4xl font-display bg-white rounded-sm px-8 flex items-center justify-center col-span-2 md:col-span-1 h-full cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
          SHOP
        </div>
      </div>
    </div>
  );
}

export default Carousel;