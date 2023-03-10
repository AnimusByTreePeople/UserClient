import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/main-logo.svg";

export default function Home() {
  return (
    <div className="p-8 flex flex-col justify-around">
      <div>
        <img className="my-4" src={Logo} alt="logo" />
        <div className="flex justify-around flex-col ">
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
          <NavLink to="/signup">
            <button>SignUp</button>
          </NavLink>
          <NavLink to="/aboutus">
            <button>aboutUs</button>
          </NavLink>
          <NavLink to="/points">
            <button>Points</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
