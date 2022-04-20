import React from "react"
import '../../App.css';
import "./PortfolioStyle.css";
import Card from "./Card"
import Portfolio_data from "./data"
import Footer from '../Footer/Footer';
import { motion } from "framer-motion";


const Portfolio1 = () => {
  return (
    <>

      <div className='portfolio'>
        <motion.div className='text_title'
          initial={{y: 100, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.7}}
        >
          <h1 className="text__title">My Portfolio</h1>
          <h5 className="text__title">Visit my portfolio and keep your feedback </h5>
        </motion.div>
      </div>

      <section className='Portfolio top' id='Portfolio'>
        <div className='container3'>
          <div className='content grid'>
            {Portfolio_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} desc_one={value.desc_one} desc_two={value.desc_two}/>
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