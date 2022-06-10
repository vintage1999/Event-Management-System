import { useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import NavbarComp from "../UI/NavbarComp";
import Footer from "../UI/Footer";
import { Badge, Button, Card } from "react-bootstrap";

import "./InfoMovie.css";

const InfoMovie = () => {
    const { id } = useParams();
    const navigate = useNavigate();


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

    useEffect(() => {
        async function getUsers() {
            let response = await axios.get(
                "http://localhost:8082/events/".concat(id)
            );
            console.log(response.data);
            setMovieID(response.data.eventsId);
            setMovieName(response.data.eventName);
            setMovieDescription(response.data.eventDescription);
            setMoviePrice(response.data.eventPrice);
            setMovieReleaseMonth(response.data.eventCity);
            setMovieGenre(response.data.eventImagepath);
            setMovieVidepPath(response.data.eventDate);
            setMovieReleaseDay(response.data.eventTime);
           
        }
        getUsers();
    });

    return (
        <>
            <NavbarComp navTitle={movieName} />
            <div className="container md-3">
                <div className="container p-3 text-center">
                    <h2>{movieName}</h2>
                </div>
                <div className="container  event-card"  style={{height:"50vh"}}>
                    <Card style={{ width: "18rem" }}>
                        
                        
                            <Card.Title>{movieName}</Card.Title>
                            <Card.Text>{movieDescription}
                            </Card.Text>
                            <Button variant="primary">{moviePrice}</Button>
                        
                    </Card>
                </div>
                <br/>
                <Badge pill bg="primary">{movieGenre}</Badge>
                <br/>
                <br/>
                {/* <Button>{movieReleaseDay}/{movieReleaseMonth}/{movieReleaseYear}</Button> */}
            </div>
            <Footer positionStyle={"fixed"}/>
        </>
    );
};

export default InfoMovie;
