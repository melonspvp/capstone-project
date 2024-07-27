import React from "react";
import "./css/FirstSection.css";
import logo from "./img/logo.png";
import pablo from "./img/pablo.png";

export default function FirstSection() {
  return (
    <div className="fs-main-div">
      <div className="left-div">
        <div className="logo">
          <img src={logo} alt="logo-image" />
        </div>
        <div className="text">
          <p>
            Get access to the plan to{" "}
            <span className="blue-text">
              shield your mind, enrich your pocket and get in shape
            </span>{" "}
            this year with Pablo Marçal, Renato Cariani.
          </p>
        </div>
        <div className="sub-text">
          <p>
            Learn from those who are leading the Personal Development, Fitness
            and Digital Marketing.
          </p>
        </div>
        <div className="view-link">
          <a href="#partsix">I want to be MRS</a>
        </div>
      </div>
      <div className="right-div">
        <img src={pablo} alt="pablo-image" />
      </div>
    </div>
  );
}
