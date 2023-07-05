import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SearchJobContextProvider } from "./contexts/SearchJobContext/SearchJobContext";
import { SearchContractContextProvider } from "./contexts/SearchContractContext/SearchContractContext";
import { SearchCityContextProvider } from "./contexts/SearchCityContext/SearchCityContext";
import { UserConnexionContextProvider } from "./contexts/UserConnexionContext/UserConnexionContext";
import { JobOfferContextProvider } from "./contexts/JobOfferContext/JobOfferContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UserConnexionContextProvider>
    <JobOfferContextProvider>
      <SearchJobContextProvider>
        <SearchContractContextProvider>
          <SearchCityContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </SearchCityContextProvider>
        </SearchContractContextProvider>
      </SearchJobContextProvider>
    </JobOfferContextProvider>
  </UserConnexionContextProvider>
);
