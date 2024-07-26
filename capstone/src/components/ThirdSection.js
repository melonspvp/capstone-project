import React from "react";
import "./css/ThirdSection.css";
import { ReactComponent as Light } from "./icons/light.svg";
import { ReactComponent as Gym } from "./icons/gym.svg";
import { ReactComponent as Money } from "./icons/money.svg";

export default function ThirdSection() {
    return (
        <div className="ts-main-div ">
            <div className="left-div">
                <div className="img-top-left"></div>
                <div className="img-bottom-left"></div>
            </div>
            <div className="mid-div">
                <h2>MRS Mentoring was created to make you prosper in 3 areas of your life:</h2>
                <div className="mid-3-things">
                    <div className="mid-box">
                        <h3>Mentality</h3>
                    </div>
                    <div className="mid-box">
                    <h3>Shape</h3>
                    </div>
                    <div className="mid-box">
                    <h3>Wealth</h3>
                    </div>
                </div>
                <h3 className="second-mid-tittle">There are 2 experienced mentors to give you step-by-step instructions to help you get there faster.</h3>
                <div className="text-box">Want to make money online? Start your own business? Buy your own home? We’ll teach you how…</div>
                <div className="text-box">Want to overcome procrastination? Fear of failure? Lack of motivation? We’ll teach you…</div>
                <div className="text-box">Do you have trouble balancing diet and exercise with your routine? Are you addicted to food and suffer from anxiety? We will teach you…</div>
                <div className="text-box-no-border">This is the most complete mentoring program ever launched and will be taught by 3 market leaders to take you by the hand in the coming months.</div>
                <div className="text-box-no-border">You can keep trying to do it yourself or guarantee never-before-seen results with us.</div>
                <div className="view-link">
                    <a href="#">I want to be MRS</a>
                </div>
            </div>
            <div className="right-div">
                <div className="img-top-right"></div>
                <div className="img-bottom-right"></div>
            </div>
        </div>
    );
}