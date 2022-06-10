import React from "react";

import NavbarComp2 from "../UI/NavbarComp2";
import Footer from "../UI/Footer";
function Cart() {
  return (
    <>
    <NavbarComp2 />
    <div className = "container text-center">
    <h2>Events</h2>

    <button className = "btn btn-secondary">Make Payment</button>
        <table className="table">
            
            
            <thead>
                <tr>
                    <th scope="col">Sr No</th>
                    <th scope="col">Event Name</th>
                    <th scope="col">Event Description</th>
                    <th scope="col">Event Price</th>
                    <th scope="col">Event Time</th>
                    <th scope="col">Event Address</th>
                    <th scope="col">Event City</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                   <td>1</td>
                   <td>Standup</td>
                   <td>Comedy</td>
                   <td>10000</td>
                   <td>Ratri 7</td>
                   <td>Cognizant phase 3</td>
                   <td>Bhusawal</td>
                    <td><button className = "btn btn-danger">Remove</button></td>
                </tr>
                <tr>
                   <td>2</td>
                   <td>Horror Show</td>
                   <td>Horror</td>
                   <td>10000</td>
                   <td>Ratri 10</td>
                   <td>Crystal Market</td>
                   <td>Pune</td>
                    <td><button className = "btn btn-danger">Remove</button></td>
                </tr>
                <tr>
                   <td>3</td>
                   <td>Concert</td>
                   <td>Music</td>
                   <td>18900000</td>
                   <td> 6:30</td>
                   <td>Fountain Market</td>
                   <td>Hinjewadi</td>
                    <td><button className = "btn btn-danger">Remove</button></td>
                </tr>
                {/* <tr>
                    <th scope="row">2</th>
                    <td>Dosa</td>
                    <td>1</td>
                    <td><button className = "btn btn-danger">Remove</button></td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Pizza</td>
                    <td>5</td>
                    <td><button className = "btn btn-danger">Remove</button></td>
                </tr> */}
            </tbody>
        </table>
        <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
        
       
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <Footer positionStyle={"fixed"}/>
    
</>
  );
}

export default Cart;