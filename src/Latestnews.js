import React from 'react'
import Nike from './pictures/Nike.jpg';
import kronoslogo from './pictures/kronoslogo.jpg';
import figmalogo from './pictures/figmalogo.jpg';

function Latestnews() {
  return (
    <div>
        <div className='latestnews'><h5>LATEST NEWS</h5></div>

<div className='Nike'>
  <img src={Nike} height='30'></img>
  <div className='jan'><h5>01,Jan 2015</h5></div>
  <div className='fashionindustry'><h5>FASHION INDUSTRY</h5></div>
  <div className='lorem6'>
    Lorem Ipsum is simply
   <div> dummy text of the</div> 
    <div>printing and typesetting</div>
     <div>industry.</div>
     </div>
</div>

<div className='figmalogo'>
  <img src={figmalogo} height='40'></img>
  <div className='jan'><h5>01,Jan 2015</h5></div>
  <div className='Bestdesign'><h5>Best Design Tools</h5></div>
  <div className='lorem7'>
    Lorem Ipsum is simply
   <div> dummy text of the</div> 
    <div>printing and typesetting</div>
     <div>industry.</div>
     </div>
</div>

<div className='kronoslogo'>
  <img src={kronoslogo} height='50'></img>
  <div className='jan'><h5>01,Jan 2015</h5></div>
  <div className='hrcommunity'><h5>HR Community</h5></div>
  <div className='lorem8'>
    Lorem Ipsum is simply
   <div> dummy text of the</div> 
    <div>printing and typesetting</div>
     <div>industry.</div>
     </div>
</div>

    </div>
  )
}

export default Latestnews