import { inventoryData } from "../Data";
import { v4 as uuid } from "uuid";

export const initialState = {
  data: JSON.parse(localStorage.getItem("data")) ?? inventoryData,
  dept: "",
  stock: false,
  sort: "name",
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_DATA": {
      localStorage.setItem("data", JSON.stringify(state.data));
      return state;
    }
    case "SET_DEPT": {
      return { ...state, dept: payload };
    }
    case "SET_STOCK":
      return { ...state, stock: !state.stock };

    case "SET_SORT":
      return { ...state, sort: payload };

    case "ADD": {
      const newdata = {
        id: uuid(),
        ...payload,
        sku: payload.sku.toUpperCase(),
        price: parseFloat(payload.price),
        stock: Number(payload.stock),
        delivered: Number(payload.delivered),
      };
      return { ...state, data: [...state.data, newdata] };
    }
    default:
      return state;
  }
};
