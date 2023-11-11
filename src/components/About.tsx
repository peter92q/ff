import { pete } from "../assets";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../motion/motion";
import { styles } from "../staticData/styles";
import { services } from "../staticData";
import { Services, stack } from "../staticData/types";
import { SetStateAction } from "react";

const ServiceCard = ({ service, index }:{service: Services; index:number}) => (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full md:w-[40%] green-pink-gradient p-[1px] rounded-[20px] shadow-card '
    > 
      <div
        className='bg-[#1c1733] rounded-[20px] py-5 px-12 min-h-[280px] 
        flex justify-start items-center flex-col hover:shadow-lg hover:shadow-purple-500'
      >
        <img
          src={service.icon}
          alt='web-development'
          className='w-12 h-12 object-contain mb-2'
        />
        <h3 className='text-white shadow-text responsive-text font-bold text-center mb-4 border-b-[1px] border-blue-900/60'>
          {service.title} 
        </h3>
        <table className="text-white responsive-text2 font-medium 
        tracking-widest w-[240px] md:w-[360px]" >
          {
            service.stack?.map((item:stack,index:number)=>(
              <tbody key={index} className="translate-x-[20px] md:translate-x-[50px]">
               <tr key={index}>
                <td>
                    <img src={item?.icon} alt='techIcon' className="w-8 h-8 mr-4 mb-2"/>
                </td>
                <td className="translate-y-[-5px] shadow-text">
                  {item?.name}
                </td>
               </tr>
              </tbody>
            ))
          }
        </table>
      </div>
    </motion.div>
);

const About = ({setSelectedPage}:{setSelectedPage: React.Dispatch<SetStateAction<string | null>>;}) => {
  return ( 
    <motion.div 
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto z-0 relative`}
      id="about"
    > 
      <motion.div
      onViewportEnter={()=>setSelectedPage("about")}
      variants={textVariant(0.3)}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      
      </motion.div>

    <div className="flex flex-col sm:flex-row ">

      <motion.p
        variants={textVariant(0.5)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] '
      >
          My current work is centered around building fullstack apps in React 18, Typescipt, C#, ASP.NET, PostgresQL 
          and serving + reverse proxying the production builds on my own server with the help of Apache and some
          router configs. Although my specialty is in frontend, I believe frontend development is fullstack by nature, 
          as you need to understand a lot of the backend architecture in order to efficiently work on advanced projects.
          I also utilize React Native and Next.js for some mid-level prototypes as I have deep interest in learning
          cutting edge tech with modern use cases.
      </motion.p>
        <motion.div 
          variants={slideIn("right", "tween", 0.2, 1)}
          className="w-full hidden lg:block h-full">
          <img src={pete} alt="intro_pic" className="translate-y-[-90px]"/>
        </motion.div>
        </div>
        <p className="flex w-full justify-center items-center responsive-text3 mt-[100px]
          font-bold">Tech stack
        </p>
      <div className='mt-20 flex md:flex-row flex-col gap-10 justify-center items-center translate-y-[-20px]'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} service={service} />
        ))}
      </div>  
    </motion.div>
  );
};

export default About;

