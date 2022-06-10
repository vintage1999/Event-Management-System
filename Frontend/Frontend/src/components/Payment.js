import React, { useRef, useState } from 'react';

import NavbarComp3 from "../UI/NavbarComp3";
import Footer from "../UI/Footer";

import "./Payment.css";
import { Navigate } from 'react-router';

function Payment () {

      const [payment,setPayment] =useState(false);

     

      

    return(
      <>
      <NavbarComp3 navTitle={"Payment"} />
      <div className="form" >
        
          <div className="form-body">

                
              <table>
                  <tr>
                  <td>
                    <div className="cardnumber">
                        <label className="form__label" for="cardnumber">Card number </label>
                        <input  type="text" name="" id="cardnumber"  className="form__input"placeholder="1234 3456 2345 6789"/>
                    </div>
                  </td>
                  </tr>
              
                  <tr>
                  <td>
                    <div className="Expirydate">
                       <label className="form__label" for="Expirydate">Expiry date</label>
                       <tr><input  type="text" name="" id="Expirydate"  className="form__input"placeholder="MM/YY"/></tr>
                    </div>
                  </td>
                  
                  <td>
                    <div className="cvv">
                       <label className="form__label" for="cvv">CVV </label>
                       <input  type="text" name="" id="cvv"  className="form__input"placeholder="123"/>
                    </div>
                  </td>
                  
                  </tr>
              <tr>
              <td>
              <div className="nameoncard">
                  <label className="form__label" for="nameoncard">Name on card </label>
                  <tr><input className="form__input" type="text" id="nameoncard" placeholder="Mr. John"/></tr>
              </div>
              </td>
              </tr>

               

             </table> 
          </div>
          <button class="block" href="/userhome" >Pay</button>
          
      </div>
      <br/>
      <br/>
      <Footer positionStyle={"fixed"}/>
      </>      
    )  
    
  }     

export default Payment;