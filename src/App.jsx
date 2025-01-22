
import { useState, useEffect } from "react"
import HeroImg from "./components/HeroImg"
import NavBar from "./components/NavBar"
import AboutUs from "./components/AboutUs"
import Categories from "./components/Categories"
import Discover from "./components/Discover"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import HeroImg2 from "./components/HeroImg2"
import Footer from "./components/Footer"
import Contact from "./components/COntact"

function App() {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('#home'); // The section to track
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop <= -100) {
        setIsShrunk(true); // Shrink the navbar
      } else {
        setIsShrunk(false); // Reset the navbar size
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const [activeSection, setActiveSection] = useState(null); // Track the active section

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section'); // Get all sections
      let currentSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        // Check if the section is in view (you can adjust the condition as needed)
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection); // Update the active section
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="w-full h-screen flex flex-col m-0 bg-[rgb(242,236,228)] scroll-smooth"
      style={{
              fontFamily: "'Roboto', Ariel, sans-serif"
      }}>
        <header >
          <NavBar activeSection={activeSection} isShrunk={isShrunk}/>
        </header>
        {/* Hero Image */}
        <section id="home"> 
          <HeroImg/>
        </section>
        {/* about us */}
        <section id='about'>
          <AboutUs/>
        </section>
        {/* categories */}
        <section id="store">
          <Categories/>
          <Discover/>
        </section>
        {/* services */}
        <section id="services">
          <Services/>
        </section>
        {/* testimonials */}
        <section id="testimonials">
          <Testimonials/>
          <HeroImg2/>
        </section>
        {/* contact */}
        <section id='contact'>
          <Contact/>
        </section>
        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  )
}

export default App
