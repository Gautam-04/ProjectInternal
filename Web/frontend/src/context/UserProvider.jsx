/* eslint-disable no-undef */
import { createContext, useEffect, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";


const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user,setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
    // Check for access token and role in localStorage when the app loads
    const accessToken = localStorage.getItem("at");
    const role = localStorage.getItem("role");

    if (accessToken && role) {
      setUser({ accessToken, role });
    } else {
      setUser(null)
      navigate();
    }
  }, [navigate]);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  return useContext(UserContext);
};

export default UserProvider;