import React from "react";
import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom"

const Header = () => {
    let btnName = "login"
    const [btnNameReact, setBtnNameReact] = useState("login")
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
                    <button className="loginbtn" type="button" onClick={() => {
                        btnName = "logout"
                        btnNameReact==="login"?setBtnNameReact("logout"):setBtnNameReact("login")
                        console.log(btnName) //the variable is updated but not the UI
                        console.log(btnNameReact)
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>

    )
}

export default Header