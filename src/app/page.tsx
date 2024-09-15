'use client';

import { FaGithub, FaLinkedin, FaYoutube, FaGoogle } from 'react-icons/fa';
import Navbar from './components/navbar';
import Skills from './components/skills';
import AboutMe from './components/aboutme'
import { motion } from 'framer-motion';



export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <main className="flex flex-col items-start justify-center px-10 py-40 pt-48">
        
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Welcome To My Website
        </motion.h1>

        <motion.p
          className="text-xl mb-4 font-extralight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          I'm Sawan Ruppala - a web design intern at Pacific Cellulose LTD
        </motion.p>

        {/* Social Icons Animation */}
        <motion.div
          className="flex space-x-20 mt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
        >
          <motion.a
            href="https://github.com/"
            className="text-gray-400 hover:text-white"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              x: [0, -3, 3, -3, 3, 0],
              y: [0, -2, 2, -2, 2, 0],
              transition: {
                duration: 0.4,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              },
            }}
          >
            <FaGithub size={40} />
          </motion.a>

          <motion.a
            href="https://linkedin.com/"
            className="text-gray-400 hover:text-white"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              x: [0, -3, 3, -3, 3, 0],
              y: [0, -2, 2, -2, 2, 0],
              transition: {
                duration: 0.4,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              },
            }}
          >
            <FaLinkedin size={40} />
          </motion.a>

          <motion.a
            href="https://youtube.com/"
            className="text-gray-400 hover:text-white"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              x: [0, -3, 3, -3, 3, 0],
              y: [0, -2, 2, -2, 2, 0],
              transition: {
                duration: 0.4,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              },
            }}
          >
            <FaYoutube size={40} />
          </motion.a>

          <motion.a
            href="https://google.com/"
            className="text-gray-400 hover:text-white"
            aria-label="Google"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              x: [0, -3, 3, -3, 3, 0],
              y: [0, -2, 2, -2, 2, 0],
              transition: {
                duration: 0.4,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              },
            }}
          >
            <FaGoogle size={40} />
          </motion.a>
        </motion.div>
      </main>

      
       <AboutMe/>

      {/* Skills Section */}
      <Skills />
    </div>
  );
}
