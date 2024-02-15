import React from "react";
import { useState, useContext } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext";

const Header = () => {
    let btnName = "login"
    const [btnNameReact, setBtnNameReact] = useState("login")
    const userContext = useContext(UserContext)
    const {loggedInUser} = userContext;
    const [userName, setUserName] = useState(loggedInUser)
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                className='logo' 
                src={LOGO_URL}
                alt=""/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/about" >About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <UserContext.Provider value={{loggedInUser:userName}}>
                            {userName}
                        </UserContext.Provider>
                    </li>
                    <button className="loginbtn" type="button" onClick={() => {
                        btnName = "logout"
                        if (btnNameReact==="login"){
                            setBtnNameReact("logout")
                            setUserName("Simran")
                        }
                        else{
                            setBtnNameReact("login")
                            setUserName("Kaur")
                        }
                        //console.log(btnName) //the variable is updated but not the UI
                        //console.log(btnNameReact)
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>

    )
}

export default Header