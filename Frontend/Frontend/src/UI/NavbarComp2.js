import react, { Component} from "react";
import {Navbar,Nav,Form,FormControl,Button, Container} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default class NavbarComp2 extends Component {
 
    render(){
      
        return(
            <>
             <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Event Management</Navbar.Brand>
    <Navbar.Toggle aria-controls="event management" />
    <Navbar.Collapse id="event management">
      

      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
         <Nav.Link ><Link to={"/"} >Home</Link></Nav.Link>
        <Nav.Link href="#action2">About</Nav.Link>
        <Nav.Link href="#action2">ContactUs</Nav.Link>  
      </Nav>
      <Form className="d-flex">
      
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
       <Button variant="secondary"> <a href="/login"> </a> LogIn</Button>
       &nbsp; &nbsp; &nbsp; &nbsp;
        <Button variant="secondary"><Link to={"/register"}>Register</Link></Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
            </>

        );
    }
}
