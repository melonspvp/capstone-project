import React from "react";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import Partfive from "./components/Partfive";
import Partsix from "./components/Partsix";
import "./App.css";

function App() {
  return (
    <div className="app-main-div">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Partfive />
      <Partsix />
    </div>
  );
}

export default App;
