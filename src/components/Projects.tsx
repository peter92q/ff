import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { SetStateAction, useState } from "react";
import { github } from "../assets";
import { slideIn, staggerContainer, textVariant } from "../motion/motion";
import { styles } from "../staticData/styles";
import { projects } from "../staticData/projects";
 
export function Swipe() {

  return (
    <> 
      <Swiper
          pagination={true}
          spaceBetween={30} 
          modules={[Pagination]}
          className="w-full min-h-full lg:min-h-0 lg:h-[80vh] rounded-xl"
      >
          {projects.map((project,index)=>(
            <SwiperSlide key={index}>
                  <div className='w-full h-full bg-[#1d1836] flex flex-col md:flex-row px-2 
                  pt-4 rounded-xl relative'>
                    <a
                      target="_blank" 
                      href={project.git}>
                      <img src={github} className="absolute top-0 right-0 z-50 bg-[#090325] 
                        mr-1 mt-2 w-[40px] h-[40px] cursor-pointer hover:opacity-60 
                        hover:scale-105 rounded-full border-purple-600 border-[1px]"
                        />
                    </a>
                <div className="w-full flex flex-col bg-[#090325] p-2 rounded-xl translate-y-[-5px]">
                    <img src={project.image} className='h-[50%] lg:w-full
                    rounded-xl object-cover'/>
                    <div className="w-full text-start h-full my-2 space-y-1">
                        <p className="responsive-text2 tracking-wider text-white font-bold ">Architecture:</p>
                        <p className="text-[20px] font-bold ">Frontend</p>
                        <p className="font-medium">{project.stack?.frontend}</p>
                        <p className="text-[20px] font-bold ">Backend</p>
                        <p className="font-medium">{project.stack?.backend}</p>
                        <p className="text-[20px] font-bold ">Deployment</p>
                        <p className="font-medium">{project.stack?.deployment}</p>
                    </div> 
                    </div>
                  <div className='h-full w-full text-start md:ml-2'>
                  <div className="flex flex-row justify-center items-center sm:justify-start sm:items-start ">
                    <p className="responsivetext tracking-wider  font-bold px-[4px] ">
                      {project.name} 
                    </p>
                    <img src={project.logo} className="w-[40px] h-[30px]"/>
                    <a 
                      target="_blank"
                      href={project.link}
                      className="text-[12px] px-2 cursor-pointer hover:opacity-80 decoration-none rounded-md bg-blue-600">
                        Link
                    </a>
                    </div>
                    <p
                      style={{margin:0, padding:0}} 
                      className="responsivetext2 font-light text-center sm:text-start sm:translate-x-[3px] text-gray-400">
                        {project.description}
                    </p>
                    <div className={`${index===0?"text-[14px] sm:text-[11px] md:text-[12px] xl:text-[13px]":"text-[19px] sm:text-[15px] md:text-[19px] lg:text-[12px] xl:text-[15px]"} 
                      flex flex-col tracking-wide leading-[30px] mt-2 ml-1`}>
                      <p className="responsivetext2 text-white tracking-wider font-bold ">Features:</p>
                        {project.features?.map((feature,index)=>(
                          <div key={index} className="flex flex-row">
                            <p className="text-purple-700 text-[25px] mr-1">•</p>
                            <p className="font-medium">{feature}</p>
                          </div>
                        ))}
                    </div>
                  </div> 
                </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}


const Projects = ({setSelectedPage}:{setSelectedPage: React.Dispatch<SetStateAction<string | null>>;}) => {
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    id="projects"
    >
      <motion.div 
        onViewportEnter={()=>setSelectedPage("projects")}
        variants={textVariant(0.3)}
        >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
 
      <div className='w-full flex'>
        <motion.p 
         variants={textVariant(0.4)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my skills and experience that I've acquired through
          extensive study and planning. Each project is deployed and public
          so you can test the features and functionality.
          {openInfo &&
                    <p
                      style={{transition: 'opacity 0.5s ease-in-out'}} 
                      className={`text-white ${!openInfo && "opacity-0"}`}>
                      In case you want to skip the account creation feature. 
                      I'm providing credentials that work in all of my apps.
                      Username: guest,
                      Password{`(case sensitive)`}: Pa$$w0rd.     
                    </p>
          }
          <div className="flex flex-row">
            <p className="text-red-500 mr-2">Important: </p> 
            <p
              onClick={()=>setOpenInfo(prev=>!prev)} 
              className="underline cursor-pointer">Read</p>
          </div>
        </motion.p>
      </div>
      <motion.div 
       variants={slideIn("left", "tween", 0.2, 1)}
        className='mt-20 flex flex-wrap gap-7 violet-gradient p-[1px] rounded-xl'>
        <Swipe/>
      </motion.div>
    </motion.div>
  ); 
};

export default Projects;
