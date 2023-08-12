import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/">
        <div>Dashboard</div>
      </NavLink>
      <NavLink to="/depart">
        <div>Department</div>
      </NavLink>
      <NavLink to="/product">
        <div>Products</div>
      </NavLink>
    </div>
  );
};

export default Sidebar;
