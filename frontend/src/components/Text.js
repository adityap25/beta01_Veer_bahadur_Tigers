import React from 'react'
import img1 from '../Images/text.jpg'

function Text() {

  const heading = {
    fontSize : '50px',
    fontWeight : '700',
    color : 'white',
    marginBottom : '50px'
  }

  return (
    <div style={{marginTop : '200px', marginBottom : '200px', backgroundColor : '#144dc1', paddingTop : '100px', paddingBottom : '100px'}}>
      < div className='text-center' style={heading} >
        A GLOBAL FOODBANKING NETWORK PARTNER
      </div >


      <div className='row mt-3 ms-5 ps-5' styles = {{padding : '50px'}}>
        <div className='col-5 lg-3 mt-3' style={{textAlign : 'right', fontSize : '20px', color : 'white'}}>
          
          <p>The Global FoodBanking Network seeks to create a hunger free world and actively assists food bank operations in over 40 countries across the globe to achieve the same. Bangalore Food Bank will follow and replicate the Global Food Banking Network's globally successful systems and practices in Bengaluru.</p>
        </div>
        <div className='col-6'>
          <img className="img-fluid w-75" src={img1} alt="..."/>

        </div>
      </div>


    </div>
  )
}

export default Text;