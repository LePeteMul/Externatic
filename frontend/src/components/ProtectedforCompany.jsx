import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import UserConnexionContext from "../contexts/UserConnexionContext/UserConnexionContext";

function ProtectedforCompany({ children }) {
  const navigate = useNavigate();

  const { userConnected, isCompany } = useContext(UserConnexionContext);

  useEffect(() => {
    if (!userConnected || !isCompany) {
      navigate("/");
    }
  }, [userConnected, isCompany]);

  return children;
}

ProtectedforCompany.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedforCompany;
