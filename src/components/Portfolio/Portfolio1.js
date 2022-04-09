import React from "react"
import '../../App.css';
import "./PortfolioStyle1.css";
import Card from "./Card"
import Portfolio_data from "./data1"
import Footer from '../Footer/Footer';



const Portfolio1 = () => {
  return (
    <>

      <div className='portfolio'>
        <h1>Portfolio</h1>
      </div>

      <section className='Portfolio top' id='Portfolio'>
        <div className='container3'>
          <div className='heading text-center '>
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h2>My Portfolio</h2>
          </div>

          <div className='content grid'>
            {Portfolio_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} />
              // desc_one={value.desc_one} desc_two={value.desc_two}
            })}

          </div>
        </div>
      </section>
      
      <section>
       <Footer />
      </section>
    </>
  )
}

export default Portfolio1