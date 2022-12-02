import React from 'react'
// import img1 from '../Images/carItem1.jpg'
import img2 from '../Images/carItem2.jpg'
// import img3 from '../Images/carItem3.jpg'
import Carousel  from 'react-bootstrap/Carousel'

export default function Carousel1() {
 
    return (
      < div className='' >
        <Carousel>
          <Carousel.Item>
            <img className="img-fluid h-75 w-75" src={img2} alt="..." />
          </Carousel.Item >

          <Carousel.Item >
            <img className="img-fluid h-75 w-75" src={img2} alt="..." />
          </Carousel.Item >

          <Carousel.Item>
            <img className="img-fluid h-75 w-75" src={img2} alt="..." />
          </Carousel.Item >
        </Carousel >
      </div >
  )
}
