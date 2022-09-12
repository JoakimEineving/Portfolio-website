import React from "react";

import { About, Footer, Experience, Header, Skills, Particles } from "./container";
import { Navbar } from "./components";

import './App.scss';





const App = () => {
  console.log(window.location)
 
  return (
    <div className="app">
      <Navbar />
      <Particles />
      <Header />
      <About href="about" />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
