import { Component } from "react";
import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";




export default class NavbarComp extends Component {


    static contextType = AuthContext
   
    
    
    render() {
        return (
            <>
                <div>
                    
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="#">
                                {this.props.navTitle}
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="movie app" />
                            <Navbar.Collapse id="movie app">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: "100px" }}
                                    navbarScroll
                                >   
                                    
                                    <Nav.Link href=" " >Events</Nav.Link>
                                    <Nav.Link  href="/movies">Movies </Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <i
                                        class="fa fa-cart-plus"
                                        aria-hidden="true"
                                    ></i>
                                    <Button variant="secondary"  href="/" >Signout</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </>
        );
    }
}
