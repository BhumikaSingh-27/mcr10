import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { useData } from "../../contexts/DataContext";

const Sidebar = () => {
  const { dispatch } = useData();
  return (
    <div className="sidebar">
      <NavLink className="sideNav" to="/">
        <div>Dashboard</div>
      </NavLink>
      <NavLink className="sideNav" to="/depart">
        <div>Department</div>
      </NavLink>
      <NavLink className="sideNav" to="/product">
        <div onClick={()=>dispatch({ type: "RESET" })}>Products</div>
      </NavLink>
    </div>
  );
};

export default Sidebar;
