import React from 'react'
import './Promotion.css';
import caller from './pictures/caller.jpg';
import dollor from './pictures/dollor.jpg';
import shipping from './pictures/shipping.jpg';

function Freeshipping() {
  return (
    <div className='ms-5'>
       <div className='shipping'>
                 <img src={shipping} height='40'></img>
                 <div className='freeshipping'><h5>FREE SHIPPING</h5></div>
                 <div className='Lorem1'>
                 <div>Lorem Ipsum is simply</div>
                  <div> dummy text of the</div> 
                   <div>printing and typesetting</div>
                    <div>industry.</div>
                    </div>
               </div>

               <div className='dollor'>
                 <img src={dollor} height='60'></img>
                 <div className='refund'><h5>100% Refund</h5></div>
                 <div className='Lorem2'>
                 <div>Lorem Ipsum is simply</div>
                  <div> dummy text of the</div> 
                   <div>printing and typesetting</div>
                    <div>industry.</div>
                    </div>
               </div>

               <div className='caller'>
                <img src={caller} height='100'></img>
                <div className='support'><h5>SUPPORT 24/7</h5></div>
                <div className='Lorem3'>
                 <div>Lorem Ipsum is simply</div>
                  <div> dummy text of the</div> 
                   <div>printing and typesetting</div>
                    <div>industry.</div>
                    </div>
               </div>
    </div>
  )
}

export default Freeshipping
