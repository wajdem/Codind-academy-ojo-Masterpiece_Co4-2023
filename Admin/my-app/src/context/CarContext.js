import { createContext, useReducer } from "react";

export const CarContext = createContext();

export const CarsReducer = (state, action) => {
  switch (action.type) {
    case "SET_CARS":
      return {
        cars: action.payload,
      };
    case "CREATE_CAR":
      return {
        cars: [action.payload, ...state.cars],
      };
    case "DELETE_CAR":
      return {
        cars: state.jops.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const CarsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CarsReducer, {
      cars: null,
    });
    console.log("CarContext state", state);
  
    return (
      <CarContext.Provider value={{ ...state, dispatch }}>
        {children}
      </CarContext.Provider>
    );
  };
  
  export default CarsReducer;