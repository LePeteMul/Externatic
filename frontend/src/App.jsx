import HomePage from "./pages/HomePage/HomePage";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Router from "./components/Router";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}

      <Router/>
      {/* <NavBar/> */}
    </div>
  );
}

export default App;
