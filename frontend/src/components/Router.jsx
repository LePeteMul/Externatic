import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NavBar from "./NavBar/NavBar";
import HeaderWave from "./Header/HeaderWave";
import Login from "../pages/Login/Login";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/headerwave" element={<HeaderWave />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Router;
