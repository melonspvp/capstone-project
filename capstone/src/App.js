import React from "react";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
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
    </div>
  );
}

export default App;
