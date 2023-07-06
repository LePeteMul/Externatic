import "./App.scss";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import UserConnexionContext from "./contexts/UserConnexionContext/UserConnexionContext";
import CompanyConnexionContext from "./contexts/CompanyConnexionContext/CompanyConnexionContext";
import Router from "./components/Router";

function App() {
  const { setUserConnected, setUserId, userId, setIsAdmin } =
    useContext(UserConnexionContext);

  const { setCompanyConnected, setCompanyId, companyId } = useContext(
    CompanyConnexionContext
  );

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

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
          navigate("/logincompany");
        } else {
          console.info(now, "token expiré");
          setIsAdmin(false);
          setUserConnected(false);
          setUserId(null);
          navigate("/login");
        }
      } else {
        console.info(now, "token valide");
        if (user.admin === 1) {
          setIsAdmin(true);
          setUserConnected(true);
          setUserId(user.sub);
          console.info("admin");
        }
        if (user.admin === 0) {
          setIsAdmin(false);
          setUserConnected(true);
          setUserId(user.sub);
          console.info(userId, "candidate");
        }
        if (user.company === true) {
          setCompanyConnected(true);
          setCompanyId(user.sub);
          console.info(companyId, "company");
        }
      }
    }
  }, []);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
