import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Skill data for each category
const skillsData = {
  itSkills: [
    { name: 'Kali Linux', level: '85%', icon: '/kali-linux.svg' },
    { name: 'Windows Server 2022', level: '70%', icon: '/win.svg' },
    { name: 'Burp Suite', level: '90%', icon: '/burp-suite.svg' },
    { name: 'Cisco-Networking', level: '90%', icon: '/cisco.svg' }
  ],
  frontEnd: [
    { name: 'TypeScript', level: '80%', icon: '/typescript.svg' },
    { name: 'Tailwind CSS', level: '95%', icon: '/tailwind.svg' },
    { name: 'React', level: '92%', icon: '/react.svg' },
    { name: 'Next.js', level: '85%', icon: '/nextjs.svg' },
    { name: 'Node.js', level: '85%', icon: '/nodejs-icon.svg' },
    { name: 'SquareSpace', level: '85%', icon: '/squarespace.svg' }

  ],
  backEnd: [
    { name: 'C++', level: '92%', icon: '/cplusplus.svg' },
    { name: 'Python', level: '90%', icon: '/python.svg' },
    { name: 'Fast API', level: '90%', icon: '/FastAPI.svg' },
    { name: 'Prisma DB', level: '80%', icon: '/prismadb.svg' },
    { name: 'PostgreSQL', level: '85%', icon: '/postgresql.svg' },

  ]
};

// Define a type for the keys of skillsData
type SkillCategory = keyof typeof skillsData;

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('itSkills'); // Default to IT Skills

  return (
    <section id='skills' className="px-10 py-10">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      {/* Buttons to toggle between skill categories */}
      <div className="flex justify-center space-x-6 mb-8">
        <motion.button
          className={`px-5 py-2 text-lg font-semibold rounded-xl ${selectedCategory === 'itSkills' ? 'bg-violet-700 text-white' : 'bg-gray-200 text-black'
            }`}
          onClick={() => setSelectedCategory('itSkills')}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          IT Skills
        </motion.button>

        <motion.button
          className={`px-5 py-2 text-lg font-semibold rounded-xl ${selectedCategory === 'frontEnd' ? 'bg-violet-700 text-white' : 'bg-gray-200 text-black'
            }`}
          onClick={() => setSelectedCategory('frontEnd')}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          Front-End Skills
        </motion.button>

        <motion.button
          className={`px-5 py-2 text-lg font-semibold rounded-xl ${selectedCategory === 'backEnd' ? 'bg-violet-700 text-white' : 'bg-gray-200 text-black'
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
            className="relative p-4 border border-yellow-200 rounded-3xl group hover:bg-white transition duration-300"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: 'easeOut' }
            }}
          >
            <div className="flex items-center">
              <img src={skill.icon} alt={skill.name} className="w-8 h-8 mr-3" />
              <p className="text-lg font-semibold group-hover:text-black">{skill.name}</p>
            </div>
            <div className="relative w-full bg-white h-2 mt-2">
              <motion.div
                className="absolute left-0 top-0 h-2 bg-violet-900"
                style={{ width: skill.level }}
                initial={{ width: 0 }}
                animate={{ width: skill.level }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
