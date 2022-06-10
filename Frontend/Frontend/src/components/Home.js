import react, { Component} from "react";
import {Navbar,Nav,Form,FormControl,Button, Container} from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

import CarouselContainer from "./CarouselContainer";
import Footer from "../UI/Footer";

export default class Navbar2 extends Component {
 
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
        
      </Nav>
      <Form className="d-flex">
      
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      
      <Button className="btn btn-dark " variant="primary"> <a className="btn btn-secondary "   href="/login"> LogIn</a></Button>
       &nbsp; &nbsp; 
        <Button className="btn btn-dark" variant="secondary"> <a className="btn btn-secondary"   href="/register" >Register</a> </Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
            <CarouselContainer />
            <Footer/>
            </>

        );
    }
}
