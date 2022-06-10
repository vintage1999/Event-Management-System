import react, { Component} from "react";
import {Navbar,Nav,Form,FormControl,Button, Container} from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


export default class NavbarComp2 extends Component {

    static contextType = AuthContext

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
         {/* <Nav.Link ><Link to={"/"} >Home</Link></Nav.Link> */}
        <Nav.Link href="/userhome">Events</Nav.Link>
        <Nav.Link href="/usermovie">Movies</Nav.Link>  
      </Nav>
      <Form className="d-flex">
      
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      {/* onClick={()=>AuthContext.removeToken()} */}
      <Button variant="secondary"  href="/"  >Signout</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
            </>

        );
    }
}
