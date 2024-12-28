import React from "react";
import PreNavBar from "./components/preNavBar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom"; 
import Slider from "./components/Slider";
import data from "./data/data.json";
function App() {
  return (
    <Router> {/* Using Router as alias */}
      <PreNavBar />
      <Slider arr={data.banner.start}/>
    </Router>
  );
}

export default App;
