import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import { useState } from "react";
import { signInUser } from "../../firebase/autenticate";
import Title from "../assets/ANIMUS.svg";
import "./Login.css";
import { useAccountContext } from "../hooks/useAccountContext";

export default function SignUp() {
  const { account, dispatch } = useAccountContext();
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSignIn = async () => {
    try {
      const user = await signInUser(formData.email, formData.password);
      console.log(user);
      if (user) {
        dispatch({ type: "LOGIN_ACC", payload: user });
      } else {
        setError("Invalid Credentials");
      }
    } catch (e) {
      setError(e.message);
    }
  };
  if (account) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="p-8 flex flex-col justify-around">
        <div className="form mt-4">
          <NavLink to="/">
            <img src={Title} alt="title" />
          </NavLink>
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
          <h1 className="text-red-600">{error}</h1>
          <button onClick={handleSignIn}>Login</button>
        </div>
      </div>
    );
  }
}
