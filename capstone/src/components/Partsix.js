import React from "react";
import "./css/Partsix.css";
import Logo from "./img/logo.png";

export default function Partsix() {
    return (
        <div className="six-main-div" id="partsix">
            <div className="main-content">
                <div className="check-logo">
                    <img src={Logo} alt="logo-image" />
                </div>
                <div className="logo-text">
                    <p>MINDSET</p>
                    <p>WEALTH</p>
                    <p>SHAPE</p>
                </div>
                <div className="check-tittle">
                <p>Mentoring <span className="blue">+</span> Recorded </p>
                <p> Courses <span className="blue">+</span> Bonuses <span className="blue">+</span> Guarantee</p>
                </div>
                <div className="text-1">
                    <p>You have the opportunity to be among the greatest for just:</p>
                </div>
                <div className="price">
                    <p>CA$ 499</p>
                </div>
                <div className="view-link">
                    <a href="#">I want to be MRS</a>
                </div>
                </div>
        </div>
    );
}