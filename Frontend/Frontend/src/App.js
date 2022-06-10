import { Route, Routes } from "react-router";
import Movie from "./components/Movie";
import AddMovie from "./components/AddMovie";
import UpdateMovie from "./components/UpdateMovie";
import "./App.css";
import InfoMovie from "./components/InfoMovie";
import {AuthContext,AuthFunctions} from './context/AuthContext'
import Home from "./components/Home";
import AfterAdminLogin from "./components/AfterAdminLogin";
import Payment from "./components/Payment";
import Login from "./components/Login";
import RegisterationUser from "./components/RegisterationUser";
import RegisterMan from "./components/RegistrationManager"
import AdminEventHomePage from "./components/AdminEventHomePage"
import UserEventHomePage from "./components/UserEventHomePage";
import AddEvents from "./components/AddEvents";
import UpdateEvents from "./components/UpdateEvents";
import UserMovie from "./components/UserMovie";
import InfoEvent from "./components/InfoEvents";
function App() {
    return (
        <AuthContext.Provider value = {AuthFunctions}>
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movie />} />
                <Route path="/add" element={<AddMovie />} />
                <Route path="/update/:id" element={<UpdateMovie />} />
                <Route path="/info/:id" element={<InfoMovie />} />
                <Route path="/usermovie" element={<UserMovie />} />
                <Route path="/eventinfo/:id" element={<InfoEvent />} />
                
                {/* <Route path="/events" element={<AfterAdminLogin />} /> */}
                <Route path="/payments" element={<Payment />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterMan />} />
                <Route path="/registeruser" element={<RegisterationUser />} />
                
                <Route path="/adminhome/" element={<AdminEventHomePage />} />
                <Route path="/userhome" element={<UserEventHomePage />} />
                <Route path="/addevent" element={<AddEvents />} />
               
                <Route path="/updateevent/:id" element={<UpdateEvents/>} />
                
                
            </Routes>
        </div>
        </AuthContext.Provider>
   
    );
}

export default App;
