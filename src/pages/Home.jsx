import React, { useState } from "react";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/NavBar";
import Resume from "../components/resume/Resume";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";
import MarqueeSlide from "../components/marquee/marqueeSlide";
import MobNavBar from "../components/navbar/MobNavBar";
import Logomarquee from "../components/skills/skillMarquee";
// import About from "../components/about/About";

const Home = ({ isDarkMode }) => {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MobNavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
      {/* <About /> */}
      <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Logomarquee darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Work darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Resume darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MarqueeSlide darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
};

export default Home;
