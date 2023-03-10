import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { signUpUser, googleSignIn } from "../../firebase/autenticate";
import Title from "../assets/ANIMUS.svg";
import "./Login.css";
import NavBar from "../components/NavBar";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSignUp = () => {
    signUpUser(
      formData.email,
      formData.password,
      formData.username,
      formData.mobile
    );
  };

  const handleGoogleSignIn = () => {
    googleSignIn();
  };
  return (
    <div className="p-8 flex flex-col justify-around">
      <div className="form p-4">
        <NavLink to="/">
          <img src={Title} alt="title" />
        </NavLink>
        <input
          type="text"
          placeholder="username"
          className="p-2 my-4"
          name="username"
          value={formData.username}
          onChange={handleFormChange}
        />{" "}
        <input
          type="text"
          placeholder="mobile number"
          className="p-2 my-4"
          name="mobile"
          value={formData.mobile}
          onChange={handleFormChange}
        />
        <input
          type="text"
          placeholder="email"
          className="p-2 my-4"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
        />
        <input
          type="text"
          placeholder="password"
          className="p-2 my-4"
          name="password"
          value={formData.password}
          onChange={handleFormChange}
        />
        <div className="flex flex-col justify-between items-center ">
          <button className="m-4" onClick={handleSignUp}>
            Sign Up
          </button>
          <button className="font-bold text-white" onClick={handleGoogleSignIn}>
            G
          </button>
        </div>
      </div>
    </div>
  );
}
