import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">
        {["home", "about", "experience"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
