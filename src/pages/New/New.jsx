import React, { useState } from "react";
import { useData } from "../../contexts/DataContext";
import { useNavigate } from "react-router";

const New = () => {
  const [newInput, setNewInput] = useState({
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  });

  const { dispatch } = useData();
  const navigate = useNavigate();

  const checkInputs = () => {
    if (
      newInput.delivered &&
      newInput.name &&
      newInput.description &&
      newInput.price &&
      newInput.stock &&
      newInput.sku &&
      newInput.imageUrl &&
      newInput.department &&
      newInput.supplier
    ) {
      dispatch({ type: "ADD", payload: newInput });
    } else {
      alert("please enter all the fields!");
    }
  };
  return (
    <div>
      <h1>Add new Product</h1>
      <div>
        {" "}
        <p>Department</p>
        <select
          value={newInput.department}
          onChange={(e) =>
            setNewInput({ ...newInput, department: e.target.value })
          }
        >
          {" "}
          <option value="">Select Department</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>
      </div>
      <p>Name:</p>
      <input
        type="text"
        placeholder="enter product name"
        value={newInput.name}
        className="smallInput"
        onChange={(e) => setNewInput({ ...newInput, name: e.target.value })}
      />

      <p>Description:</p>
      <textarea
        className="smallInput"
        value={newInput.description}
        onChange={(e) =>
          setNewInput({ ...newInput, description: e.target.value })
        }
      />

      <p>Price:</p>
      <input
        type="text"
        value={newInput.price}
        className="smallInput"
        onChange={(e) => setNewInput({ ...newInput, price: e.target.value })}
      />

      <p>Stock:</p>
      <input
        type="text"
        className="smallInput"
        value={newInput.stock}
        onChange={(e) => setNewInput({ ...newInput, stock: e.target.value })}
      />
      <p>SKU:</p>
      <input
        type="text"
        placeholder="enter stock unit"
        value={newInput.sku}
        className="smallInput"
        onChange={(e) => setNewInput({ ...newInput, sku: e.target.value })}
      />
      <p>supplier:</p>
      <input
        type="text"
        placeholder="enter"
        className="smallInput"
        value={newInput.supplier}
        onChange={(e) => setNewInput({ ...newInput, supplier: e.target.value })}
      />
      <p>Delivered:</p>
      <input
        type="text"
        value={newInput.delivered}
        className="smallInput"
        onChange={(e) =>
          setNewInput({ ...newInput, delivered: e.target.value })
        }
      />
      <p>Image URL:</p>
      <input
        type="text"
        className="smallInput"
        value={newInput.imageUrl}
        onChange={(e) => setNewInput({ ...newInput, imageUrl: e.target.value })}
      />

      <button
        onClick={() => {
          checkInputs();

          setNewInput({
            department: "",
            name: "",
            description: "",
            price: 0,
            stock: 0,
            sku: "",
            supplier: "",
            delivered: 0,
            imageUrl: "",
          });
          navigate("/product");
        }}
      >
        Add Product
      </button>
    </div>
  );
};

export default New;
