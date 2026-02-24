import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, 
  Truck, 
  RefreshCw, 
  Shield, 

} from 'lucide-react';
// This component wraps text and expands its width to reveal it
// const WidthReveal = ({ children, className = "" }) => {
//   return (
    

//       <motion.div
//         className={`relative overflow-hidden whitespace-nowrap ${className}`}
//         variants={{
//           open: { 
//             width: "100%",
//             transition: { duration: 0.8, ease: "easeOut" } 
//           },
//           closed: { 
//             width: "0%",
//             transition: { duration: 0.5, ease: "easeIn" } 
//           }
//         }}
//       >
//         {children}
//       </motion.div>
  
//   );
// };

// const doorContainerVariants = {
//   open: {
//     transition: {
//       staggerChildren: 0.15, // Delays the start of each row's width expansion
//       delayChildren: 0.2
//     }
//   },
//   closed: {
//     transition: {
//       staggerChildren: 0.1,
//       staggerDirection: -1
//     }
//   }
// };

function Dimension({ description, doorControls }) {
  const [currentColor, setCurrentColor] = useState(0);
  const [currentModel, setCurrentModel] = useState(0);

  let hexColor = description.colors[currentColor];
  let model = description.model[currentModel];

  let sizes = description.model.map(({size}) => size)

  return (
    <motion.div
        animate={doorControls}
        initial="open"
       
        variants={{
          open: { 
            opacity: 1,
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } 
          },
          closed: { 
            opacity: 0,
            transition: { duration: 0.6, ease: [0.4, 0, 1, 1] } 
          }
        }}
        className="flex flex-col laptop:px-4 laptop:mx-4 my-4 z-50">
        {/* <div className="lg:col-span-3 space-y-6 opacity-0 animate-fade-in-up delay-400"> */}
        <div className="lg:col-span-3 space-y-6  laptop:max-w-sm w-full">
            <motion.div 
             whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl space-y-6 border border-white/40 ">
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Color</span>
                        <span className="text-xs font-mono text-gray-600" id="colorCode">{hexColor}</span>
                    </div>
                    <div className="flex gap-3">
                      {description.colors.map((c, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentColor(i)}
                            style={{ backgroundColor: c }}
                            className="w-8 h-8 rounded-full cursor-pointer border border-gray-400"
                          />
                        ))}

                    </div>
                </div>

                <div className="space-y-2 text-sm">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-500">Ref</span>
                        <span className="font-mono font-medium">{description.ref}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-500">Model Size</span>
                        <span className="font-medium">{model.size}</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="text-gray-500">Height</span>
                        <span className="font-medium">{model.height}</span>
                    </div>
                </div>

                <div className="space-y-3">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Select Size</span>
                    <div className="flex gap-2">
                          {sizes.map((size) => (
                            <button
                              key={size}
                              onClick={() => {
                                let index = description.model.findIndex(item => item.size === size);
                                if (index >= 0) setCurrentModel(index);
                              }}  
                              className={`w-10 h-10 rounded-md border border-gray-300 font-medium text-sm transition-colors duration-200 cursor-pointer ${
                                model.size === size 
                                  ? "bg-[#363636] text-white" 
                                  : "bg-white text-black hover:bg-[#C2C2C2]"
                              }`}
                            >
                              {size}
                            </button>
                        ))}

                    </div>
                </div>

                <div className="pt-4 space-y-4">
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-xs text-gray-500 line-through">${description.price}.00</p>
                            <p className="text-2xl font-serif font-bold">${ (description.price - (description.price * description.discount)).toFixed(2)}</p>
                        </div>
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">{description.discount * 100}%
                            OFF</span>
                    </div>
                    <button
                        className="w-full bg-gray-900 text-white py-4 rounded-xl font-medium hover:bg-gray-800 transform active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                        // onClick="addToCart()"
                        >
                        <span>Add to Cart</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>

                    </button>
                </div>
            </motion.div>

            <div className="flex justify-center gap-6 text-gray-400">
              <div className="flex flex-col items-center gap-1">
                <Truck size={20} />
                <span className="text-[10px] uppercase tracking-wider">Free Ship</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <RefreshCw size={20} />
                <span className="text-[10px] uppercase tracking-wider">30 Days</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <Shield size={20} />
                <span className="text-[10px] uppercase tracking-wider">Secure</span>
              </div>
              
            </div>
         </div>
      

  
    </motion.div>
  );
}

export default Dimension;