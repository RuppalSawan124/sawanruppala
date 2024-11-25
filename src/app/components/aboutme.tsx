import { motion } from 'framer-motion';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt'; // Import Tilt

const AboutMe = () => {
  return (
    <section id='aboutme' className="px-10 py-10 pt-3 max-w-2xl mx-auto text-center">
      <motion.h2
        className="text-5xl font-bold mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        About Myself
      </motion.h2>

      {/* Add Tilt effect on the image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex justify-center mb-6"
      >
        <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      scale={1.1}
      perspective={1000} // Increase the 3D depth
      transitionSpeed={1000} // Slower, smoother transition
      glareEnable={true} // Enable the glare effect
      glareMaxOpacity={0.45} // Glare opacity
      glareColor="lightblue" // Glare color
      glarePosition="bottom" // Glare position
      gyroscope={true} // Adds gyroscope support for mobile devices
      className="shadow-lg"
    >
      <Image 
        src="/newface.png" 
        alt="Sawan Ruppala" 
        width={250} 
        height={250} 
        className="rounded-3xl border-8 border-white" 
      />
    </Tilt>
      </motion.div>

      <motion.p
        className="text-lg font-extralight pt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        I am a web designer who is studying at Kwantlen Polytechnic University to become an IT Technician. I enjoy making websites and I love eating various cuisines.
       <br></br><br></br> If you are working on a project, feel free to contact me! I love helping others.
      </motion.p>
    </section>
  );
};

export default AboutMe;
