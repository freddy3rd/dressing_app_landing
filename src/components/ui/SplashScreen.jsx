// components/ui/SplashScreen.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [shouldExit, setShouldExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldExit(true);
    }, 4200); // total visible time before exit begins (~4.2s)

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shouldExit) {
      const exitTimer = setTimeout(() => {
        onComplete?.();
      }, 900); // give exit animation time to finish
      return () => clearTimeout(exitTimer);
    }
  }, [shouldExit, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden transparent"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0, scale: 0.96 }}
      // transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      <motion.div
        className="
          relative flex flex-col items-center gap-5 sm:gap-7 text-center"
        // animate={shouldExit ? 'exit' : 'animate'}
        // variants={{
        //   animate: {},
        //   exit: {
        //     opacity: 0,
        //     scale: 0.92,
        //     y: -20,
        //     transition: { duration: 0.8, ease: 'easeIn' }
        //   }
        // }}
      >
        {/* Logo with clip-path reveal + scale */}
        <div className="relative overflow-hidden">
          {/* Optional faint background version for depth */}
          {/* <div
            className="
              text-6xl sm:text-7xl md:text-8xl font-bold tracking-wider
              text-custom-pink/20 blur-sm select-none
            "
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Dressy
          </div> */}

          {/* Main animated logo layer */}
          <motion.h1
            className="
              absolute inset-0 text-6xl sm:text-7xl md:text-8xl
              font-bold tracking-tight text-custom-pink
            "
            style={{ fontFamily: 'Playfair Display, serif' }}
            // initial={{
            //   scale: 0.58,
            //   clipPath: 'inset(0 100% 0 0)', // fully clipped from right
            // }}
            // animate={{
            //   scale: 1,
            //   clipPath: 'inset(0 0% 0 0)',   // fully revealed
            // }}
            // transition={{
            //   duration: 2.1,
            //   ease: [0.16, 1, 0.3, 1],       // smooth, luxurious overshoot
            //   delay: 0.5,
            // }}
          >
            Dressy
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          className="
            text-sm sm:text-base uppercase tracking-[0.5em] sm:tracking-[0.7em]
            text-gray-700/90 font-medium mt-2
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 1.8,
            duration: 1.1,
            ease: 'easeOut'
          }}
        >
          Fashion Forward
        </motion.p>

        {/* Elegant divider */}
        <motion.div
          className="
            mt-6 h-[1.5px] bg-gradient-to-r
            from-transparent via-custom-pink/50 to-transparent
          "
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 180, opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{
            delay: 2.2,
            duration: 1.3,
            ease: 'easeInOut'
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;