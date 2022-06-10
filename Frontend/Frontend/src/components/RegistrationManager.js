import React, { useState ,useRef} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarComp from "../UI/NavbarComp";
//import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
// import "../App.css";

function Registration() {
  const navigate = useNavigate();
  const [register, setRegister] = useState(false);
  const [roleoption, setRoleoption] = useState("");
  const [roles, setRoles] = useState("");
  
  
  const userNameInputRef = useRef()
  const userPasswordInputRef = useRef()
  const roleNameInputRef = useRef()
  const addressInputRef = useRef()
  const cityInputRef = useRef()
  const nameInputRef = useRef()

  



  const addUser = async(event)=>{
    event.preventDefault();
    
    const user={
        name:nameInputRef.current.value,
        username:userNameInputRef.current.value,
        address:addressInputRef.current.value,
        city:cityInputRef.current.value,
        password:userPasswordInputRef.current.value,
       
         
    };
     await axios.post("http://localhost:8081/register/MANAGER",user)
    .then((response)=>{
        console.log(user);
      navigate("/login")
    })
    .catch((error)=>{

        alert("Could not create your account Please try again")

    })
    }


  
  const onValueChange=(events) =>{
    setRoles(events.target.value); 
  }
  





  return (
    <>
        {/* <NavbarComp/> */}
       <div class="img " style={{width: "100vw", height:"100vh"}} >
         <br></br>
      
        <div className="outer inner ">
          {" "}
           
            <form onSubmit={addUser} >
              <h3>Register</h3>

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  ref={nameInputRef}
                  

                 
                />
              </div>

              <div className="form-group">
                <label>Username</label>
                <input
                  type="username"
                  className="form-control"
                  placeholder="Enter username"
                  ref={userNameInputRef}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  ref={userPasswordInputRef}
                />
              </div>

              {/* <div className="form-group">
                <label>Phone No.</label>
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div> */}
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Address"
                  // onChange={(event) => setPhone(event.target.value)}
                  ref={addressInputRef}
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter City"
                  // onChange={(event) => setPhone(event.target.value)}
                  ref={cityInputRef}
                />
              </div>
             

              
              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Register
              </button>
              <br></br>
               <Link to={"/login"}> Already registered{" "}log in? </Link>
               <Link  to={"/registeruser"}  > Register as User</Link>
               
                
              
             
            </form>
          
        </div>

        </div>
    
    </>
  );
}

export default Registration;