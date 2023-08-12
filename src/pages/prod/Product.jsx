import React, { useState } from "react";
import Header from "../../components/header/Header";
import "./prod.css";
import { useData } from "../../contexts/DataContext";
import Modal from "../../components/modal/Modal";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { state, isOpen } = useData();
  const navigate = useNavigate();

  const deptData = state.dept
    ? state.data.filter(({ department }) => department === state.dept)
    : [...state.data];

  const sortData = [...deptData].sort((a, b) => {
    if (state.sort === "name") return a.name.localeCompare(b.name);
    else if (state.sort === "price") return a.price - b.price;
    else return a.stock - b.stock;
  });

  const finalData = state.stock
    ? sortData.filter((data) => data.stock <= 10)
    : [...sortData];

  return (
    <div>
      {isOpen && <Modal />}
      <Header />
      <table>
        <thead>
          <th>Image</th>
          <th>Name</th>
          <th>description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Supplier</th>
        </thead>
        <tbody>
          {finalData.map(
            ({ id, imageUrl, name, description, price, stock, supplier }) => (
              <tr onClick={() => navigate(`/product/${id}`)}>
                <td>
                  {" "}
                  <img id="img" src={imageUrl} alt="" />
                </td>
                <td className="notLink">{name}</td>
                <td className="notLink">{description}</td>
                <td className="notLink">{price}</td>
                <td className="notLink">{stock}</td>
                <td className="notLink">{supplier}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
