import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import CompanyConnexionContext from "../contexts/CompanyConnexionContext/CompanyConnexionContext";

function ProtectedforCompany({ children }) {
  const navigate = useNavigate();

  const { companyConnected } = useContext(CompanyConnexionContext);

  useEffect(() => {
    if (!companyConnected) {
      navigate("/");
    }
  }, [companyConnected]);

  return children;
}

ProtectedforCompany.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedforCompany;
