import React from 'react';
import '../../App.css';
import ContactForm from './ContactForm';
import Footer from '../Footer/Footer';
import { FaBlackberry } from 'react-icons/fa';

function Contact() {

 
    return (

        <>
       

            <div className="contact">
              <h1>Contact</h1>   
            </div>
        
            <ContactForm />       
            <Footer />            
        </>
        
    )
}

export default Contact