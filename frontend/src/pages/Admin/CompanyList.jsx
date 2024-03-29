import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import CompanyCard from "../../components/Elements/CompanyCard";
import BlackButton from "../../components/Elements/BlackButton";
import logo_generique from "../../assets/images/logo_generique.jpg";

function CompanyList() {
  const token = localStorage.getItem("token");

  const [result, setResult] = useState([]);

  // find all companies List
  useEffect(() => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/api/company`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // Delete a company
  const handleDelete = async (companyId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/company/${companyId}`,
        {
          method: "DELETE",
          Authorization: `Bearer ${token}`,
        }
      );

      if (response.status === 204) {
        setResult((prevResult) =>
          prevResult.filter((results) => results.id !== companyId)
        );
      } else {
        console.error("Failed to delete company");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="CompanyList">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="CompanyListTitle">
          <h1>Entreprises</h1>
        </div>

        <div className="company">
          {result.map((company) => {
            return (
              <CompanyCard
                key={company.company_name}
                logo={company.logo ? company.logo : logo_generique}
                name={company.company_name}
                email={company.email}
                onDelete={() => handleDelete(company.id)}
              />
            );
          })}
        </div>
        <div className="returnButton">
          <NavLink to="/admin/dashboard">
            <BlackButton buttonName="Retour à l'administration" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CompanyList;
