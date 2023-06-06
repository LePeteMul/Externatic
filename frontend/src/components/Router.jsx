import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AdminDashboard from "../pages/Admin/AdminDashboard";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default Router;
