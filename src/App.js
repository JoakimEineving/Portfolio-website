import React from "react";
import {
  // About,
  // Footer,
  Experience,
  Header,
  Skills,
  Particles,
  Slider,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  document.title = "Joakim's Portfolio";
  return (
    <div className="app">
      <Navbar />
      <Particles />
      <Header />
      {/* <About /> */}
      <Skills />
      <Slider />
      <Experience />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
