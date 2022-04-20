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
import { motion } from "framer-motion";


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
          <motion.div className='hero-left'
             initial={{x: '100vw', opacity: 0}}
             animate={{x: 0, opacity: 1}}
             transition={{duration: 1}}
          >

            <h1> Hi,</h1>
            <h2> I'm Guy Soh </h2>
            <h3>DevOps Engineer</h3>
            <p>Passion - Performance - Principles</p>
            <div className='hero-btns'>
              <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
              >
                View my resume
              </Button>
            </div>

            {/* <div>
              <p onClick={this.updateLikes}>Like</p>
              <p>{this.state.likes}</p>
            </div> */}

          </motion.div>
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