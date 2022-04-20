import React from "react";
import "./AboutStyle.css";
import {FaInstagram, FaTwitter, FaLinkedinIn, FaGithub} from 'react-icons/fa';


function About() {
    return (
      <div className="about">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
              <img
                src='images/martial.png'
                alt=""
                className="a-img"
              />
            </div>
            <div class="social-menu1">
              <ul>    
                <li><a href="http://www.linkedin.com/in/guy-mouafo-67b94a223" target="_blank" rel="noreferrer noopener"><i className="fa fa-linkedin"><FaLinkedinIn /></i></a></li>
                <li><a href="https://twitter.com/yancraft237" target="_blank" rel="noreferrer noopener"><i className="fa fa-twitter"><FaTwitter /></i></a></li>
                <li><a href="https://www.instagram.com/martial.soh/" target="_blank" rel="noreferrer noopener"><i className="fa fa-instagram"><FaInstagram /></i></a></li>
                <li><a href="https://github.com/martialsoh" target="_blank" rel="noreferrer noopener"><i className="fa fa-github"><FaGithub /></i></a></li>
              </ul>        
            </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            It is a long established fact that tell you about my personality.
          </p>
          <p className="a-desc">
          Achieved a BEng in Elevtrical & computer Engineering. I am a good communicator 
          and motivator, able to work as part of a team but also under my 
          own initiative. I am a person who is self-motivated, energetic 
          hardworking and reliable. My current work experience includes Cloud
          Native DevOps infrastructure migration. Monitoring, securing and 
          taking part of the form in automating and supporting to ensure 
          CI/CD in product development.
          </p>
          <div className="a-award">
            <img src='images/award.png' alt="" className="a-award-img" />
            <div className="a-award-texts">
              {/* <h4 className="a-award-title">International Design Awards 2021</h4> */}
              <p className="a-award-desc">
                Achivement award from different organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;