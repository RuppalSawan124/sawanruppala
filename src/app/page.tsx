'use client';

import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/navbar';
import Skills from './components/skills';
import AboutMe from './components/aboutme';
import Project from './components/projects';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { BiSolidNotepad } from "react-icons/bi";
import dynamic from 'next/dynamic';
import ReactCursorPosition from 'react-animated-cursor';
import Head from 'next/head';

const ModelViewer = dynamic(() => import('./components/modelviewer'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans min-h-screen">
      <title>Sawan Ruppala</title>
      <ReactCursorPosition color="255,255,255" innerSize={8} outerSize={0} outerAlpha={0} outerScale={5} innerScale={2.5} />
      <Analytics />
      {/* Navbar */}
      <div className="bg-gradient-to-tr from-[#0a0a0a] via-[#0a0a0a] to-gray-600 bg-[length:200%_200%]" >
        <Navbar />

        {/* Main Section */}
        <main className="flex flex-col md:flex-row justify-between px-10 py-32 pt-20 md:px-10">
          {/* Left content */}
          <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2 text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 1, ease: 'easeOut' }}
            >
              Welcome To My Website
            </motion.h1>

            <motion.p
              className="text-xl mb-4 font-extralight"
              initial={{ opacity: 0, y: 80}}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
            >
              I'm Sawan Ruppala - a junior web designer at Pacific Cellulose LTD
            </motion.p>

            {/* Social Icons Animation */}
            <motion.div
              className="flex space-x-8 md:space-x-20 mt-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 110  }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2, ease: 'easeOut' }}
            >
              {/* Social icons with hover effects */}
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
                <FaGithub size={45} className="md:text-3xl" />
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
                <FaLinkedin size={45} className="md:text-3xl" />
              </motion.a>

              <motion.a
                href="https://docs.google.com/document/d/1Pv57zBPov2rOYpmdg1w0CfEkxHVMBLhAP4YZZgJJGFI/edit?usp=sharing"
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
                <BiSolidNotepad size={45} className="md:text-3xl" />
              </motion.a>

              <motion.a
                href="mailto:ruppalasawan@gmail.com"
                className="text-gray-400 hover:text-white"
                aria-label="Mail"
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
                <FaEnvelope size={45} className="md:text-3xl" />
              </motion.a>
            </motion.div>
          </div>


          {/* Right side for the GLTF Model */}
          <motion.div
            className="flex w-full md:w-1/2 h-60 md:h-96"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4, delay: 1.5 }}
          >
            <ModelViewer />
          </motion.div>
        </main>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}  // Ensures it only animates once
      >
        <AboutMe />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <Skills />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <Project />
      </motion.div>

    </div>
  );
}

