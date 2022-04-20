import React from 'react';
import '../../App.css';
import ContactForm from './ContactForm';
import Footer from '../Footer/Footer';
// import { FaBlackberry } from 'react-icons/fa';
import { motion } from "framer-motion";

function Contact() {

 
    return (

        <>
       
            <div className="contact">
                <motion.div className='text_title'
                    initial={{y: 100, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.7}}
                >
                  <h1 className="text__title">Contact</h1>
                  <h5 className="text__title">Feel free to reach out to me at anytime, my inbox is always open.</h5>
                  <h5 className="text__title">Whether you have a question or just want to say hi, I’ll try my best to get back to you!</h5>
                </motion.div> 
            </div>
        
            <ContactForm />       
            <Footer />            
        </>
        
    )
}

export default Contact