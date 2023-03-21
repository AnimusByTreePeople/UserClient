import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

class Splash extends Component {
  render() {
    return (
      <div className=" flex flex-col justify-center min-h-screen">
        <div className="flex justify-center  flex-col  ">
          <img className="m-4" src={Logo} alt="logo" />
          <div className="flex justify-between p-16">
            <NavLink to="/login">
              <button>Login</button>
            </NavLink>
            <NavLink to="/signup">
              <button>SignUp</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
