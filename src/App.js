import "./App.scss";

import React from "react";

import { Navbar } from "./components";
import {
  About,
  Experience,
  Footer,
  Header,
  Particles,
  Skills,
  Slider,
} from "./container";

const App = () => {
  document.title = "Joakim's Portfolio";
  return (
    <div className="app">
      <Navbar />
      <Particles />
      <Header />
      <About />
      <Skills />
      <Slider />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
