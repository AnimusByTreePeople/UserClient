import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="p-2 flex justify-around items-end flex-row text-white bg-slate-800 ">
        <NavLink to="/aboutus">
          <h1>aboutUs</h1>
        </NavLink>
        <NavLink to="/points">
          <h1>Points</h1>
        </NavLink>
      </div>
    );
  }
}

export default Footer;
