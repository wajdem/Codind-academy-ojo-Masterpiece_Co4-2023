import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    if (email === "Admin@admin.com" && password === "Add!!123456") {
      const adminData = {};

      localStorage.setItem("user", JSON.stringify(adminData));
      dispatch({ type: "LOGIN", payload: adminData });

      setIsLoading(false);
      setError(null);
    } else {
      setIsLoading(false);
      setError("Sorry, you do not have admin privileges to log in.");
    }
  };

  return { login, isLoading, error };
};
