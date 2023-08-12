import React, { useState } from "react";
import "./header.css";
import { useData } from "../../contexts/DataContext";
import { useNavigate } from "react-router";

const Header = () => {
  const { state, dispatch } = useData();
  const navigate = useNavigate();

  return (
    <div>
      <div className="header">
        <h2>Products</h2>
        <select
          value={state.dept}
          onChange={(e) =>
            dispatch({ type: "SET_DEPT", payload: e.target.value })
          }
        >
          <option value="">All Departments</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>

        <div>
          <input
            type="checkbox"
            checked={state.stock}
            value="low"
            onChange={(e) => {
              dispatch({ type: "SET_STOCK" });
            }}
          />
          Low stock
        </div>

        <select
          value={state.sort}
          onChange={(e) =>
            dispatch({ type: "SET_SORT", payload: e.target.value })
          }
        >
          <option value="name">name</option>
          <option value="price">price</option>
          <option value="stock">stock</option>
        </select>

        <button onClick={() => navigate("/new")}>New</button>
      </div>
    </div>
  );
};

export default Header;
