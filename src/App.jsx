import Topbar from "./Components/topbar/Topbar";
import Contact from "./Components/contact/Contact";
import Portfolio from "./Components/portfolio/Portfolio";
import Works from "./Components/works/Works";
import Intro from "./Components/intro/Intro";
import Testimonials from "./Components/testimonials/Testimonials";
import Menu from "./Components/menu/Menu";
import "./app.scss";
import React, { useState } from "react";
function App(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}
export default App;
