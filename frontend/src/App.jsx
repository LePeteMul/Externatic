import "./App.scss";
import Router from "./components/Router";
import { SearchJobContextProvider } from "./contexts/SearchJobContext/SearchJobContext";
import { SearchContractContextProvider } from "./contexts/SearchContractContext/SearchContractContext";
import { SearchCityContextProvider } from "./contexts/SearchCityContext/SearchCityContext";

function App() {
  return (
    <div className="App">
      <SearchJobContextProvider>
        <SearchContractContextProvider>
          <SearchCityContextProvider>
            <Router />
          </SearchCityContextProvider>
        </SearchContractContextProvider>
      </SearchJobContextProvider>
    </div>
  );
}

export default App;
