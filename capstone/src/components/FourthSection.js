import "./css/FourthSection.css";
import React from "react";
import { ReactComponent as Ok } from "./icons/ok.svg";
import { ReactComponent as Calendar } from "./icons/calendar.svg";

export default function FourthSection() {
    return (
        <div className="main-div">
            <h1 className="tittle">How will MRS Mentoring work?</h1>
            <div className="text-box">
                <h2 className="text"><Ok className="icon"/>MRS Mentoring has 3 tracks: Mindset, Wealth and Shape.</h2>
                <h2 className="text"><Ok className="icon"/>During 12 weeks, you will have 1 meeting with each mentor during the week.</h2>
            </div>
            <div className="tree-box-div">
                <div className="box">
                    <div className="box-left"><Calendar className="box-icon"/></div>
                    <div className="box-right">
                        <h3 className="name-day">MONDAY WITH</h3>
                        <h2 className="name-tittle">Pablo Marçal</h2>
                    </div>
                
                </div>
                <div className="box">
                    <div className="box-left"><Calendar className="box-icon"/></div>
                    <div className="box-right">
                        <h3 className="name-day">WEDNESDAY WITH</h3>
                        <h2 className="name-tittle">Renato Cariani</h2>
                    </div>
                
                </div>
                <div className="box">
                    <div className="box-left"><Calendar className="box-icon"/></div>
                    <div className="box-right">
                        <h3 className="name-day">FRIDAY WITH</h3>
                        <h2 className="name-tittle">Pablo Marçal  Renato Cariani</h2>
                    </div>
                
                </div>
            </div>
        </div>
    );
}