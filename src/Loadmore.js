import React from 'react'
import './Promotion.css'
import imagepro11 from './pictures/imagepro11.jpg'

function Loadmore() {
  return (
      <div>
    <div className='text-center text-primary loadmore'>
        LOAD MORE
    </div>
    <div className='Bluepart'>
                 <div className='adidas'><h2>Adidas Men Running </h2>
                 <h2>Sneakers</h2></div>
                 <div className='Performence'><h5>Performance and Design. Taken right to the Edge</h5></div>
                 <div className='shopnow'><h5>SHOP NOW</h5></div>
                 <div className='imgpro11'><img src={imagepro11} height='400'></img></div>
    
    </div>
    </div>
  )
}

export default Loadmore