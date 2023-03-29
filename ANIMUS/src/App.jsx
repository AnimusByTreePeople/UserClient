import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import AboutUs from "./Pages/AboutUs";
import Points from "./Pages/Point";
import Asset from "./Pages/Asset";

function App(props) {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="points" element={<Points />} />
        <Route path="assets" element={<Asset />} />
      </Routes>
    </div>
  );
}

export default App;
