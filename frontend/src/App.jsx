import "./App.scss";
import Router from "./components/Router";
import { SearchJobContextProvider } from "./contexts/SearchJobContext/SearchJobContext";
import { SearchContractContextProvider } from "./contexts/SearchContractContext/SearchContractContext";
import { SearchCityContextProvider } from "./contexts/SearchCityContext/SearchCityContext";
import { UserConnexionContextProvider } from "./contexts/UserConnexionContext/UserConnexionContext";
import { JobOfferContextProvider } from "./contexts/JobOfferContext/JobOfferContext";

function App() {
  return (
    <div className="App">
      <UserConnexionContextProvider>
        <JobOfferContextProvider>
          <SearchJobContextProvider>
            <SearchContractContextProvider>
              <SearchCityContextProvider>
                <Router />
              </SearchCityContextProvider>
            </SearchContractContextProvider>
          </SearchJobContextProvider>
        </JobOfferContextProvider>
      </UserConnexionContextProvider>
    </div>
  );
}

export default App;
