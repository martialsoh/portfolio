import React from 'react';
import './FooterStyle.css';
// import { Link } from 'react-router-dom';
import {FaInstagram, FaTwitter, FaLinkedinIn, FaGithub} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Let's Connect           
        </p>
        <div class="social-menu">
          <ul>    
            <li><a href="http://www.linkedin.com/in/guy-mouafo-67b94a223" target="_blank" rel="noreferrer noopener"><i className="fa fa-linkedin"><FaLinkedinIn /></i></a></li>
            <li><a href="https://twitter.com/yancraft237" target="_blank" rel="noreferrer noopener"><i className="fa fa-twitter"><FaTwitter /></i></a></li>
            <li><a href="https://www.instagram.com/martial.soh/" target="_blank" rel="noreferrer noopener"><i className="fa fa-instagram"><FaInstagram /></i></a></li>
            <li><a href="https://github.com/martialsoh" target="_blank" rel="noreferrer noopener"><i className="fa fa-github"><FaGithub /></i></a></li>
          </ul>        
        </div>
      </section>
    </div>
  );
}

export default Footer;