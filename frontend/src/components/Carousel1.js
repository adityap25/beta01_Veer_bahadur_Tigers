import React from 'react'
import img1 from '../Images/cartItem1.jpg'
import img2 from '../Images/cartItem2.jpg'
import img3 from '../Images/cartItem3.jpg'
import Carousel  from 'react-bootstrap/Carousel'

export default function Carousel1() {
 
    return (
      < div className='' >
        <Carousel>
          <Carousel.Item>
            <img className="img-fluid h-75 w-75" src={img1} alt="..." />
          </Carousel.Item >

          <Carousel.Item >
            <img className="img-fluid h-75 w-75" src={img2} alt="..." />
          </Carousel.Item >

          <Carousel.Item>
            <img className="img-fluid h-75 w-75" src={img3} alt="..." />
          </Carousel.Item >
        </Carousel >
      </div >
  )
}
