import React from "react";
import Promotion from "./pictures/Promotion.jpg";
import $53433 from "./pictures/$53433.jpg";
import imagepro1 from "./pictures/imagepro1.jpg";
import imagePro2 from './pictures/imagePro2.jpg'
import Product from './pictures/Product.jpg';

import "./Promotion.css";

function Promotionn() {
  return (
    <div>
      <div className="promotion-image">
        <img src={Promotion} height="450" width="100%"></img>
      </div>

     
        <div className="container">
            <div className="row">
              <div className="d-flex">
            <div className="col-4 px-0">
                <div className="card">
                    <div className="card-body">
                       <h4 className="card-title">FS - QUILTED MAXI CROSS BAG</h4>
                       <div>
                           <img src={Product} width='100%'/>
                           <div className="d-flex h4">
                           <p className="greyftf"> $534,33</p><p className="ms-2 orange-24">24% Off</p></div>
                           <div className="text-end h4 text-primary"><label>$299,43</label></div>
                           </div>
                           </div>
                           </div>
                           </div>
                          <div className="col-4 px-0">
                           <div className="card">
                    <div className="card-body">
                      <div className="d-flex mb-4">
                       <div className="col-6 h4">FS - QUILTED MAXI CROSS BAG</div>
                       <div className="col-6 text-end h4 text-primary"><label>$299,43</label></div>
                       </div>
                       <div>
                           <img src={imagepro1} width='100%'/>
                           <div className="d-flex justify-content-center h4">
                           <p className="greyftf"> $534,33</p><p className="ms-2 orange-24">24% Off</p></div>
                           
                           </div>
                       </div>
                    </div>
                </div>


                <div className="col-4 px-0">
                           <div className="card">
                    <div className="card-body">
                       <h4 className="card-title">FS - QUILTED MAXI CROSS BAG</h4>
                       <div className="d-flex h4">
                           <p className="greyftf"> $534,33</p><p className="ms-2 orange-24">24% Off</p></div>
                       <div>
                           <img src={imagePro2} width='100%'/>
                           
                           <div className="text-end h4 text-primary"><label>$299,43</label></div>
                           </div>
                       </div>
                    </div>
                </div>
           
                    </div>
               
             
                </div>
            </div>



            
            
            {/* <div className="fw-bold card-1">FS QUILTE CROSS MAXI BAG</div>
                <img src={imagepro1}/> 
                
                <div className="card-bottom"> 
                  <span className="">$534.33</span> 
                  <span className="">24% off</span> 
                  
                </div> 
                <div> 
                  $599.43 
                </div> 
              
            </div>
            <div className="col-4">
                <div className="card2-top">
                    <span>FS QUILTE CROSS MAXI BAG</span>
                    <span className="">$299</span>
                </div>
                <img src={imagepro1}/>
                <div className="card3-bottom"> 
                  <span className="">$534.33</span> 
                  <span className="">24% off</span> 
                  
                </div> 
            </div>
            <div className="col-4">
            <div className="card3-top">
                    FS QUILTE CROSS MAXI BAG
                    
                </div>
                <div className="">$299</div>
            <img src={imagepro1}/> */}
            
            
      {/* <div className="container cardPair fw-bold"> 
          <div className="row"> 
            <div className="col-4"> 
              <div className=" card1"> 
                <span className="card1-text-color">QUILTED MAXI CROSS BAG</span> 
                <div className="margin-card1"> 
                  <span className="strike-price">$534.33</span> 
                  <span className="color-orange">24% off</span> 
                </div> 
                <div className="text-end mb-3 marginPrice-card-1 color-blue"> 
                  $599.43 
                </div> 
              </div> 
            </div> 
 
            <div className="col-4 card2"> 
              <span> 
                <div className="d-flex"> 
                  <span className="col-8 card1-text-color"> 
                    FS-Nike Air Max 270 React... 
                  </span> 
                  <span className="col-4 color-blue pt-3">$299.43</span> 
                </div> 
                <div className="fw-bold text-center price-offer"> 
                  <span className="strike-price">$534.33</span> 
                  <span className="color-orange">24% off</span> 
                </div> 
              </span> 
            </div> 
 
            <div className="col-4 card3"> 
              <span className="card1-text-color"> 
                FS-Nike Air Max 270 React... 
              </span> 
              <div className="fw-bold "> 
                <span className="strike-price">$534.33</span> 
                <span className="color-orange">24% off</span> 
              </div> 
              <div className="color-blue margin-pricecard3">$299.43</div> 
            </div> 
          </div> 
        </div> */}
    </div>
  );
}

export default Promotionn;
{
  /* <div> FS-QUILTED MAXI</div>
        CROSS BAG */
}
// </div>

{
  /* <div className='fivethree'>

<div className='off'>24% off</div>
</div>

<div className='twonine'>$299.43</div> */
}
