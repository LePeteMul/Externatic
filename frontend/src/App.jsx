import "./App.scss";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import UserConnexionContext from "./contexts/UserConnexionContext/UserConnexionContext";
import Router from "./components/Router";

function App() {
  const { setUserConnected, setUserId, userId, setIsAdmin } =
    useContext(UserConnexionContext);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const user = jwtDecode(token);
      console.info(user.exp);
      const now = Math.floor(Date.now() / 1000);
      if (user.exp < now) {
        console.info(now, "token expiré");
        setIsAdmin(false);
        setUserConnected(false);
        setUserId(null);
        navigate("/login");
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
