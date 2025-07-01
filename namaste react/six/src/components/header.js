import { useState } from "react";
import { LogoURL } from "../constant";

export const Header = () => {

  const [logState, setLogState] = useState("Login");

  return (
    <div className="header">
      <a href="/">
        <img
          src = {LogoURL}
          alt="logo"
          className="logo"
        />
      </a>
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">Details</li>
        <li className="nav-item">Contact Us</li>
        <li className="nav-item">Card</li>
        <button className="nav-item" onClick={()=>{
          logState === "Login"? setLogState("Logout"): setLogState("Login")
        }}>{logState}</button>
      </ul>
    </div>
  );
};