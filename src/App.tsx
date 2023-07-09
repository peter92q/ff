import { BrowserRouter } from "react-router-dom";
import { About, Contact, Certificates, Feedbacks, Hero, Navbar, Projects } from "./components";
import { useLayoutEffect, useMemo, useState } from "react";
import battle2Image from '../src/assets/battle2.png';

const App = () => {
  const [selectedPage, setSelectedPage] = useState<string | null>(null)
  const [isImageLoaded, setImageLoaded] = useState(false);
  
  const loadImage = useMemo(() => {
    const image = new Image();
    image.src = battle2Image;

    image.onload = () => {
      setImageLoaded(true);
    };
    return () => {
      image.onload = null;
    };
  }, []);
  
  useLayoutEffect(() => {
    return loadImage;
  }, [loadImage]);

  return (
    <BrowserRouter>
      <div className='relative z-0 dd overflow-hidden'>
        <div 
          style={{ backgroundImage: `url(${battle2Image})` }}
          className={`bg-no-repeat bg-image ${isImageLoaded ? 'loaded' : ''}`}>
          <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <Hero setSelectedPage={setSelectedPage}/>  
        </div> 
        <About setSelectedPage={setSelectedPage}/>
        <Certificates setSelectedPage={setSelectedPage}/>
   
        <Projects setSelectedPage={setSelectedPage}/>
        <Feedbacks setSelectedPage={setSelectedPage}/>
        <div className='relative z-0'>
          <Contact setSelectedPage={setSelectedPage}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
