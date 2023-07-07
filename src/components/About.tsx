
import { Wrapper } from "../hoc";
import { pete } from "../assets";
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "../motion/motion";
import { styles, styles2 } from "../staticData/styles";
import { services } from "../staticData";
import { Services, stack } from "../staticData/types";



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

const About = () => {
  return (
    <>
      <motion.div
      variants={textVariant(0.3)}
      >
        <div className={styles2.pinkGradient}/>
        <div className={styles2.purpleGradient}/>
        <div className={styles2.blueGradient}/>
        
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

    <div className="flex flex-col sm:flex-row ">

      <motion.p
        variants={textVariant(0.5)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] '
      >
          As an aspiring developer, I specialize in leveraging the powerful combination of React, 
          TypeScript, and .NET Core for building high-quality web applications. React's component-based 
          architecture, virtual DOM and efficiency enable me to create highly responsive and feature-rich user 
          interfaces. TypeScript enhances the development process by adding static typing for improved code quality. 
          On the backend, I utilize .NET Core because it's an incredibly robust building platform, offering 
          a feature rich ecosystem, my favorite framework being ASP.NET Core. It's optimized to use minimal hosting
          and supports MVC pattern designs which allow me to create lightweight, fast and scalable RESTful APIs 
          with JSON serialization. The cherry on top being C# which is a strongly typed language that 
          utilizes memory allocation and naturally underlines a lot of potential errors before runtime. 
          The seamless integration of React, TypeScript and .NET Core creates a cohesive tech stack that 
          empowers me to design performant and scalable web applications.
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
    </>
  );
};

export default Wrapper(About, "about");

