import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CandidateDashboard from "../pages/Candidate/CandidateDashboard";
import CompanyDashboard from "../pages/Company/CompanyDashboard";
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
import CompanyCreation from "../pages/Admin/CompanyCreation";
import ConfirmationCreation from "../pages/Admin/ConfirmationCreation";
import ConfirmationDeletion from "../pages/Admin/ConfirmationDeletion";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
       

        {/* Admin section */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/profile" element={<AdminDashboard />} />
        <Route path="/admin/companycreation" element={<CompanyCreation />} />
                  <Route
          path="/admin/creationconfirmation"
          element={<ConfirmationCreation />}
        />
        <Route
          path="/admin/deletionconfirmation"
          element={<ConfirmationDeletion/>}/>

        {/* Global section */}
        <Route path="/login" element={<Login />} />
        <Route path="/jobsearch" element={<JobSearch />} />
        <Route path="/results" element={<Results />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/jobdetails" element={<JobDetails />} />

        {/* Candidate section */}
        <Route
          path="/candidate/applicationconfirmation"
          element={<ApplicationConfirmation />}
        />
        <Route path="/candidate/registration" element={<Registration />} />
        <Route path="/candidate/profile" element={<CandidateProfile />} />
        <Route
          path="/candidate/job-application"
          element={<CandidateJobApplications />}
        />
        <Route path="/candidate/favorite" element={<FavoriteOffers />} />
        <Route path="/candidate/dashboard" element={<CandidateDashboard />} />

        {/* Company section */}
        <Route path="/company/dashboard" element={<CompanyDashboard />} />
        <Route path="/company/offercreation" element={<OfferCreation />} />
        <Route path="/company/firstlogin" element={<CompanyFirstLogin />} />
        <Route path="/company/presentation" element={<CompanyPresentation />} />
        <Route path="/company/application" element={<Application />} />
        <Route
          path="/company/profilecandidate"
          element={<ProfileCandidate />}
        />
      </Routes>
    </div>
  );
}

export default Router;
