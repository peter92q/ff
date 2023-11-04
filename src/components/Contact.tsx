import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../staticData/styles";
import { slideIn, staggerContainer } from "../motion/motion";

const Contact = ({setSelectedPage}:{setSelectedPage: React.Dispatch<SetStateAction<string | null>>;}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
 
    emailjs 
      .send(
        "service_qofkoz8",
        "template_3quxseu",
        {
          from_name: form.name,
          to_name: "Peter",
          from_email: form.email,
          to_email: "exeption111@gmail.com",
          message: form.message,
        },
        "b90daeweHf8kI6Cw3"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      id="contact"
      >
      <motion.div
        onViewportEnter={()=>setSelectedPage("contact")}
        variants={slideIn("left", "tween", 0.2, 1)}
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse mx-auto p-[1px] violet-gradient rounded-xl gap-10 overflow-hidden`}
      >
        <div 
          className='flex-1 p-8 rounded-xl flex flex-col md:flex-row bg-[#1c1733]'
        >
        <div>
   
        <h3 className={styles.sectionHeadText}>Contact</h3>
       
       </div>
       <form
          onSubmit={handleSubmit}
          className='md:ml-10 mt-5 md:mt-0 flex flex-col w-full gap-2'
        >
            
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Who is contacting me?"
              className='bg-[#0e0c1e] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Your e-mail address..."
              className='bg-[#0e0c1e] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Your message...'
              className='bg-[#0e0c1e] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='py-3 bg-gray-800 hover:bg-gray-700 px-8 rounded-xl outline-none w-fit text-white font-bold '
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </motion.div>  
  </motion.div>
  );
};

export default Contact;
