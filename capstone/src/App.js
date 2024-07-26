import React from "react";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import "./App.css";

function App() {
  return (
    <div className="app-main-div">
      <div className="app-fs-div">
        <FirstSection />
      </div>
      <div className="app-sf-div">
        <SecondSection />
      </div>
      <div className="app-sf-div">
        <ThirdSection />
      </div>
      <div className="app-sf-div">
        <FourthSection />
      </div>
    </div>
  );
}

export default App;
