import { BrowserRouter } from "react-router-dom";
import { About, Contact, Certificates, Hero, Navbar, Projects } from "./components";
import { useState } from "react";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<string | null>(null)

  return (
    <BrowserRouter>
      <div className='relative z-0 dd overflow-hidden'>
        <div
          className="bg-battle bg-cover"
        >
          <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <Hero setSelectedPage={setSelectedPage}/>  
        </div> 
        <About setSelectedPage={setSelectedPage}/>
        <Certificates setSelectedPage={setSelectedPage}/>
   
        <Projects setSelectedPage={setSelectedPage}/>
      
        <div className='relative z-0'>
          <Contact setSelectedPage={setSelectedPage}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
