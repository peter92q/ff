import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../motion/motion";
import { styles } from "../staticData/styles";
import { references } from "../staticData";
import { SetStateAction, useEffect, useRef, useState } from "react";

const Feedbacks = (
  {
    setSelectedPage
  }
  :
  {
    setSelectedPage: React.Dispatch<SetStateAction<string|null>>;
  }
  ) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<number>(4)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (imgRef.current && !imgRef.current.contains(e.target as Node)) {
        setSelectedImage(4)
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
   
  return (
<motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    id="feedbacks"
>
  <motion.div 
    onViewportEnter={()=>setSelectedPage("feedbacks")}
    className="violet-gradient p-[1px] rounded-xl">
   <div
    className="bg-[#1c1733] w-full h-full rounded-xl p-10 z-1">
    <motion.p 
      variants={textVariant(0.2)}
      className={styles.sectionSubText}>Official feedback from past employers
    </motion.p>
    <motion.h2 
      variants={textVariant(0.2)}
      className={styles.sectionHeadText}>References.
    </motion.h2>
      <div 
        className="flex lg:flex-row flex-col lg:space-x-2 space-y-2 lg:space-y-0"
        >
          {references.map((reference, index: number)=>(
            <div 
              key={index} className="lg:w-[250px] lg:min-h-[300px] border-slate-700/50 rounded-xl
              border-[15px] duration-300"
              >
              <motion.img
               variants={fadeIn("right","tween",0.2*index, 1)} 
               onClick={()=>setSelectedImage(index)}
               src={reference.pic}
               className="lg:min-h-full pointer-events-auto cursor-pointer rounded-md"
              />
              {selectedImage===index && 
                <img
                  ref={imgRef}
                  onClick={()=>setSelectedImage(4)}
                  src={reference.pic}
                  className="absolute top-0 right-[400px] z-50 h-[80%] lg:block hidden rounded-md"
                />
              }
            </div>
          ))}
      </div>
   </div>
  </motion.div>
  </motion.div>
  );
};

export default Feedbacks;
