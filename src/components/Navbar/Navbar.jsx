import React from "react";
import s from "../Navbar/Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <NavLink className={s.link} to="/">Home</NavLink>
        <NavLink className={s.link} to="/users">Users</NavLink>
        <NavLink className={s.link} to="/dialogues/0">Messages</NavLink>
        <NavLink className={s.link} to="/news">News</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
