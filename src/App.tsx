import { BrowserRouter } from "react-router-dom";

import { About, Contact, Certificates, Feedbacks, Hero, Navbar, Projects } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#050816] overflow-hidden'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero /> 
        </div> 
        <About />
        <Certificates />
   
        <Projects />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
