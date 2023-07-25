import "./App.scss";
import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";
import UserConnexionContext from "./contexts/UserConnexionContext/UserConnexionContext";
import CompanyConnexionContext from "./contexts/CompanyConnexionContext/CompanyConnexionContext";
import Router from "./components/Router";

function App() {
  const location = useLocation();

  const { setUserConnected, setUserId, userId, setIsAdmin } =
    useContext(UserConnexionContext);

  const { setCompanyConnected, setCompanyId, companyId } = useContext(
    CompanyConnexionContext
  );

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const user = jwtDecode(token);
      console.info(user);
      const now = Math.floor(Date.now() / 1000);
      if (user.exp < now) {
        if (user.company === true) {
          console.info(now, "token expiré");
          setCompanyConnected(false);
          setCompanyId(null);
          console.info("company deconnecte");
          /* navigate("/logincompany"); */
        } else {
          console.info(now, "token expiré");
          setIsAdmin(false);
          setUserConnected(false);
          setUserId(null);
          console.info("candidat ou admin deconnecte");
          /* navigate("/login"); */
        }
      } else {
        if (user.admin === 1) {
          setIsAdmin(true);
          setUserConnected(true);
          setUserId(user.sub);
          console.info("admin avec token valide. id =", userId);
        }
        if (user.admin === 0) {
          setIsAdmin(false);
          setUserConnected(true);
          setUserId(user.sub);
          console.info("candidate. id =", userId);
        }
        if (user.company === true) {
          setCompanyConnected(true);
          setCompanyId(user.sub);
          console.info("company. id =", companyId);
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
