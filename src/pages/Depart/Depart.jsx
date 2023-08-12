import React from "react";
import { useData } from "../../contexts/DataContext";
import { useNavigate } from "react-router";

const Depart = () => {
  const { state, dispatch } = useData();
  const navigate = useNavigate();
  const depart = state.data.reduce((acc, cur) => {
    if (acc.includes(cur.department)) {
      return acc;
    } else {
      return [...acc, cur.department];
    }
  }, []);

  return (
    <div className="flexRow home">
      {depart.map((ele) => (
        <div
        className="card hover"
          onClick={() => {
            dispatch({ type: "SET_DEPT", payload: ele });
            navigate("/product");
          }}
        >
          {ele}
        </div>
      ))}
    </div>
  );
};

export default Depart;
