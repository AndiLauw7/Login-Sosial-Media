import React from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "../pages/home";
import "./Style.css";
export const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const handelHome = () => {
    navigate("/");
  };

  const handleLogin = () => {
    navigate("login");
  };
  return (
    <>
      <div className="navbar">
        <span onClick={handelHome} className="logo">
          LauwCorp
        </span>
        {user ? (
          <ul className="list">
            <li className="listItem">
              <img src="" alt="" className="avatar" />
            </li>
            <li className="listItem">Andi Lauw</li>
            <li className="listItem">Logut</li>
          </ul>
        ) : (
          <span onClick={handleLogin}>Login</span>
        )}
      </div>
    </>
  );
};
