import React from "react";
import logo from "../asset/google.png";
import logo2 from "../asset/fb.png";
import logo3 from "../asset/github.png";

export const Login = () => {
  return (
    <div className="login">
      <h1 className="loginTitle">Chosee a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google">
            <img src={logo} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton fb">
            <img src={logo2} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github">
            <img src={logo3} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line"></div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};
