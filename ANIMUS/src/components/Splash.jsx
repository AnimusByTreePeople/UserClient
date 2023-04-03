import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import NoticeBoard from "./NoticeBoard";
import HighestDisplay from "./HighestDisplay";

class Splash extends Component {
  render() {
    return (
      <div className="flex flex-col lg:flex-row justify-center min-h-full ">
        <img className="m-4 w-1/2" src={Logo} alt="logo" />
        <div className="flex flex-col justify-between p-1">
          <div className="flex justify-evenly p-16">
            <NavLink to="/login">
              <button>Login</button>
            </NavLink>
            <NavLink to="/signup">
              <button>SignUp</button>
            </NavLink>
          </div>
          <NoticeBoard />
          <HighestDisplay />
        </div>
      </div>
    );
  }
}

export default Splash;
