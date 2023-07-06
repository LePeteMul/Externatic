import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import UserConnexionContext from "../contexts/UserConnexionContext/UserConnexionContext";

function ProtectedforCandidate({ children }) {
  const navigate = useNavigate();

  const { userConnected, isAdmin } = useContext(UserConnexionContext);

  useEffect(() => {
    if (!userConnected || isAdmin) {
      navigate("/");
    }
  }, [userConnected, isAdmin]);

  return children;
}

ProtectedforCandidate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedforCandidate;
