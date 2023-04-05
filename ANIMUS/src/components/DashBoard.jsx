import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/ANIMUS.svg";

const DashBoard = ({ account, dispatch }) => {
  const handleOnLogout = () => {
    dispatch({ type: "LOGOUT_ACC", payload: null });
  };
  return (
    <div className="flex flex-col min-h-screen">
      <NavLink to="/">
        <img className="h-1/5" src={Logo} alt="title" />
      </NavLink>
      <h1 className="self-center font-lemon text-white text-3xl pt-8">
        Dashboard
      </h1>
      <div className="flex justify-between m-4 p-8 rounded-lg overscroll-none boarder shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] bg-gradient-to-r from-green-800 to-teal-900 ">
        <div className="">
          <h1 className=" font-lemon text-white text-3xl pt-8">
            Welcome, {account.name}
          </h1>
          <h1 className=" font-lemon text-white text-3xl pt-8">
            Score: {account.score}
          </h1>
          <h1 className=" font-lemon text-white text-3xl pt-8">
            Leafs: {account.currency}
          </h1>
          <h1 className="font-lemon text-white text-3xl pt-8">
            Bags replaced: {account.bagCount}
          </h1>
        </div>
        <div className=" ">
          <button onClick={handleOnLogout}>Logout</button>
        </div>
      </div>
      <h1>
        You can Create or Upload your images here so that your can use it in
        game!
      </h1>
      <NavLink to="/assets">
        <button>Assets</button>
      </NavLink>
    </div>
  );
};

export default DashBoard;
