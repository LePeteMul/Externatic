import React from "react";
import PropTypes from "prop-types";
// import defaultProfile from "../../assets/icons/userIcon2.png";

function ProfilePicture({ profilePicture, firstname, lastname }) {
  return (
    <div className="ProfilePicture">
      <img
        className="ProfileImage"
        src={profilePicture}
        alt={`${firstname} ${lastname}`}
      />
    </div>
  );
}

ProfilePicture.propTypes = {
  profilePicture: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

export default ProfilePicture;
