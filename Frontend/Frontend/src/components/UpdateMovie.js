import { useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import NavbarComp from "../UI/NavbarComp";
import Footer from "../UI/Footer";

const UpdateMovie = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [updateStatus, setUpdateStatus] = useState(false);
    const [isCancel, setIsCancel] = useState(false);

    //state variables
    const [movieID, setMovieID] = useState("");
    const [movieName, setMovieName] = useState("");
    const [movieDescription, setMovieDescription] = useState("");
    const [movieGenre, setMovieGenre] = useState("");
    const [moviePrice, setMoviePrice] = useState("");
    const [movieVideoPath, setMovieVidepPath] = useState("");
    const [movieReleaseDay, setMovieReleaseDay] = useState("");
    const [movieReleaseMonth, setMovieReleaseMonth] = useState("");
    const [movieReleaseYear, setMovieReleaseYear] = useState("");

    // reference variables
    const movieIdInputRef = useRef();
    const movieNameInputRef = useRef();
    const movieDescriptionInputRef = useRef();
    const movieGenreInputRef = useRef();
    const moviePriceInputRef = useRef();
    const movieVideoPathInputRef = useRef();
    const movieReleaseDayInputRef = useRef();
    const movieReleaseMonthInputRef = useRef();
    const movieReleaseYearInputRef = useRef();

    useEffect(() =>{ async function getUsers(){
        let response = await axios.get(
            "http://localhost:8080/movies/".concat(id)
        );
        console.log(response.data);
        setMovieID(response.data.movieid);
        setMovieName(response.data.moviename);
        setMovieDescription(response.data.moviedescription);
        setMoviePrice(response.data.movieprice);
        setMovieGenre(response.data.moviegenre);
        setMovieVidepPath(response.data.movievideopath);
        setMovieReleaseDay(response.data.moviereleaseday);
        setMovieReleaseMonth(response.data.moviereleasemonth);
        setMovieReleaseYear(response.data.moviereleaseyear);
    };
        getUsers();
    });

    const updateMovie = async (event) => {
        event.preventDefault();

        const movie = {
            movieid: movieIdInputRef.current.value,
            moviename: movieNameInputRef.current.value,
            moviedescription: movieDescriptionInputRef.current.value,
            moviegenre: movieGenreInputRef.current.value,
            movieprice: moviePriceInputRef.current.value,
            movievideopath: movieVideoPathInputRef.current.value,
            moviereleaseday: movieReleaseDayInputRef.current.value,
            moviereleasemonth: movieReleaseMonthInputRef.current.value,
            moviereleaseyear: movieReleaseYearInputRef.current.value,
        };

        let response = await axios.put(
            "http://localhost:8080/movies/" + "".concat(id),
            movie
        );
        console.log("New Data");
        console.log(response.data);
        setUpdateStatus(true);
    };

    const cancelAdd = () => {
        setIsCancel(true);
    };

    if (isCancel || updateStatus) {
        return navigate("/movies");
    }

    return (
        <>
            <NavbarComp />
            <div className="container">
                <h3 className="text-primary">Update Movie</h3>
                <form onSubmit={updateMovie}>
                    <div className="form-group col-3">
                        <label className="fw-bold">Movie Id</label>
                        <input
                            type="text"
                            name="movieid"
                            className="form-control"
                            defaultValue={movieID}
                            ref={movieIdInputRef}
                        />
                    </div>
                    <br />

                    <div className="form-group col-3">
                        <label className="fw-bold">Movie Name</label>
                        <input
                            type="text"
                            name="moviename"
                            className="form-control"
                            defaultValue={movieName}
                            ref={movieNameInputRef}
                        />
                    </div>
                    <br />
                    
                    <div className="form-group col-3">
                        <label className="fw-bold">Movie Description</label>
                        <input
                            type="text"
                            name="moviedescription"
                            className="form-control"
                            defaultValue={movieDescription}
                            ref={movieDescriptionInputRef}
                        />
                    </div>
                    <br />

                    <div className="form-group col-3">
                        <label className="fw-bold">Movie Genre</label>
                        <input
                            type="text"
                            name="moviegenre"
                            className="form-control"
                            defaultValue={movieGenre}
                            ref={movieGenreInputRef}
                        />
                    </div>
                    <br />

                    <div className="form-group col-3">
                        <label className="fw-bold">Movie Video Link</label>
                        <input
                            type="text"
                            name="movievideopath"
                            className="form-control"
                            defaultValue={movieVideoPath}
                            ref={movieVideoPathInputRef}
                        />
                    </div>
                    <br />

                    <div className="form-group col-3">
                        <label className="fw-bold">Movie Price</label>
                        <input
                            type="number"
                            name="movieprice"
                            className="form-control"
                            defaultValue={moviePrice}
                            ref={moviePriceInputRef}
                        />
                    </div>
                    <br />

                    <div className="form-group col-3">
                        <label className="fw-bold">Movie Release Day</label>
                        <input
                            type="number"
                            name="moviereleaseday"
                            className="form-control"
                            defaultValue={movieReleaseDay}
                            ref={movieReleaseDayInputRef}
                        />
                    </div>
                    <br />

                    <div className="form-group col-3">
                        <label className="fw-bold">Movie Release Month</label>
                        <input
                            type="number"
                            name="moviereleaseday"
                            className="form-control"
                            defaultValue={movieReleaseMonth}
                            ref={movieReleaseMonthInputRef}
                        />
                    </div>
                    <br />

                    <div className="form-group col-3">
                        <label className="fw-bold">Movie Release Year</label>
                        <input
                            type="number"
                            name="moviereleaseday"
                            className="form-control"
                            defaultValue={movieReleaseYear}
                            ref={movieReleaseYearInputRef}
                        />
                    </div>
                    <br />
                    
                    <Button type="submit">Update</Button>&nbsp;&nbsp;
                    <Button onClick={cancelAdd}>Cancel</Button>
                </form>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer positionStyle={"relative"}/>
        </>
    );
};

export default UpdateMovie;
