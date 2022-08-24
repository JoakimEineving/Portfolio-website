import React from "react";

import { About, Footer, Slider, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import './App.scss';

window.onbeforeunload = () => {  
  window.scrollTo(0, 0);  
};


const App = () => {


 
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      {/* <Skills /> */}
      
      <Work />
      
      
      <Footer />
    </div>
  );
};

export default App;
