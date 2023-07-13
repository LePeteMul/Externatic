import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CandidateDashboard from "../pages/Candidate/CandidateDashboard";
import CompanyDashboard from "../pages/Company/CompanyDashboard";
import Login from "../pages/Login/Login";
import LoginCompany from "../pages/Login/LoginCompany";
import JobDetails from "../pages/JobSearch/JobDetails";
import JobSearch from "../pages/JobSearch/JobSearch";
import Results from "../pages/JobSearch/Results";
import Registration from "../pages/Candidate/Registration";

import ProtectedforCandidate from "./ProtectedforCandidate";
import CandidateProfile from "../pages/Candidate/CandidateProfile";
import OfferCreation from "../pages/Company/OfferCreation";
import CandidateJobApplications from "../pages/Candidate/CandidateJobApplications";
import FavoriteOffers from "../pages/Candidate/FavoriteOffers";

import ProtectedforCompany from "./ProtectedforCompany";
import CompanyFirstLogin from "../pages/Company/CompanyFirstLogin";
import CompanyPresentation from "../pages/Company/CompanyPresentation";
import Application from "../pages/Company/Application";
import ProfileCandidate from "../pages/Company/ProfileCandidate";
import CompanyProfile from "../pages/Company/CompanyProfile";
import OffersListCompany from "../pages/Company/OffersListCompany";

import ApplicationConfirmation from "../pages/JobSearch/ApplicationConfirmation";

import ProtectedforAdmin from "./ProtectedforAdmin";
import OffersList from "../pages/Admin/OffersList";
import CandidateList from "../pages/Admin/CandidateList";
import CompanyList from "../pages/Admin/CompanyList";
import AdminProfile from "../pages/Admin/AdminProfile";
import CompanyCreation from "../pages/Admin/CompanyCreation";
import ConfirmationCreation from "../pages/Admin/ConfirmationCreation";
import ConfirmationDeletion from "../pages/Admin/ConfirmationDeletion";
import LegalInformations from "../pages/LegalInformations/LegalInformations";
import Contact from "../pages/Contact/Contact";
import Logout from "../pages/Login/Logout";
import ForgottenPassword from "../pages/Login/ForgottenPassword";
import ResetPassword from "../pages/Login/ResetPassword";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Admin section */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedforAdmin>
              <AdminDashboard />
            </ProtectedforAdmin>
          }
        />
        <Route
          path="/admin/profile"
          element={
            <ProtectedforAdmin>
              <AdminProfile />
            </ProtectedforAdmin>
          }
        />
        <Route
          path="/admin/companycreation"
          element={
            <ProtectedforAdmin>
              <CompanyCreation />
            </ProtectedforAdmin>
          }
        />
        <Route
          path="/admin/creationconfirmation"
          element={
            <ProtectedforAdmin>
              <ConfirmationCreation />
            </ProtectedforAdmin>
          }
        />
        <Route
          path="/admin/deletionconfirmation"
          element={
            <ProtectedforAdmin>
              <ConfirmationDeletion />
            </ProtectedforAdmin>
          }
        />
        <Route
          path="/admin/offerlist"
          element={
            <ProtectedforAdmin>
              <OffersList />
            </ProtectedforAdmin>
          }
        />
        <Route
          path="/admin/candidatelist"
          element={
            <ProtectedforAdmin>
              <CandidateList />
            </ProtectedforAdmin>
          }
        />
        <Route
          path="/admin/companylist"
          element={
            <ProtectedforAdmin>
              <CompanyList />
              {/* //{" "} */}
            </ProtectedforAdmin>
          }
        />

        {/* Global section */}
        <Route path="/login" element={<Login />} />
        <Route path="/logincompany" element={<LoginCompany />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/jobsearch" element={<JobSearch />} />
        <Route path="/results" element={<Results />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/jobdetails" element={<JobDetails />} />
        <Route path="/legalinformations" element={<LegalInformations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resetpassword" element={<ForgottenPassword />} />
        <Route path="/forgottenpassword" element={<ResetPassword />} />

        {/* Candidate section */}
        <Route
          path="/candidate/applicationconfirmation"
          element={
            <ProtectedforCandidate>
              <ApplicationConfirmation />
            </ProtectedforCandidate>
          }
        />
        <Route path="/candidate/registration" element={<Registration />} />
        <Route
          path="/candidate/profile"
          element={
            <ProtectedforCandidate>
              <CandidateProfile />
            </ProtectedforCandidate>
          }
        />
        <Route
          path="/candidate/job-application"
          element={
            <ProtectedforCandidate>
              <CandidateJobApplications />
            </ProtectedforCandidate>
          }
        />
        <Route
          path="/candidate/favorite"
          element={
            <ProtectedforCandidate>
              <FavoriteOffers />
            </ProtectedforCandidate>
          }
        />
        <Route
          path="/candidate/application"
          element={
            <ProtectedforCandidate>
              <Application />
            </ProtectedforCandidate>
          }
        />
        <Route
          path="/candidate/favorite"
          element={
            <ProtectedforCandidate>
              <FavoriteOffers />
            </ProtectedforCandidate>
          }
        />
        <Route
          path="/candidate/dashboard"
          element={
            <ProtectedforCandidate>
              <CandidateDashboard />
            </ProtectedforCandidate>
          }
        />

        {/* Company section */}
        <Route
          path="/company/dashboard"
          element={
            <ProtectedforCompany>
              <CompanyDashboard />
            </ProtectedforCompany>
          }
        />
        <Route
          path="/company/offercreation"
          element={
            <ProtectedforCompany>
              <OfferCreation />
            </ProtectedforCompany>
          }
        />
        <Route
          path="/company/firstlogin"
          element={
            <ProtectedforCompany>
              <CompanyFirstLogin />
            </ProtectedforCompany>
          }
        />
        <Route
          path="/company/presentation"
          element={
            <ProtectedforCompany>
              <CompanyPresentation />
            </ProtectedforCompany>
          }
        />
        <Route
          path="/company/offers"
          element={
            <ProtectedforCompany>
              <OffersListCompany />
            </ProtectedforCompany>
          }
        />
        <Route
          path="/company/application"
          element={
            <ProtectedforCompany>
              <Application />
            </ProtectedforCompany>
          }
        />
        <Route
          path="/company/profile"
          element={
            <ProtectedforCompany>
              <CompanyProfile />
            </ProtectedforCompany>
          }
        />
        <Route
          path="/company/profilecandidate/:id"
          element={
            <ProtectedforCompany>
              <ProfileCandidate />
            </ProtectedforCompany>
          }
        />
      </Routes>
    </div>
  );
}

export default Router;
