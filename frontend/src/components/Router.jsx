import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderWave from "./Header/HeaderWave";

function Router() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<HeaderWave/>} />
      </Routes>
    </div>
  );
}

export default Router;
