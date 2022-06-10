import { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Navigate } from "react-router-dom";

// styling pages
import NavbarComp from "../UI/NavbarComp";
import Footer from "../UI/Footer";

class UserEventHomePage extends Component {
    state = {
        events: [],
        isNewAdded: false,
        isPaid:false,
        isInfo: false,
        isUpdated: false,
        isDeleted: false,
        currentId: 0,
        event: null,

    };

    componentDidMount = async () => {
        const response = await axios.get("http://localhost:8082/displayEvents");
        console.log(response.data.Events);
        this.setState({ events: response.data.Events });
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
            "Do you really want to Book the movie with Id " + id + "?"
        );

        console.log(choice);
        if (choice) {
            this.setState({ isPaid: true });
           
        }
    };

    render() {
        if (this.state.isNewAdded) {
            return <Navigate to="/add" />;
        }
        if (this.state.isPaid) {
            return <Navigate to="/payments" />;
        }

        if (this.state.isUpdated) {
            return (
                <Navigate to={"".concat("/update/",this.state.currentId)}/>
            );
        }

        if (this.state.isInfo) {
            return (
                <Navigate to={"".concat("/info/",this.state.currentId)}/>
            );
        }

        return (
            <>
                <NavbarComp navTitle={"Events"}/>
                <div className="container col-8">
                    <div className="d-flex justify-content-center m-3">
                        <h3 className="text-dark">Events</h3>
                    </div>
                    {/* <div className="d-flex justify-content-center m-3">
                        <Button className="btn btn-dark"onClick={this.addNewHandler}>Add Events</Button>
                    </div> */}
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
                                                    x.movieid
                                                );
                                            }}
                                        >
                                            More Info
                                        </Button>
                                        &nbsp;&nbsp;
                                        <Button
                                            variant="danger"
                                            onClick={() => {
                                                this.deleteMovie(x.eventId);
                                            }}
                                        >
                                            Book
                                        </Button>
                                        &nbsp;&nbsp;
                                        {/* <Button
                                            variant="info"
                                            onClick={() => {
                                                this.updateNewHandler(
                                                    x.movieid
                                                );
                                            }}
                                        >
                                            Update
                                        </Button> */}
                                        
                                        
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Footer positionStyle={"fixed"} />
            </>
        );
    }
}

export default UserEventHomePage;
