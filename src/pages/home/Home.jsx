import React from "react";
import { useData } from "../../contexts/DataContext";
import "./Home.css";

const Home = () => {
  const { state } = useData();
  const totalstock = state.data.reduce((acc, cur) => acc + cur.stock, 0);
  const delivery = state.data.reduce((acc, cur) => acc + cur.delivered, 0);
  const lowStock = state.data.reduce((acc, cur) => {
    if (cur.stock <= 10) {
      return [...acc, cur];
    }
    return acc;
  }, []);

  return (
    <div className="flexRow home">
      <div className="card">
        <h1 id="green">{totalstock}</h1>
        <p>Total stock</p>
      </div>

      <div className="card">
        <h1 id="orange">{delivery}</h1>
        <p>Total Delivered</p>
      </div>

      <div className="card">
        <h1 id="red">{lowStock.length}</h1>
        <p>Total stock</p>
      </div>
    </div>
  );
};

export default Home;
