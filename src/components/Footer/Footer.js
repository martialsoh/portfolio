import React from 'react';
import './FooterStyle.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Let's Connect           
        </p>
        <div class="social-menu">
          <ul>    
            <li><a href="" target="_blank" rel="noreferrer noopener"><i className="fa fa-facebook"><FaFacebookF /></i></a></li>
            <li><a href="" target="_blank" rel="noreferrer noopener"><i className="fa fa-twitter"><FaTwitter /></i></a></li>
            <li><a href="" target="_blank" rel="noreferrer noopener"><i className="fa fa-instagram"><FaInstagram /></i></a></li>
            <li><a href="" target="_blank" rel="noreferrer noopener"><i className="fa fa-youtube"><FaYoutube /></i></a></li>
            <li><a href="http://www.google.com" target="_blank" rel="noreferrer noopener"><i className="fa fa-github"><FaGithub /></i></a></li>
            <li><a href="http://www.linkedin.com/in/guy-mouafo-67b94a223" target="_blank" rel="noreferrer noopener"><i className="fa fa-linkedin"><FaLinkedinIn /></i></a></li>
          </ul>  
              
        </div>
      </section>
    </div>
  );
}

export default Footer;