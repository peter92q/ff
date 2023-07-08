import { SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { navLinks } from "../staticData";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../motion/motion";
import { SelectedPage } from "../staticData/types";

const Navbar = (
    {
      selectedPage,
      setSelectedPage
    }
    :
    {
      selectedPage: string | null;
      setSelectedPage: React.Dispatch<SetStateAction<string | null>>;
    }
    ) => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25}} 
      className={`md:px-10 xl:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-[#1c173370]" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto '>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setSelectedPage(SelectedPage.Home);
            window.scrollTo(0, 0);
          }}
        > 
        <div className="lg:translate-x-[-35px] flex flex-row justify-center items-center">
          <motion.img 
            variants={zoomIn(0.2,0.6)}
            src={logo} alt='logo' className='w-12 h-12 object-contain orbit mr-2' />
          <motion.p
           variants={fadeIn("right","tween",0.2, 1)} 
           className='text-white text-[18px] font-bold cursor-pointer flex '>
            Peter &nbsp;
            <span className='sm:block hidden'> | Portfolio</span>
          </motion.p>
          </div>
        </Link>

        <motion.ul
           variants={fadeIn("right","tween",0.5, 1)} 
          className='list-none hidden sm:flex flex-row gap-2 xl:gap-10'>
          {navLinks.map((nav) => (
            <li
              style={{transition: 'opacity 0.3s ease-in-out'}}
              key={nav.id}
              className={`${ 
               selectedPage === nav.id ? "text-purple-500 opacity-100" : "text-white/50 opacity-60"
              } hover:text-white text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </motion.ul> 

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#1c1733] border-[1px] border-white/40 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          > 
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                   selectedPage === nav.id ? "text-purple-500 opacity-100" : "text-white/50 opacity-60"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
