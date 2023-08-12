import React from "react";
import { useParams } from "react-router";
import { useData } from "../../contexts/DataContext";
import "./Details.css"
const Detail = () => {
  const { Id } = useParams();
  const { state } = useData();
  console.log(Id);
  const item = state.data.find(({ id }) => id.toString() === Id);

  return (
    <div className="details">
      <h1>{item.name}</h1>
      <div className="text">
        <img id="imgDiv" src={item.imageUrl} alt="" />
        <p>price: ${item.price}</p>
        <p>stock: {item.stock}</p>
        <p>sku: {item.sku}</p>
        <p>department: {item.department}</p>
        <p>supplier: {item.supplier}</p>
        <p>delivered: {item.delivered}</p>
        <p>description: {item.description}</p>
      </div>
    </div>
  );
};

export default Detail;
