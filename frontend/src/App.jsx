import "./App.scss";
import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";
import UserConnexionContext from "./contexts/UserConnexionContext/UserConnexionContext";
import CompanyConnexionContext from "./contexts/CompanyConnexionContext/CompanyConnexionContext";
import Router from "./components/Router";

function App() {
  const location = useLocation();

  const { setUserConnected, setUserId, setIsAdmin } =
    useContext(UserConnexionContext);

  const { setCompanyConnected, setCompanyId } = useContext(
    CompanyConnexionContext
  );

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const user = jwtDecode(token);
      const now = Math.floor(Date.now() / 1000);
      if (user.exp < now) {
        if (user.company === true) {
          setCompanyConnected(false);
          setCompanyId(null);
          localStorage.removeItem("token");
        } else {
          setIsAdmin(false);
          setUserConnected(false);
          setUserId(null);
          localStorage.removeItem("token");
        }
      } else {
        if (user.admin === 1) {
          setIsAdmin(true);
          setUserConnected(true);
          setUserId(user.sub);
        }
        if (user.admin === 0) {
          setIsAdmin(false);
          setUserConnected(true);
          setUserId(user.sub);
        }
        if (user.company === true) {
          setCompanyConnected(true);
          setCompanyId(user.sub);
        }
      }
    }
  }, [location]);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
