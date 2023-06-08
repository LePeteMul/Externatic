import React from "react";
import { Routes, Route } from "react-router-dom";
import Modele from "../pages/HomePage/Modele";
import HomePage from "../pages/HomePage/HomePage";
import NavBar from "./NavBar/NavBar";
import HeaderWave from "./Header/HeaderWave";
import Login from "../pages/Login/Login";

import JobSearch from "../pages/JobSearch/JobSearch";


function Router() {
  return (
    <div>
      <Routes>

      
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/headerwave" element={<HeaderWave />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Modele />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/jobsearch" element={<JobSearch />} />

      </Routes>
    </div>
  );
}

export default Router;
