import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/" exact>
      Movies
    </NavLink>
    <NavLink to="/" exact>
      Directors
    </NavLink>
    <NavLink to="/" exact>
      Actors
    </NavLink>
  </div>
  )}

export default NavBar;
