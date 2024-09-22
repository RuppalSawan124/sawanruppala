import React, { useState } from 'react';
import { motion } from 'framer-motion';


const skillsData = {
  itSkills: [
    { name: 'Kali Linux', icon: '/kali-linux.svg' },
    { name: 'Windows Server 2022', icon: '/win.svg' },
    { name: 'Burp Suite', icon: '/burp-suite.svg' },
    { name: 'Cisco-Networking', icon: '/cisco.svg' },
    { name: 'Bash', icon: '/bash.svg' }
  ],
  frontEnd: [
    { name: 'TypeScript', icon: '/typescript.svg' },
    { name: 'Tailwind CSS', icon: '/tailwind.svg' },
    { name: 'React', icon: '/react.svg' },
    { name: 'Next.js', icon: '/nextjs.svg' },
    { name: 'HTML', icon: '/html.svg' },
    { name: 'SquareSpace', icon: '/squarespace.svg' }

  ],
  backEnd: [
    { name: 'C++', icon: '/cplusplus.svg' },
    { name: 'Python', icon: '/python.svg' },
    { name: 'Fast API', icon: '/FastAPI.svg' },
    { name: 'Prisma DB', icon: '/prismadb.svg' },
    { name: 'PostgreSQL', icon: '/postgresql.svg' },

  ]
};

type SkillCategory = keyof typeof skillsData;

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('itSkills'); // Default to IT Skills

  return (
    <section id='skills' className="px-10 py-10">
      <h2 className="text-5xl font-bold mb-6">Skills</h2>

      {/* Buttons to toggle between skill categories */}
      <div className="flex justify-center space-x-10 mb-8">
        <motion.button
          className={`px-7 py-2 text-lg font-semibold rounded-xl ${selectedCategory === 'itSkills' ? 'bg-gradient-to-r from-green-400 to-teal-500 text-white' : 'bg-gray-200 text-black'
            }`}
          onClick={() => setSelectedCategory('itSkills')}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          IT Skills
        </motion.button>

        <motion.button
          className={`px-5 py-2 text-lg font-semibold rounded-xl ${selectedCategory === 'frontEnd' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'bg-gray-200 text-black'
            }`}
          onClick={() => setSelectedCategory('frontEnd')}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          Front-End Skills
        </motion.button>

        <motion.button
          className={`px-5 py-2 text-lg font-semibold rounded-xl ${selectedCategory === 'backEnd' ? 'bg-gradient-to-r from-gray-700 to-blue-500 text-white' : 'bg-gray-200 text-black'
            }`}
          onClick={() => setSelectedCategory('backEnd')}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          Back-End Skills
        </motion.button>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6">
        {skillsData[selectedCategory].map((skill, index) => (
          <motion.div
            key={index}
            className="relative flex items-center justify-center p-5 group hover:bg-[#1f395a] rounded-xl transition duration-300"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.05, ease: 'easeOut' }
            }}
          >
            <div className="flex items-center">
              <img src={skill.icon} alt={skill.name} className="w-10 h-10 mr-4" />
              <p className="text-xl font-semibold">{skill.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
