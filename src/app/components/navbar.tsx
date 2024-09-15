import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-black to-violet-900 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo (Sawan) with hover animation */}
        <motion.div
          className="text-white text-sm font-thin"
          whileHover={{ scale: 1.1 }}  // Slight grow effect on hover
          whileTap={{ scale: 0.9 }}    // Shrink effect when clicked
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Powered by Vercel.
        </motion.div>

        {/* Navigation Links with hover animation */}
        <nav className="flex space-x-8 text-xl font-thin">
          <motion.div
            whileHover={{ scale: 1.1 }}   // Slight grow effect on hover
            whileTap={{ scale: 0.9 }}     // Shrink effect when clicked
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a href="#about" className="text-white hover:text-gray-300 transition duration-200">
              About
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a href="#resume" className="text-white hover:text-gray-300 transition duration-200">
              Resume
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a href="#contact" className="text-white hover:text-gray-300 transition duration-200">
              Contact
            </a>
          </motion.div>
        </nav>
      </div>
    </header>
  );
}