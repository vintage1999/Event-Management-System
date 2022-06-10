import axios from "axios";
import { useRef, useState } from "react";
import { Button,Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../UI/Footer";
import NavbarComp from "../UI/NavbarComp";
// import { Link } from "react-router-dom";

const AddMovie = () => {

    const navigate = useNavigate();
    const [addMovies, setAddMovies] = useState(false);
    const [isCancel, setIsCancel] = useState(false);

    const movieIdInputRef = useRef()
    const movieNameInputRef = useRef()
    const movieDescriptionInputRef = useRef()
    const movieGenreInputRef = useRef()
    const moviePriceInputRef = useRef()
    const movieVideoPathInputRef = useRef()
    const movieReleaseDayInputRef = useRef()
    const movieReleaseMonthInputRef = useRef()
    const movieReleaseYearInputRef = useRef()

    const addMovie = async(event)=>{
        event.preventDefault();

        const movie={
            movieid:movieIdInputRef.current.value,
            moviename:movieNameInputRef.current.value,
            moviedescription:movieDescriptionInputRef.current.value,
            moviegenre:movieGenreInputRef.current.value,
            movieprice:moviePriceInputRef.current.value,
            movievideopath:movieVideoPathInputRef.current.value,
            moviereleaseday:movieReleaseDayInputRef.current.value,
            moviereleasemonth:movieReleaseMonthInputRef.current.value,
            moviereleaseyear:movieReleaseYearInputRef.current.value    
        };

        let response = await axios.post("http://localhost:8080/movies/",movie);
        console.log(response.data);
        setAddMovies(true);

    }

    const cancelAdd = ()=> {
        setIsCancel(true);
    }

    if(isCancel || addMovies){
        return navigate("/movies")
    }

    return(
        <div className="img">
            <NavbarComp  navTitle={"Add Movie"}/>
            <Card className = "container inner outer">
                <h3 className = "text-dark text-center">Add Movie</h3>
                <div className="card-body d-flex justify-content-center">
                <form onSubmit = {addMovie}>
                    <div className = "form-group col-12">
                        <label className = "fw-bold">Movie Id</label>
                        <input 
                            type = "text"
                            name = "movieid"
                            className = "form-control"
                            ref = {movieIdInputRef}
                        />
                    </div>
                    <br/>

                    <div className = "form-group col-12">
                        <label className = "fw-bold">Movie Name</label>
                        <input 
                            type = "text"
                            name = "moviename"
                            className = "form-control"
                            ref = {movieNameInputRef}
                        />
                    </div>
                    <br/>

                    <div className = "form-group col-12">
                        <label className = "fw-bold">Movie Description</label>
                        <input 
                            type = "text"
                            name = "moviedescription"
                            className = "form-control"
                            ref = {movieDescriptionInputRef}
                        />
                    </div>
                    <br/>

                    <div className = "form-group col-12">
                        <label className = "fw-bold">Movie Genre</label>
                        <input 
                            type = "text"
                            name = "moviegenre"
                            className = "form-control"
                            ref = {movieGenreInputRef}
                        />
                    </div>
                    <br/>

                    <div className = "form-group col-12">
                        <label className = "fw-bold">Movie Video Link</label>
                        <input 
                            type = "text"
                            name = "movievideopath"
                            className = "form-control"
                            ref = {movieVideoPathInputRef}
                        />
                    </div>
                    <br/>

                    <div className = "form-group col-12">
                        <label className = "fw-bold">Movie Price</label>
                        <input 
                            type = "number"
                            name = "movieprice"
                            className = "form-control"
                            ref = {moviePriceInputRef}
                        />
                    </div>
                    <br/>

                    <div className = "form-group col-12">
                        <label className = "fw-bold">Movie Release Day</label>
                        <input 
                            type = "number"
                            name = "moviereleaseday"
                            className = "form-control"
                            ref = {movieReleaseDayInputRef}
                        />
                    </div>
                    <br/>

                    <div className = "form-group col-12">
                        <label className = "fw-bold">Movie Release Month</label>
                        <input 
                            type = "number"
                            name = "moviereleaseday"
                            className = "form-control"
                            ref = {movieReleaseMonthInputRef}
                        />
                    </div>
                    <br/>

                    <div className = "form-group col-12">
                        <label className = "fw-bold">Movie Release Year</label>
                        <input 
                            type = "number"
                            name = "moviereleaseday"
                            className = "form-control"
                            ref = {movieReleaseYearInputRef}
                        />
                    </div>
                    <br/>
                <Button type = "submit">Add</Button>&nbsp;&nbsp;
                <Button onClick={cancelAdd} >Cancel</Button>
            </form>
            </div>
            <br/>
        </Card>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer positionStyle={"relative"}/>
        </div>
    );
};

export default AddMovie;
