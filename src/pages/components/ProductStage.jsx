import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function usePreloadImage(src) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!src) return;
    const img = new Image();
    img.src = src;
    img.decode?.().then(() => setLoaded(true)) || (img.onload = () => setLoaded(true));
  }, [src]);
  return loaded;
}

function ProductStage({ imgUrl, doorControls }) {
  const isLoaded = usePreloadImage(imgUrl);

  return (
    <div className="relative p-10 flex justify-center row-span-2  ">

      {/* PARENT CONTAINER: Now starts at 'open' (100% width) */}
      <motion.div
        className="relative rounded-2xl min-h-[800px] overflow-hidden transparent"
        initial="open" 
        animate={doorControls}
        variants={{
          open: { 
            width: "100%",
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } 
          },
          closed: { 
            width: "0%",
            transition: { duration: 0.6, ease: [0.4, 0, 1, 1] } 
          }
        }}
      >

        {/* IMAGE: Visible from the start with no opacity fade */}
        {isLoaded && (
          <div className="inset-0 flex justify-center items-center w-full h-full ">
            <motion.img
              src={imgUrl}
              alt="Product"
              className="min-w-full h-full object-cover object-center"
              initial="open"
              animate={doorControls}
              variants={{
                open: { scale: 1 },
                closed: { scale: 1.05 }
              }}
              transition={{ duration: 0.8 }}
            />
          </div>
        )}

        {/* GLASS OVERLAY */}
        <div className="absolute inset-0 ring-1 ring-white/20 rounded-2xl pointer-events-none z-20" />
      </motion.div>
    </div>
  );
}

export default ProductStage;