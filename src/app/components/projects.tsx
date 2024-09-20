import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // Import default styles
import { motion } from 'framer-motion';

const slideImages = [
  {
    url: '/tradingbook.svg',
    caption: 'Project 1: TradingBook.AI',
    description: 'A stock AI that answers stock-related questions and allows users to create a real-time stock ticker portfolio.',
    link: 'https://tradingbook.ai',
  },
  {
    url: '/flags.svg',
    caption: 'Project 2: Roblox Team Warfare',
    description: 'A Roblox Game utilizing the game theory concepts of capture the flag. Coded in Lua',
    link: 'https://www.roblox.com/games/170542886/Team-Flag-Warfare',
  },

];

const ProjectSlideshow = () => {
  return (
    <div id='projects' className="slide-container py-20">
      <h2 className="text-5xl font-bold mb-10 ml-10">Projects</h2>

      <Slide easing="ease" duration={3000}>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="each-slide flex justify-center">
            <div className="flex flex-col items-center">
              {/* Image */}
              <img
                src={slideImage.url}
                alt={slideImage.caption}
                className="w-64 h-64 object-cover rounded-lg" // Consistent image size with object-cover
              />

              {/* Caption */}
              <p className="text-white text-xl font-semibold mt-4 text-center">
                {slideImage.caption}
              </p>

              {/* Description */}
              <p className="text-white text-sm font-light mt-2 text-center">
                {slideImage.description}
              </p>

              {/* Link */}
              <a
                href={slideImage.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="bg-black text-white border border-white px-4 py-2 mt-8 mb-4 rounded-3xl text-center"
                >
                  View Project
                </motion.div>
              </a>

            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ProjectSlideshow;
