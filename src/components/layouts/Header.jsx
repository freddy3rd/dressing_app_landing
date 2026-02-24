import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'New Arrivals', href: '#' },
    { name: 'Collection', href: '#' },
    { name: 'Editorial', href: '#' },
  ];

  const menuVariants = {
    closed: { opacity: 0, y: -20, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav className=" fixed top-0 w-full z-50 glass px-6 py-4 border-b border-black/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-8">
          <h1 className="font-serif text-2xl font-bold tracking-widest">DRESSY</h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-black transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
          
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-black text-white text-[10px] rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 hover:bg-black/5 rounded-full z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-black/5 flex flex-col p-6 gap-6 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                variants={itemVariants}
                href={link.href}
                className="text-xl font-medium text-gray-800 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div variants={itemVariants} className="pt-4 border-t border-black/5">
              <p className="text-sm text-gray-400">© 2026 DRESSY Studio</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Header;