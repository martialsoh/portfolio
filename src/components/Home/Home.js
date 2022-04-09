import React from 'react';
import '../../App.css';
import './HomeStyle.css';
import { Button } from '../Button/Button';
import { IoIosArrowDown } from 'react-icons/io';
import About from '../About/About';
import Skills from '../Skills/Skills';
import ContactForm from '../Contact/ContactForm';
import Footer from '../Footer/Footer';
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";
import { useRef } from "react";


function Home() {

  const AboutRef = useRef(null);
  
  const gotoAbout = () =>
    window.scrollTo({
      top: AboutRef.current.offsetTop,
      behavior: "smooth",

    });
   
  return (
    <>
       
      <section>
        
        {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}

        <div className='hero'>
          <div className='hero-left'>
            <h1> Hi,</h1>
            <h2> I'm Guy Soh </h2>
        
            <h3>DevOps Engineer</h3>
            <p>Passion always lead you to success...</p>
            <div className='hero-btns'>
              <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
              >
                View my resume
              </Button>
            </div>

          </div>
          <div className='hero1'>
            <div class="arrowDown">      
              <div className='arrow-holder'><div className='arrowBox' onClick={gotoAbout}><i className="fas scrolling" ><IoIosArrowDown /></i></div></div>              
            </div>
          </div>

          <div className='animation-right'>
           <BackgroundAnimation />
          </div>

        </div>
        
      </section>
      
      <section ref={AboutRef}>
        <About />
      </section>
     
      <section >
        <Skills />
      </section>
      
      <section >
        <ContactForm />
      </section>
      
      <section >
        <Footer />
      </section>
     
    </>
  );
}

export default Home;