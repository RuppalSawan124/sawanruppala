import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Framer Motion animation variants for menu
  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
    closed: {
      opacity: 0,
      x: '-100%',
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <header className="py-6 px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-white text-sm font-thin"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Powered by Vercel.
        </motion.div>

        {/* Hamburger Icon for Mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <motion.div
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white mb-1"
            />
            <motion.div
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white mb-1"
            />
            <motion.div
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white"
            />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden sm:flex space-x-12 text-lg font-thin">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a href="#aboutme" className="text-white hover:text-gray-400 transition duration-200">
              About
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a href="#skills" className="text-white hover:text-gray-400 transition duration-200">
              Skills
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a href="#projects" className="text-white hover:text-gray-400 transition duration-200">
              Projects
            </a>
          </motion.div>
        </nav>

        {/* Mobile Navigation Menu */}
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={menuVariants}
          className={`font-thin fixed top-0 left-0 w-full h-screen bg-black sm:hidden z-50 flex flex-col justify-center items-center space-y-12`}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a
              href="#aboutme"
              onClick={() => setIsOpen(false)}
              className="text-white text-4xl hover:text-gray-400 transition duration-200"
            >
              About
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="text-white text-4xl hover:text-gray-400 transition duration-200"
            >
              Skills
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="text-white text-4xl hover:text-gray-400 transition duration-200"
            >
              Projects
            </a>
          </motion.div>
        </motion.nav>
      </div>
    </header>
  );
}
