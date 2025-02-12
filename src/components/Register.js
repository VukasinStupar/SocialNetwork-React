import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "", // Optional, remove if not needed
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onRegisterClickHandler = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status === 409) {
      return window.alert("Username already exists!");
    }

    if (!response.ok) {
      return window.alert("Error during registration!");
    }

    window.alert("Registration successful! You can now log in.");
    navigate("/login");
  };

  return (
    <div className="register-form-container">
      <div className="register-form-wrapper">
        <form className="register-form" onSubmit={onRegisterClickHandler}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="text"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              required
            />
          </div>
          <div className="button-group">
            <button type="submit">Register</button>
            <button type="button" onClick={() => navigate("/login")}>
              Already have an account?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
