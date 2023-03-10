import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

export default function NavBar() {
  return (
    <nav className="bg-sky-300/25 rounded-lg">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}
