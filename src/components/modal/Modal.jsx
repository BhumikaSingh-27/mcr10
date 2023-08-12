import React from "react";
import "./Modal.css";
const Modal = () => {
  return (
    <div className="modalContainer">
      <div className="modalContent">
        <div className="displayFlexJust">
          <h2>THis is modal</h2> <button>X</button>
        </div>
        <div>
          <p>Name</p>
          <input type="text" placeholder="enter" className="smallInput" />
        </div>
        <div>
          {" "}
          <p>Message:</p>
          <select>
            {" "}
            <option value="">Choose an option below</option>
            <option value="">hi</option>
            <option value="">ok</option>
            <option value="">bye</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Modal;
