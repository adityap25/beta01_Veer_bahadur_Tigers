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
        A global food donation portal
      </div >


      <div className='row mt-3 ms-5 ps-5' styles = {{padding : '50px'}}>
        <div className='col-5 lg-3 mt-3' style={{textAlign : 'right', fontSize : '20px', color : 'white'}}>
          
          <p>A global food donation portal which seeks to create a hunger free world and actively assists food providing organisations across the country to achieve the same.</p>
        </div>
        <div className='col-6'>
          <img className="img-fluid w-75" src={img1} alt="..."/>

        </div>
      </div>


    </div>
  )
}

export default Text;