import { motion } from "framer-motion";
import { styles } from "../staticData/styles";
import { slideIn, staggerContainer } from "../motion/motion";
import { SetStateAction } from "react";

const Hero = ({setSelectedPage}:{setSelectedPage: React.Dispatch<SetStateAction<string | null>>}) => {
  return (
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.25 }} 
      className="relative w-full h-screen mx-auto">
      <motion.div
        onViewportEnter={()=>setSelectedPage(null)}
        className={`absolute inset-0 top-[240px]  max-w-7xl mx-auto ${styles.paddingX} 
                    flex flex-row items-start gap-5`}
        >
        <motion.div 
          variants={slideIn("down", "tween", 0.2, 1)}
          className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </motion.div>
        <div>
          <motion.h1 
          variants={slideIn("left", "tween", 0.2, 1)}
          className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Peter</span>
          </motion.h1>
          <motion.p 
          variants={slideIn("left", "tween", 0.4, 1)}
          className={`${styles.heroSubText} mt-2 text-white-100`}>
            I create modern and responsive <br className='sm:block hidden' />
            fullstack web applications
          </motion.p>
        </div>
      </motion.div>
    </motion.div> 
  );
};

export default Hero;
