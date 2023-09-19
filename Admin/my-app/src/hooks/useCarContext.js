import { CarContext } from "../context/CarContext";
import { useContext } from 'react';

export const useCarContext = () => {
    const context = useContext(CarContext);

    if (!context) {
        throw Error("CarContext must be used inside a CarsContextProvider");
    }

    return context;
};