import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NavBar from "./NavBar/NavBar";
import HeaderWave from "./Header/HeaderWave";
import Login from "../pages/Login/Login";
import JobDetails from "../pages/JobSearch/JobDetails";
import JobSearch from "../pages/JobSearch/JobSearch";
import Results from "../pages/JobSearch/Results";
import Registration from "../pages/Candidate/Registration";
import CandidateProfile from "../pages/Candidate/CandidateProfile";
import OfferCreation from "../pages/Company/OfferCreation";
import CandidateJobApplications from "../pages/Candidate/CandidateJobApplications";
import FavoriteOffers from "../pages/Candidate/FavoriteOffers";
import CompanyFirstLogin from "../pages/Company/CompanyFirstLogin";
import CompanyPresentation from "../pages/Company/CompanyPresentation";
import ApplicationConfirmation from "../pages/JobSearch/ApplicationConfirmation";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/headerwave" element={<HeaderWave />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobsearch" element={<JobSearch />} />
        <Route path="/results" element={<Results />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/jobdetails" element={<JobDetails />} />
        <Route
          path="/applicationconfirmation"
          element={<ApplicationConfirmation />}
        />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<CandidateProfile />} />
        <Route path="/offercreation" element={<OfferCreation />} />
        <Route
          path="/candidate-job-application"
          element={<CandidateJobApplications />}
        />
        <Route path="/favorite" element={<FavoriteOffers />} />
        <Route path="/companyfirstlogin" element={<CompanyFirstLogin />} />
        <Route path="/companypresentation" element={<CompanyPresentation />} />
      </Routes>
    </div>
  );
}

export default Router;
