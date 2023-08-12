import React, { useState } from "react";
import { useData } from "../../contexts/DataContext";
import { useNavigate } from "react-router";
import "./new.css";

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
    <div className="newContainer">
      <div className="container flexColumn">
        <h1>Add new Product</h1>
        <div className="container">
          {" "}
          <p>Department</p>
          <select
            className="padding"
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
        <div>
          <p>Name:</p>
          <input
            type="text"
            placeholder="Enter product name"
            value={newInput.name}
            className="smallInput"
            onChange={(e) => setNewInput({ ...newInput, name: e.target.value })}
          />
        </div>

        <div>
          <p>Description:</p>
          <textarea
            className="smallInput"
            value={newInput.description}
            onChange={(e) =>
              setNewInput({ ...newInput, description: e.target.value })
            }
          />
        </div>
        <div>
          {" "}
          <p>Price:</p>
          <input
            type="text"
            value={newInput.price}
            className="smallInput"
            onChange={(e) =>
              setNewInput({ ...newInput, price: e.target.value })
            }
          />
        </div>
        <div>
          <p>Stock:</p>
          <input
            type="text"
            className="smallInput"
            value={newInput.stock}
            onChange={(e) =>
              setNewInput({ ...newInput, stock: e.target.value })
            }
          />
        </div>
        <div>
          <p>SKU:</p>
          <input
            type="text"
            placeholder="Enter stock unit"
            value={newInput.sku}
            className="smallInput"
            onChange={(e) => setNewInput({ ...newInput, sku: e.target.value })}
          />
        </div>

        <div>
          <p>supplier:</p>
          <input
            type="text"
            placeholder="Enter supplier"
            className="smallInput"
            value={newInput.supplier}
            onChange={(e) =>
              setNewInput({ ...newInput, supplier: e.target.value })
            }
          />
        </div>
        <div>
          <p>Delivered:</p>
          <input
            type="text"
            value={newInput.delivered}
            className="smallInput"
            onChange={(e) =>
              setNewInput({ ...newInput, delivered: e.target.value })
            }
          />
        </div>
        <div>
          <p>Image URL:</p>
          <input
            type="text"
            className="smallInput"
            value={newInput.imageUrl}
            onChange={(e) =>
              setNewInput({ ...newInput, imageUrl: e.target.value })
            }
          />
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default New;
