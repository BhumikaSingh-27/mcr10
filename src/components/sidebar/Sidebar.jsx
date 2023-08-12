import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink className="sideNav" to="/">
        <div>Dashboard</div>
      </NavLink>
      <NavLink className="sideNav" to="/depart">
        <div>Department</div>
      </NavLink>
      <NavLink className="sideNav" to="/product">
        <div>Products</div>
      </NavLink>
    </div>
  );
};

export default Sidebar;
