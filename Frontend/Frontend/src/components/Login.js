import React, { useState, useRef, useContext } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function Login() {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const [user, setUser] = useState("");

    const userNameInputRef = useRef();
    const userPasswordInputRef = useRef();


    function getLoggedInUser() {
        axios
            .get("http://localhost:8081/validate", {
                headers: { Authorization: auth.getToken() },
            })
            .then((response) => {
                console.log(response.data);
                setUser(response.data);
                auth.setUserName(response.data.username);
                auth.setUserId(response.data.userId);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleLogin(e) {
        e.preventDefault();

        const userCredentials = {
            username: userNameInputRef.current.value,
            password: userPasswordInputRef.current.value,
        };

        axios
            .post("http://localhost:8081/login", userCredentials)
            .then((response) => {
                auth.setToken(response.data.token);
                getLoggedInUser();
                if (user === null) {
                    navigate("/");
                } else if (user.role == "ROLE_USER") {
                    navigate("/userhome");
                } else if(user.role=="ROLE_MANAGER") {
                    navigate("/adminhome");
                }
            })
            .catch((error) => {
                alert("login failed please try again");
            });
    }

    return (
        <>
            <div class="img " style={{ width: "100vw", height: "100vh" }}>
                <div
                    className="outer inner"
                    style={{
                        position: "absolute",
                        marginLeft: "35%",
                        marginTop: "10%",
                        height: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <form onSubmit={handleLogin}>
                        <h3>LogIn</h3>
                        <div className="form-group">
                            <label>UserName</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter email"
                                ref={userNameInputRef}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                ref={userPasswordInputRef}
                            />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-dark btn-lg  ">
                            Login
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="btn btn-dark btn-lg" href="/register">
                            Register
                        </a>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
