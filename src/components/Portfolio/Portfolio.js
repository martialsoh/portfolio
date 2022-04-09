import React from 'react';
import '../../App.css';
import "./PortfolioStyle.css";
import CardItem from './CardItem';
import Footer from '../Footer/Footer';


function Portfolio() {

  return (
    <>
      <div className='portfolio'>
        <h1>Portfolio</h1>
      </div>



      <div className='Portfolio_container1'>
        <div className='cards'>
          <h1>Check out my Portfolio</h1>
          <div className='card-container'>
            
              <CardItem
                src='images/img-9.jpg'
                // text='Deploy an application (with high availability) with a database'
              />
              <CardItem
                // src='images/img-2.jpg'
                src='images/bougie.png'
                // text='Get your dockerized Django App up into the Cloud - Django Deployment + Postgres'
              />
              <CardItem
                src='images/img-6.jpg'
                // text='Create a monitoring dashboard for an application'
              />

              <CardItem
                src='images/img-3.jpg'
                // text='Create and run a CI/CD pipeline for an app'
              />
              <CardItem
                src='images/img-4.jpg'
                // text='Create an application with an API and deploy it to Kubernetes'
              />
              <CardItem
                src='images/img-8.jpg'
                // text='create a system to analyze and visualised the logs data'
              />
            
          </div>
        </div> 
      </div>
      
      
      <Footer />
      
      

    </>
  );
}

export default Portfolio;