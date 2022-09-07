import React from "react";

import { About, Footer, Experience, Header, Skills, Particles, Work } from "./container";
import { Navbar } from "./components";

import './App.scss';


// window.onbeforeunload = () => {  
//   window.scrollTo(0, 0);  
// };


const App = () => {
 
  return (
    <div className="app">
      <Navbar />
      <Particles />
      <Header />
      <About />
      <Skills />
      <Experience />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
