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
import CompanyProfile from "../pages/Company/CompanyProfile";
import OffersListCompany from "../pages/Company/OffersListCompany";

import ApplicationConfirmation from "../pages/JobSearch/ApplicationConfirmation";

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

// route copy
import CompanyFirstLoginCopy from "../pages/Company/CompanyFirstLoginCopy";
import LoginCopy from "../pages/Login/LoginCopy";
import CompanyProfileCopy from "../pages/Company/CompanyProfileCopy";
import RegistrationCopy from "../pages/Candidate/RegistrationCopy";
import CandidateProfileCopy from "../pages/Candidate/CandidateProfileCopy";
import OfferCreationCopy from "../pages/Company/OfferCreationCopy";
import AdminProfileCopy from "../pages/Admin/AdminProfileCopy";
import CompanyCreationCopy from "../pages/Admin/CompanyCreationCopy";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Admin section */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/companycreation" element={<CompanyCreation />} />
        <Route
          path="/admin/creationconfirmation"
          element={<ConfirmationCreation />}
        />
        <Route
          path="/admin/deletionconfirmation"
          element={<ConfirmationDeletion />}
        />
        <Route path="/admin/offerlist" element={<OffersList />} />
        <Route path="/admin/candidatelist" element={<CandidateList />} />
        <Route path="/admin/companylist" element={<CompanyList />} />

        {/* Global section */}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/jobsearch" element={<JobSearch />} />
        <Route path="/results" element={<Results />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/jobdetails" element={<JobDetails />} />
        <Route path="/legalinformations" element={<LegalInformations />} />
        <Route path="/contact" element={<Contact />} />

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
        <Route path="/company/firstlogin" element={<CompanyFirstLogin />} />
        <Route path="/company/presentation" element={<CompanyPresentation />} />
        <Route path="/candidate/application" element={<Application />} />
        <Route
          path="/company/profilecandidate"
          element={<ProfileCandidate />}
        />
        <Route path="/candidate/favorite" element={<FavoriteOffers />} />
        <Route path="/candidate/dashboard" element={<CandidateDashboard />} />

        {/* Company section */}
        <Route path="/company/dashboard" element={<CompanyDashboard />} />
        <Route path="/company/offercreation" element={<OfferCreation />} />
        <Route path="/company/firstlogin" element={<CompanyFirstLogin />} />
        <Route path="/company/presentation" element={<CompanyPresentation />} />
        <Route path="/company/offers" element={<OffersListCompany />} />
        <Route path="/company/application" element={<Application />} />
        <Route path="/company/profile" element={<CompanyProfile />} />
        <Route
          path="/company/profilecandidate"
          element={<ProfileCandidate />}
        />

        {/* copy */}

        <Route path="/company/profile2" element={<CompanyProfileCopy />} />
        <Route path="/admin/profile2" element={<AdminProfileCopy />} />
        <Route
          path="/admin/companycreation2"
          element={<CompanyCreationCopy />}
        />
        <Route path="/login2" element={<LoginCopy />} />
        <Route
          path="/company/firstlogin2"
          element={<CompanyFirstLoginCopy />}
        />

        <Route path="/candidate/registration2" element={<RegistrationCopy />} />
        <Route path="/candidate/profile2" element={<CandidateProfileCopy />} />
        <Route path="/company/offercreation2" element={<OfferCreationCopy />} />
      </Routes>
    </div>
  );
}

export default Router;
