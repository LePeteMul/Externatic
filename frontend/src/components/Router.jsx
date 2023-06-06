import React from "react";
import { Routes, Route } from "react-router-dom";
import Modele from "../pages/HomePage/Modele";
import HomePage from "../pages/HomePage/HomePage";
import JobSearch from "../pages/JobSearch/JobSearch";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Modele />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/jobsearch" element={<JobSearch />} />
      </Routes>
    </div>
  );
}

export default Router;
