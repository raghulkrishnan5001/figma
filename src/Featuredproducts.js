import React from 'react'
import { AiOutlineStar } from "react-icons/ai";
import Vector from './pictures/Vector.jpg';

function Featuredproducts() {
  return (
    <div>
        <div className='text-center mt-5'>
                 <h5>FEATURED PRODUCTS</h5>
               </div>
               <div className='container'>
               <div className='row'>
              <div className='d-flex justify-content-center justify-content-between m-right mt-5'>
               <div className=''>
                 <img src={Vector} height='100'></img>
                 <div className='sneakers'>
                 <h6>Blue Swade Nike</h6>
                 <h6>Sneakers</h6></div>
                 <div className='stars'>
                 <span><AiOutlineStar color='#FFC600'/></span>
                 <span><AiOutlineStar color='#FFC600'/></span>
                 <span><AiOutlineStar color='#FFC600'/></span>
                 <span><AiOutlineStar color='#FFC600'/></span>
                 <span><AiOutlineStar color='#C1C8CE'/></span></div>
                 <div className='fournine'>$499</div>
               </div>

               <div className=''>
                 <img src={Vector} height='100'></img>
                 <div className='sneakers'>
                 <h6>Blue Swade Nike</h6>
                 <h6>Sneakers</h6></div>
                 <div className='stars'>
                 <span><AiOutlineStar color='#FFC600'/></span>
                 <span><AiOutlineStar color='#FFC600'/></span>
                 <span><AiOutlineStar color='#FFC600'/></span>
                 <span><AiOutlineStar color='#FFC600'/></span>
                 <span><AiOutlineStar color='#C1C8CE'/></span></div>
                 <div className='fournine'>$499</div>
               </div>

               <div className=''>
                 <img src={Vector} height='100'></img>
                 <div className='sneakers'>
                 <h6>Blue Swade Nike</h6>
                 <h6>Sneakers</h6></div>
                 <div className='stars'>
                 <span><AiOutlineStar color='#FFC600'/></span>
                 <span><AiOutlineStar color='#FFC600'/></span>
                 <span><AiOutlineStar color='#FFC600'/></span>
                 <span><AiOutlineStar color='#FFC600'/></span>
                 <span><AiOutlineStar color='#C1C8CE'/></span></div>
                 <div className='fournine'>$499</div>
               </div>
               </div>
               </div>
               </div>
    </div>
  )
}

export default Featuredproducts