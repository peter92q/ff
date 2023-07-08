import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../staticData/styles";
import { certificates } from "../staticData";
import { Wrapper } from "../hoc";
import { textVariant } from "../motion/motion";
import { meta } from "../assets";
import { Certificates } from "../staticData/types";
 
const CertificateCard = ({ certificate }:{certificate: Certificates}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1c1733",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={certificate.date}
      iconStyle={{ background: certificate.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={certificate.icon}
            alt={certificate.company_name}
            className='w-[70%] h-[70%] object-contain'
          />
        </div>
      }
    >
      <div className="flex flex-row justify-center items-center gap-2 md:translate-x-[-25px]">
        <img src={meta} alt="meta" className="w-[60px] h-[50px] md:w-[70px] 
        md:h-[60px] lg:w-[80px] lg:h-[70px] md:mr-[10px]"/>
      <div className="flex flex-col">
        <h3 className='text-white text-[20px] font-bold font-mono'>{certificate.title}</h3>
        <div className="flex flex-row items-center justify-start gap-2">
        <p
          className='text-secondary text-[16px] font-semibold font-mono'
          style={{ margin: 0 }}
        >
          {certificate.company_name}
        </p> 
        <a
          target="_blank"
          href={certificate.link} 
          style={{margin:0}}
          className="text-[12px] px-2 cursor-pointer hover:opacity-80 decoration-none rounded-md bg-blue-600">Link</a>
        </div>
        </div>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {certificate.points.map((point, index) => (
          <li
            key={`certificate-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-widest'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const CertificatesPage = () => {
  return (
    <>
      <motion.div variants={textVariant(0.3)}>
        <p className={`${styles.sectionSubText} text-center`}>
          Completed courses
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Certificates
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={`certificate-${index}`}
              certificate={certificate}
            /> 
          ))}
        </VerticalTimeline>
        
      </div>
    </>
  );
};

export default Wrapper(CertificatesPage, "certificates");
