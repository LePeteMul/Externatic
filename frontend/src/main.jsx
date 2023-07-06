import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserConnexionContextProvider } from "./contexts/UserConnexionContext/UserConnexionContext";
import { CompanyConnexionContextProvider } from "./contexts/CompanyConnexionContext/CompanyConnexionContext";
import { JobOfferContextProvider } from "./contexts/JobOfferContext/JobOfferContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UserConnexionContextProvider>
    <CompanyConnexionContextProvider>
      <JobOfferContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </JobOfferContextProvider>
    </CompanyConnexionContextProvider>
  </UserConnexionContextProvider>
);
