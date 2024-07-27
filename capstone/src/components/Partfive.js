import React from "react";
import "./css/Partfive.css";
import pablo1 from "./img/pablo1.png";
import pablo2 from "./img/pablo2.png";
import pablo3 from "./img/pablo3.png";
import renato1 from "./img/renato1.png";
import renato2 from "./img/renato2.png";
import renato3 from "./img/renato3.png";

export default function Partfive() {
    return (
        <div className="main-div-one">
            <h2 className="tittle">Additionally, you will have access to recorded courses and classes to complement your experience.</h2> 
            <div className="content">
                <h2 className="content-tittle">Mindset <span className="mentoring">Mentoring</span></h2>
                <p className="sec-tittle">PABLO MARÇAL</p>
                <p className="tree-tittle">1 online meeting per week</p>
                <p className="four-tittle">MONDAY</p>
                <div className="image-container">
                    <img src={pablo1} alt="pablo1-image" />
                    <img src={pablo2} alt="pablo2-image" />
                    <img id="img3" src={pablo3} alt="pablo3-image" />
                </div>
            </div>

            <div className="content" id="cont2">
                <h2 className="content-tittle">Shape <span className="mentoring">Mentoring</span></h2>
                <p className="sec-tittle">RENATO CARIANI</p>
                <p className="tree-tittle">1 online meeting per week</p>
                <p className="four-tittle">WEDNESDAY</p>
                <div className="image-container">
                    <img src={renato1} alt="renato1-image" />
                    <img src={renato2} alt="renato2-image" />
                    <img id="img3" src={renato3} alt="renato3-image" />
                </div>
            </div>
            <div className="view-link">
                <a href="#partsix">I want to be MRS</a>
            </div>
        </div> 
    );
}