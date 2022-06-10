import { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Navigate } from "react-router-dom";
import {useParams} from "react-router-dom";
import {AuthContext} from '../context/AuthContext'
import React, { useState , useRef,useContext} from "react";



// styling pages
import AdminNabar from "../UI/AdminNavbar";
import Footer from "../UI/Footer";

class EventHomePage extends Component {
    state = {
        events: [],
        isNewAdded: false,
        isInfo: false,
        isUpdated: false,
        isDeleted: false,
        currentId: 0,
        event: null,
        // auth: useContext(AuthContext)
    };
    
   
    componentDidMount = async () => {
        console.log(this.props.params.userId);
        console.log(this.props.params.userName);
        const response = await axios.get("http://localhost:8082/displayEvents");
        console.log(response.data.Events);
        this.setState({ events: response.data.Events });
        // console.log(this.state.auth.getToken());
    };

    addNewHandler = () => {
        this.setState({ isNewAdded: true });
    };

    updateNewHandler = (id) => {
        this.setState({ currentId: id, isUpdated: true });
    };

    infoHandler = (id) => {
        this.setState({ currentId: id, isInfo: true });
    };

    deleteMovie = async (id) => {
        let choice = window.confirm(
            "Do you really want to delete the movie with Id " + id + "?"
        );

        if (choice) {
            let response = await axios.delete(
                "http://localhost:8081/deleteevent/" + id
            );
            response = await axios.get("http://localhost:8081/displayEvents");
            this.setState({ events: response.data.Events });
        }
    };

    render() {
        if (this.state.isNewAdded) {
            return <Navigate to="/addevent" />;
        }

        if (this.state.isUpdated) {
            return (
                <Navigate to={"".concat("/updateevent/",this.state.currentId)}/>
            );
        }

        if (this.state.isInfo) {
            return (
                <Navigate to={"".concat("/eventinfo/",this.state.currentId)}/>
            );
        }

        return (
            <div >
                <AdminNabar navTitle={"Events"}   />
                <div className="container col-8 ">
                    <div className="d-flex justify-content-center m-3">
                        <h3 className="text-dark">Events</h3>
                    </div>
                    <div className="d-flex justify-content-center m-3">
                        <Button className="btn btn-dark"onClick={this.addNewHandler}>Add Events</Button>
                    </div>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                            <td> Event Id</td>
                            <td> Event Name</td>
                            <td> Event City</td>
                            <td> Event Date</td>
                            <td> Event Time</td>
                            <th style={{ width: 300 }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.events.map((x) => (
                                <tr key={x.eventId}>
                                    <td>{x.eventId}</td>
                                    <td>{x.eventName}</td>
                                    <td>{x.eventCity}</td>
                                    <td>{x.eventDate}</td>
                                    <td>{x.eventTime}</td>
                                    
                                    <td>
                                        <Button
                                            variant="primary"
                                            onClick={() => {
                                                this.infoHandler(
                                                    x.eventId
                                                );
                                            }}
                                        >
                                            More Info
                                        </Button>
                                        &nbsp;&nbsp;
                                        <Button
                                            variant="info"
                                            onClick={() => {
                                                this.updateNewHandler(
                                                    x.eventId
                                                );
                                            }}
                                        >
                                            Update
                                        </Button>
                                        &nbsp;&nbsp;
                                        <Button
                                            variant="danger"
                                            onClick={() => {
                                                this.deleteMovie(x.eventId);
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Footer positionStyle={"fixed"} />
            </div>
        );
    }
}

export default (props) =>(<EventHomePage{...props} params={useParams()}/>)
 ;
