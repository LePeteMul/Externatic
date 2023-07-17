import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import CompanyCard from "../../components/Elements/CompanyCard";
import nickel from "../../assets/images/HomePage/logo-nickel.png";
import BlackButton from "../../components/Elements/BlackButton";
import CompanyConnexionContext from "../../contexts/CompanyConnexionContext/CompanyConnexionContext";

function CompanyList() {
  const [result, setResult] = useState([]);

  // find all companies List
  useEffect(() => {
    const url = `http://localhost:8080/api/company`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.info("Response:", data);
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
        `http://localhost:8080/api/company/${companyId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.info("Company deleted successfully");
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
                logo={company.logo}
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
