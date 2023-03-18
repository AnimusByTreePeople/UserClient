import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Home() {
  return (
    <div className="flex flex-col justify-between">
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
      <div>
        <div className="p-2 flex justify-around items-end flex-row text-white bg-slate-800 ">
          <NavLink to="/aboutus">
            <a>aboutUs</a>
          </NavLink>
          <NavLink to="/points">
            <a>Points</a>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
