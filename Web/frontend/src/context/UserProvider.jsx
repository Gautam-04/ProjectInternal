/* eslint-disable no-undef */
import { createContext, useEffect, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";


const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user,setUser] = useState();
    const [Advisories,setAdvisories] = useState(true);
    const [verifiedSos,setVerifiedSos] = useState(true);
    const [alert,setAlert] = useState(true);
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
    <UserContext.Provider value={{ user,Advisories,verifiedSos,alert }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  return useContext(UserContext);
};

export default UserProvider;