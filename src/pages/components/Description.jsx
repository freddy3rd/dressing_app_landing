import React, { useState } from 'react';
import { Share2, Heart } from 'lucide-react';
import { motion } from "framer-motion";

// Use clipPath for a transparent "reveal" from right to left
const revealVariants = {
  open: { 
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } 
  },
  closed: { 
    clipPath: "inset(0% 0% 0% 100%)",
    transition: { duration: 0.6, ease: [0.4, 0, 1, 1] } 
  }
};

const doorContainerVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

function Description({ description, doorControls }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(description.like);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };
  return (
    <motion.div 
      className="w-full max-w-md max-tablet:glass-white max-tablet:p-2 rounded-sm tablet:h-100 laptop:place-content-center tablet:place-content-end"
      variants={doorContainerVariants}
      initial="open" 
      animate={doorControls}
    >
      {/* SUBTITLE */}
      <motion.div
        className="font-display text-sm md:text-md font-bold px-2"
        variants={revealVariants}
      >
        {description.subTitle}
      </motion.div>

      {/* TITLE */}
      <motion.h1
        className="font-bold md:text-4xl text-xl py-2 font-display px-2"
        variants={revealVariants}
      >
        {description.title}
      </motion.h1>

      {/* DETAILS */}
      <motion.div
        className="tracking-wider px-2"
        variants={revealVariants}
      >
        {description.details}
      </motion.div>

      {/* SOCIALS */}
      <motion.div 
        variants={revealVariants}
        className="flex gap-4 py-2 px-1"
      >
      
      <motion.button
        id="likeBtn"
        onClick={handleLike}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="group flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 
                  hover:border-gray-900 hover:bg-gray-900 hover:text-white 
                  transition-colors duration-300"
      >
        <motion.div
          variants={{
            hover: { scale: 1.2, rotate: [0, -10, 10, 0] }
          }}
          whileHover="hover"
        >
          <Heart 
            size={16} 
            fill={isLiked ? "#B10003" : "transparent"} 
            className={isLiked ? "text-[#B10003]" : "text-gray-600 group-hover:text-white transition-colors"}
          />
        </motion.div>
        
        <span className="text-sm font-medium">{description.like}</span>
      </motion.button>
      
      <motion.button
        whileHover={{ 
          scale: 1.1, 
          y: -2, // Subtle lift
          boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)" 
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="p-2 rounded-full border border-gray-300 hover:border-gray-900 
                  hover:bg-gray-900 hover:text-white transition-colors duration-300 
                  magnetic-btn flex items-center justify-center"
      >
        <motion.div
          variants={{
            hover: { rotate: 15, scale: 1.1 }
          }}
          whileHover="hover"
        >
          <Share2 size={16} />
        </motion.div>
      </motion.button>
      
      </motion.div>
    </motion.div>
  );
}

export default Description;