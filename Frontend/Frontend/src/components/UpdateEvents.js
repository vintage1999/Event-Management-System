import { useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import NavbarComp from "../UI/NavbarComp";
import Footer from "../UI/Footer";


const UpdateMovie = () => {
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();
    const [updateStatus, setUpdateStatus] = useState(false);
    const [isCancel, setIsCancel] = useState(false);

    //state variables
    const [eventId, setEventId] = useState("");
    const [eventName, setEventName] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [eventPrice, setEventPrice] = useState("");
    const [eventImagePath, setEventImagePath] = useState("");
    const [eventAddress, setEventAddress] = useState("");
    const [eventCity, setEventCity] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventTime, setEventTime] = useState("");

    // reference variables
    const eventIdInputRef = useRef()
    const eventNameInputRef = useRef()
    const eventDescriptionInputRef = useRef()
    // const movieGenreInputRef = useRef()
    const eventPriceInputRef = useRef()
    const eventImagePathInputRef = useRef()
    const eventAddressInputRef = useRef()
    const eventCityInputRef = useRef()
    const eventDateInputRef = useRef()
    const eventTimeInputRef = useRef()
    

    useEffect(() =>{ async function getUsers(){
        let response = await axios.get(
            "http://localhost:8082/events/".concat(id)
        );
        // console.log("old Events");
        console.log(response.data);
        setEventId(response.data.eventId);
        setEventName(response.data.eventName);
        setEventDescription(response.data.eventDescription);
        setEventPrice(response.data.eventPrice);
        // setMovieGenre(response.data.moviegenre);
        setEventImagePath(response.data.eventImagePath);
        setEventAddress(response.data.eventAddress);
        setEventCity(response.data.eventCity);
        setEventDate(response.data.eventDate);
        setEventTime(response.data.eventTime);
    };
        getUsers();
    });

    const updateMovie = async (event) => {
        event.preventDefault();

        const events={
            eventId:eventIdInputRef.current.value,
            eventName:eventNameInputRef.current.value,
            eventDescription:eventDescriptionInputRef.current.value,
            // moviegenre:movieGenreInputRef.current.value,
            eventPrice:eventPriceInputRef.current.value,
            eventImagePath:eventImagePathInputRef.current.value,
            eventAddress:eventAddressInputRef.current.value,
            eventCity: eventCityInputRef.current.value,
            eventDate:eventDateInputRef.current.value ,   
            eventTime:eventTimeInputRef.current.value    
        };

        let response = await axios.put(
            "http://localhost:8082/events/" + "".concat(id),
            events
        );
        console.log("New Data");
        console.log(response.data);
        setUpdateStatus(true);
    };

    const cancelAdd = () => {
        setIsCancel(true);
    };

    if (isCancel || updateStatus) {
        return navigate("/adminhome");
    }

    return (
        <>
            <NavbarComp />
            <div className="container">
                <h3 className="text-primary">Update Event</h3>
                <form onSubmit={updateMovie}>
                <div className = "form-group col-12">
                        <label className = "fw-bold">Event Id</label>
                        <input 
                            type = "text"
                            name = "eventId"
                            className = "form-control"
                            defaultValue={eventId}
                            ref = {eventIdInputRef}
                        />
                    </div>
                    <br/>

                    <div className = "form-group col-12">
                        <label className = "fw-bold">Event Name</label>
                        <input 
                            type = "text"
                            name = "eventName"
                            className = "form-control"
                            defaultValue={eventName}
                            ref = {eventNameInputRef}
                        />
                    </div>
                    <br/>

                    <div className = "form-group col-12">
                        <label className = "fw-bold">Event Description</label>
                        <input 
                            type = "text"
                            name = "eventDescription"
                            className = "form-control"
                            defaultValue={eventDescription}
                            ref = {eventDescriptionInputRef}
                        />
                    </div>
                    <br/>

                    {/* <div className = "form-group col-12">
                        <label className = "fw-bold">Movie Genre</label>
                        <input 
                            type = "text"
                            name = "moviegenre"
                            className = "form-control"
                            ref = {movieGenreInputRef}
                        />
                    </div> */}
                    <br/>

                    <div className = "form-group col-12">
                        <label className = "fw-bold">Event Image</label>
                        <input 
                            type = "text"
                            name = "eventImagePath"
                            className = "form-control"
                            defaultValue={eventImagePath}
                            ref = {eventImagePathInputRef}
                            
                        />
                    </div>
                    <br/>

                    <div className = "form-group col-12">
                        <label className = "fw-bold">Event Ticket Price</label>
                        <input 
                            type = "number"
                            name = "eventPrice"
                            className = "form-control"
                            defaultValue={eventPrice}
                            ref = {eventPriceInputRef}
                        />
                    </div>
                    <br/>

                    <div className = "form-group col-12">
                        <label className = "fw-bold">Event Date</label>
                        <input 
                            type = "text"
                            name = "eventDate"
                            className = "form-control"
                            defaultValue={eventDate}
                            ref = {eventDateInputRef}
                        />
                    </div>
                    <br/>

                    <div className = "form-group col-12">
                        <label className = "fw-bold">Event Address</label>
                        <input 
                            type = "text"
                            name = "eventAddress"
                            className = "form-control"
                            defaultValue={eventAddress}
                            ref = {eventAddressInputRef}
                        />
                    </div>
                    <div className = "form-group col-12">
                        <label className = "fw-bold">Event Time</label>
                        <input 
                            type = "text"
                            name = "eventTime"
                            className = "form-control"
                            defaultValue={eventTime}
                            ref = {eventTimeInputRef}
                        />
                    </div>
                    <br/>

                    <div className = "form-group col-12">
                        <label className = "fw-bold">Event City</label>
                        <input 
                            type = "text"
                            name = "eventCity"
                            className = "form-control"
                            defaultValue={eventCity}
                            ref = {eventCityInputRef}
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
