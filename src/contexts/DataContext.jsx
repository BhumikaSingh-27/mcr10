import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { initialState, reducer } from "../reducer/reducer";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch({ type: "GET_DATA", payload: state.data });
  }, [state.data]);

  return (
    <DataContext.Provider value={{ state, dispatch, isOpen, setIsOpen }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
