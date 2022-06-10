import axios from "axios";
import { useRef, useState } from "react";
import { Button,Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../UI/Footer";
import NavbarComp from "../UI/NavbarComp";
import {AuthContext} from '../context/AuthContext'
import React, { useEffect,useContext} from "react";


const AddEvents = () => {

    //State variables
    const navigate = useNavigate();
     const auth= useContext(AuthContext);
    const [addMovies, setAddMovies] = useState(false);
    const [isCancel, setIsCancel] = useState(false);


    //reference variables

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
    
    

    const addEvent = async(event)=>{
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
        console.log(events);
        let response = await axios.post("http://localhost:8082/addEvents",events);
        console.log(response.data);
        setAddMovies(true);

    }

    useEffect(() =>{  function getUsers(){
        console.log(auth.getToken())
        console.log(auth.getUserName())
    };
        getUsers();
    });


    const cancelAdd = ()=> {
        setIsCancel(true);
    }

    if(isCancel || addMovies){
        return navigate("/adminhome")
    }

    return(
        < div className="img">  
            <NavbarComp navTitle={"Add Events"}/>
            <Card className = "container inner outer ">
                <h3 className = "text-dark text-center">Add Events</h3>
                <div className="card-body d-flex justify-content-center">
                <form onSubmit = {addEvent}>
                    <div className = "form-group col-12">
                        <label className = "fw-bold">Event Id</label>
                        <input 
                            type = "text"
                            name = "eventId"
                            className = "form-control"
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
                    

                    <div className = "form-group col-12">
                        <label className = "fw-bold">Event Image</label>
                        <input 
                            type = "text"
                            name = "eventImagePath"
                            className = "form-control"
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
                            ref = {eventAddressInputRef}
                        />
                    </div>
                    <div className = "form-group col-12">
                        <label className = "fw-bold">Event Time</label>
                        <input 
                            type = "text"
                            name = "eventTime"
                            className = "form-control"
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
                            ref = {eventCityInputRef}
                        />
                    </div>
                    <br/>
                <Button type = "submit">Add</Button>&nbsp;&nbsp;
                <Button onClick = {cancelAdd}>Cancel</Button>
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

export default AddEvents;
