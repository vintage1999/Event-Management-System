import { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Navigate } from "react-router-dom";

// styling pages
import NavbarComp from "../UI/NavbarComp";
import Footer from "../UI/Footer";

class Movie extends Component {
    state = {
        movies: [],
        isNewAdded: false,
        isInfo: false,
        isUpdated: false,
        isDeleted: false,
        currentId: 0,
        movie: null,
    };

    componentDidMount = async () => {
        const response = await axios.get("http://localhost:8080/movies/");
        console.log(response.data);
        this.setState({ movies: response.data });
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
                "http://localhost:8080/movies/" + id
            );
            response = await axios.get("http://localhost:8080/movies/");
            this.setState({ movies: response.data });
        }
    };

    render() {
        if (this.state.isNewAdded) {
            return <Navigate to="/add" />;
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
                <NavbarComp navTitle={"Movies"}/>
                <div className="container col-8">
                    <div className="d-flex justify-content-center m-3">
                        <h3 className="text-dark">Admin Movies List</h3>
                    </div>
                    <div className="d-flex justify-content-center m-3">
                        <Button className="btn btn-dark"onClick={this.addNewHandler}>Add Movie</Button>
                    </div>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Movie Id</th>
                                <th>Movie Name</th>
                                <th>Movie Genre</th>
                                <th>Movie Price</th>
                                <th>Date Added</th>
                                <th style={{ width: 300 }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.movies.map((x) => (
                                <tr key={x.movieid}>
                                    <td>{x.movieid}</td>
                                    <td>{x.moviename}</td>
                                    <td>{x.moviegenre}</td>
                                    <td>${x.movieprice}</td>
                                    <td>
                                        {x.moviereleaseday}/
                                        {x.moviereleasemonth}/
                                        {x.moviereleaseyear}
                                    </td>
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
                                            variant="info"
                                            onClick={() => {
                                                this.updateNewHandler(
                                                    x.movieid
                                                );
                                            }}
                                        >
                                            Update
                                        </Button>
                                        &nbsp;&nbsp;
                                        <Button
                                            variant="danger"
                                            onClick={() => {
                                                this.deleteMovie(x.movieid);
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
            </>
        );
    }
}

export default Movie;
