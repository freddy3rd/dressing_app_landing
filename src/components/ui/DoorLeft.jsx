 import {motion} from 'framer-motion'
 
 export default function DoorLeft() {
    return (
      <motion.div
        className="absolute left-0 top-0 h-full bg-custom-pink z-20"
        variants={{
          open: { width: "0%" },
          closed: { width: "100%" }
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    );
  }