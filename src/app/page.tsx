// pages/index.js
'use client';

import Navbar from './components/navbar';
import Skills from './components/skills';
import AboutMe from './components/aboutme';
import Project from './components/projects';
import { motion } from 'framer-motion';
import ModelViewer from './components/modelviewer';
import { FaGithub, FaLinkedin, FaYoutube, FaGoogle, FaEnvelope } from 'react-icons/fa';
import { BiSolidNotepad } from "react-icons/bi";

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <main className="flex flex-row justify-between px-10 py-40 pt-20">
        {/* Left content */}
        <div className="flex flex-col items-start justify-center w-1/2">
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
            {/* Your social icons here */}
            

        {/* Social Icons Animation */}
        <motion.div
          className="flex space-x-20 mt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
        >
          <motion.a
            href="https://github.com/RuppalSawan124"
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
            href="https://www.linkedin.com/in/sawan-ruppala-304623235"
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
            href="https://docs.google.com/document/d/1s8yTa3m1l-i8k055LQT-aqud0f18Ro8gA9sjJP8Qm5g/edit?usp=sharing" // Opens the default email client
            className="text-gray-400 hover:text-white"
            target="_blank"
            aria-label="Resume"
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
            <BiSolidNotepad size={40} />
          </motion.a>




          <motion.a
            href="https://www.google.com/maps/contrib/105128129541812787621"
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
          </motion.div>
        </div>

        {/* Right side for the GLTF Model */}
        <div className="flex w-1/2 h-96">
          <ModelViewer />
        </div>
      </main>

      <AboutMe />
      <Skills />
      <Project />
    </div>
  );
}
