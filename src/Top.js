import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./Top.css";

function Top() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6 ">
            <select className="select border-0">
              <option>EN</option>
              <option>Languages</option>
              <option>Tamil</option>
              <option>English</option>
              <option>Telugu</option>
              <option>Hindi</option>
              <option>Kannada</option>
            </select>

            <select className="select border-0">
              <option>UNITED STATES DOLLAR</option>
              <option>INDIAN RUPEE</option>
              <option>SRI LANKAN RUPEE</option>
              <option>SOUTH AFRICAN RAND</option>
              <option>SINGAPORE DOLLAR</option>
              <option>HONG KONG DOLLAR</option>
            </select>
          </div>
          <div className="col-6 text-end">
            <span className="ms-5">My profile</span>
            <span className="ms-5">Items</span>
            <span className="ms-5">$0.00</span>
            <ul>
              <li>
                {/* <link to='./Cart'>Cart
          <i class='fas fa-shopping-cart'/>
          </link> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container"></div>
      <div className="row">
        <div className="col-6">
          <span className="ms-5">E-Comm</span>
        </div>
        <div className="col-6 text-end">
          <span className="ms-5">HOME</span>
          <span className="ms-5">BAGS</span>
          <span className="ms-5">SNEAKERS</span>
          <span className="ms-5">BELT</span>
          <span className="ms-5">CONTACT</span>
        </div>
      </div>
    </div>
  );
}

export default Top;
