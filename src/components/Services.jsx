import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import serviceImg1 from "../assets/service1.jpg"
import serviceImg2 from "../assets/service2.jpg"
import serviceImg3 from "../assets/service3.jpg"

function Services() {
  return (
    <div className='services'>
      <Carousel 
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1500}
        showThumbs={false}
      >
        <div className='serviceImg'>
            <img src={serviceImg1} alt="serviceImg1" />
            <p className="legend">Front-End Web Development</p>
        </div>
        <div className='serviceImg'>
            <img src={serviceImg2} alt="serviceImg2" />
            <p className="legend">Web Designingt</p>
        </div>
        <div className='serviceImg'>
            <img src={serviceImg3} alt="serviceImg3" />
            <p className="legend">SEO - Search Engine Optimization</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services
