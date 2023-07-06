import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserConnexionContextProvider } from "./contexts/UserConnexionContext/UserConnexionContext";
import { JobOfferContextProvider } from "./contexts/JobOfferContext/JobOfferContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UserConnexionContextProvider>
    <JobOfferContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </JobOfferContextProvider>
  </UserConnexionContextProvider>
);
