import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CandidateDashboard from "../pages/Candidate/CandidateDashboard";
import CompanyDashboard from "../pages/Company/CompanyDashboard";
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
import Application from "../pages/Company/Application";
import ProfileCandidate from "../pages/Company/ProfileCandidate";
import ApplicationConfirmation from "../pages/JobSearch/ApplicationConfirmation";
import OffersList from "../pages/Admin/OffersList";
import CandidateList from "../pages/Admin/CandidateList";
import CompanyList from "../pages/Admin/CompanyList";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<CandidateDashboard />} />
        <Route path="/pro/dashboard" element={<CompanyDashboard />} />

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
        <Route path="/application" element={<Application />} />
        <Route path="/profilecandidate" element={<ProfileCandidate />} />
        <Route path="/offerlist" element={<OffersList />} />
        <Route path="/candidatelist" element={<CandidateList />} />
        <Route path="/companylist" element={<CompanyList />} />
      </Routes>
    </div>
  );
}

export default Router;
