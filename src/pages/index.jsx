import React, { useState } from 'react'
import Description from './components/Description'
import Dimension from './components/Dimension'
import Carousel from './components/Carousel'
import ProductStage from './components/ProductStage'

import mens_1 from "../assets/images/mens_1.png"
import mens_2 from "../assets/images/mens_2.png"
import mens_3 from "../assets/images/mens_3.png"
import mens_4 from "../assets/images/mens_4.png"
import mens_5 from "../assets/images/mens_5.png"
import mens_6 from "../assets/images/mens_6.png"
import mens_7 from "../assets/images/mens_7.png"
import { useAnimationControls } from 'framer-motion'

let data = [
  {
    id: 1,
    title: "Charcoal Wool Overcoat & Olive Chinos",
    subTitle: "Urban Monolith",
    details: "A sophisticated monochromatic look featuring a long structured charcoal grey wool overcoat with wide notched lapels, paired with a dark navy turtleneck and slim-fit olive green cargo trousers.",
    colors: ["#363636", "#1D2128", "#4B5340", "#C2C2C2"],
    img: mens_1,
    like: 124,
    model: [
      { size: "L", height: "188cm / 6'2" },
      { size: "M", height: "180cm / 5'11" }
    ],
    ref: "MENS_01_DRK",
    price: 299,
    discount: .30,
    stock: 10,
  },
  {
    id: 2,
    title: "Textured Haori & Wide-Leg Trousers",
    subTitle: "Neo-Zen Minimalist",
    details: "A contemporary Eastern-inspired silhouette featuring a navy blue open-front kimono jacket in crinkle fabric, layered over a crisp white button-down and matching high-waisted cropped trousers.",
    colors: ["#242D3D", "#FFFFFF", "#4A3728"],
    img: mens_2,
    like: 89,
    model: [
      { size: "M", height: "175cm / 5'9" },
      { size: "S", height: "170cm / 5'7" }
    ],
    ref: "MENS_02_JPN",
    price: 699,
    discount: .5,
    stock: 40,
  },
  {
    id: 3,
    title: "Tan Utility Field Jacket & Pleated Grey Wool",
    subTitle: "Heritage Explorer",
    details: "A refined earth-tone layered ensemble consisting of a beige field jacket with large utility pockets, a taupe turtleneck sweater, and relaxed-taper light grey wool trousers with front pleats.",
    colors: ["#C5A880", "#8D7D70", "#A9A9A9", "#533A2E"],
    img: mens_3,
    like: 210,
    model: [
      { size: "M", height: "178cm / 5'10" },
      { size: "L", height: "183cm / 6'0" }
    ],
    ref: "MENS_03_ETH",
    price: 449,
    discount: .15,
    stock: 20,
  },
   {
    id: 4,
    title: "Minimalist Utility Bomber & Ochre Cargos",
    subTitle: "Urban Workwear Aesthetic",
    details:
      "A clean, layered street look featuring a navy lightweight bomber jacket over a cream sweatshirt. The statement ochre-yellow cargo trousers feature pleated detailing and elasticated cuffs, rounded off with a sand-toned baseball cap and crisp white leather sneakers.",
    colors: ["#2C3E50", "#F5F5DC", "#D48C24", "#9B8E7D", "#FFFFFF"],
    img: mens_6,
    like: 215,
    model: [
      { size: "M", height: "178cm / 5'10" },
      { size: "L", height: "183cm / 6'0" }
    ],
    ref: "MENS_01_UTILITY",
    price: 499,
    discount: .30,
    stock: 30,
  },
  {
    id: 5,
    title: "Geometric Pixel-Art Streetwear",
    subTitle: "Cyber-Pop Casual",
    details:
      "A high-contrast ensemble highlighting oversized block-patterned joggers in vibrant orange, teal, and yellow. Paired with a minimalist oversized white tee and chunky high-top sneakers, accented by a black pendant necklace for a modern tech-wear vibe.",
    colors: ["#FFFFFF", "#E67E22", "#1ABC9C", "#F1C40F", "#2C3E50"],
    img: mens_5,
    like: 489,
    model: [
      { size: "S", height: "172cm / 5'8" },
      { size: "M", height: "177cm / 5'10" }
    ],
    ref: "MENS_02_PIXEL",
    price: 699,
    discount: .20,
    stock: 25,
  },
  {
    id: 6,
    title: "Heritage Crimson Overjacket & Olive Chinos",
    subTitle: "Rugged Intellectual",
    details:
      "A sophisticated outdoor-inspired look featuring a deep brick-red button-up overjacket worn with a sage green base layer. The straight-leg olive chinos are cuffed at the ankle to showcase cream canvas low-tops. Finished with round burgundy-tinted sunglasses and a well-groomed beard.",
    colors: ["#B03A2E", "#7D6608", "#82E0AA", "#E5E7E9", "#5D4037"],
    img: mens_4,
    like: 110,
    model: [
      { size: "L", height: "180cm / 5'11" },
      { size: "XL", height: "188cm / 6'2" }
    ],
    ref: "MENS_03_HERITAGE",
    price: 399,
    discount: .3,
    stock: 70,
  },
  {
    id: 7,
    title: "Avant-Garde Patchwork Plaid Set",
    subTitle: "Deconstructed Maximalism",
    details:
      "A bold matching set featuring deconstructed patchwork plaid in shades of coral, navy, and cream. The ensemble includes a hooded zip-up jacket and oversized cargo joggers, styled with a silver chain, dark circular shades, and cream platform sneakers for a maximum impact street silhouette.",
    colors: ["#EC7063", "#2874A6", "#FAD7A0", "#F4F6F7", "#17202A"],
    img: mens_7,
    like: 654,
    model: [
      { size: "M", height: "175cm / 5'9" },
      { size: "L", height: "181cm / 5'11" }
    ],
    ref: "MENS_04_PATCH",
    price: 499,
    discount: .30,
    stock: 40,
  }

];
function Homepage() {
  
  const [selectedModel, setSelectedModel] = useState(0)
  const [modelDescription, setModelDescription] = useState(selectedModel)

  const description = data[modelDescription]
  console.log('modelDescription', modelDescription)
  const imgUrl = data[modelDescription].img

  const doorControls = useAnimationControls();


  return (

    <div className="min-h-screen w-screen gradient-mesh relative place-content-center">
      <div className="absolute inset-0 w-full bg-gradient-to-r from-black/40 to-black/10 blur-3xl -z-20" />

      <div className="flex justify-center mx-2 overflow-hidden relative">
        <div className="relative grid grid-cols-1 max-[835px]:w-full tablet:grid-cols-2 tablet:grid-rows-[auto_1fr] laptop:grid-rows-1 laptop:grid-cols-3 laptop:items-center gap-8 justify-center items-start py-4">
          {/* details */}
          <div className="flex flex-col justify-center tablet:relative tablet:place-items-start px-4 max-laptop:grid-rows-1 absolute inset-0 bottom-50 z-10" >
            <Description description={description} doorControls={doorControls}/>
          </div>
         

          {/* dimension */}
           {/* place-self-start */}

          <ProductStage imgUrl={imgUrl} doorControls={doorControls} modelDescription={modelDescription}/>
          <Dimension description={description} doorControls={doorControls} />
   
          <Carousel 
            data={data} 
            setModelDescription={setModelDescription} 
            doorControls={doorControls} 


          />

        </div>
      </div>
    </div>
  )
}




export default Homepage
