import React from 'react'
import logo1 from './pictures/logo1.png';
import logo2 from './pictures/logo2.png';
import logo3 from './pictures/logo3.png';
import logo4 from './pictures/logo4.png';
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <div>
        <div className='background'>
{/* <div className='icon2'>
                <img src={diamond} width="30" height="30" ></img>
            </div> */}
            <div className=' comm1 fw-bold'> E-COMM</div>
</div>
<div className='para'>
Lorem Ipsum is simply dummy text<br/> of the printing and typesetting industry. Lorem <br/>Ipsum has been the industry's standard <br/>dummy text ever.Since the 1500s, when <br/>an unknown printer.
<div className=' comm2 fw-bold'> FOLLOW US</div>
<div className='para1'>
Since the 1500s, when an unknown <br/>printer took a galley of type and <br/>scrambled.
</div>
<div className='facebook'>< ImFacebook size="25" /></div>
<div className='twitter'><AiOutlineTwitter size ="25"/></div>
<div className='comm3 fw-bold'> CONTACT US</div>
<div className='para2'>E-Comm , 4578 <br/> Marmora Road,<br/> Glasgow D04 89GR</div>
<div className='info  fs-4'>Information</div>
<div className='info1'>
    About us <br/>
    Information <br/>
    Privacy Policy<br/>
    Terms & Condition
</div>

<div className=' Service fs-4'>Service</div>
<div className='Service1'>
    About us <br/>
    Information <br/>
    Privacy Policy<br/>
    Terms & Condition
</div>

<div className=' account fs-4'>My Account</div>
<div className='account1'>
    About us <br/>
    Information <br/>
    Privacy Policy<br/>
    Terms & Condition
</div>

<div className=' offer fs-4'>Our Offer</div>
<div className='offer1'>
    About us <br/>
    Information <br/>
    Privacy Policy<br/>
    Terms & Condition
</div>
<div className='bigline'>
<hr></hr>
</div>
<div className='C1'>
<img src={logo1} width="50" height="30" ></img></div>
</div>

<div className='C2'>
<img src={logo2} width="50" height="30" ></img></div>

<div className='C3'>
<img src={logo3} width="50" height="30" ></img></div>

<div className='C4'>
<img src={logo4} width="50" height="30" ></img></div>



<div className='com'>
© 2018 Ecommerce theme by www.bisenbaev.com
</div>
    </div>
  )
}

export default Footer