import { NavLink } from "react-router-dom";
import Logout from "./Logout.jsx";
import React, { useState, useEffect } from "react";
import SignInButton from "./SignInButton.jsx";

export default function Navbar(props) {
  const onClickLoginBtn = props.onClickLoginBtn;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem("loggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  };

  return (
    <nav className="navbar">
      <NavLink to="/home" className="nav-brand">
        Assesment
      </NavLink>
      <ul style={containerStyle}>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/userlist"
          >
            Users List
          </NavLink>
        </li>
        <li>
          {!isLoggedIn ? (
            <Logout />
          ) : (
            <SignInButton onClickLoginBtn={onClickLoginBtn} />
          )}
        </li>
      </ul>
    </nav>
  );
}
