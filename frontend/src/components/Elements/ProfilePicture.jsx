import React from "react";
import PropTypes from "prop-types";
import defaultProfile from "../../assets/icons/userIcon2.png";

function ProfilePicture({ firstname, lastname }) {
  const profilePictureDEF = defaultProfile;
  return (
    <div className="ProfilePicture">
      <img
        className="ProfileImage"
        src={profilePictureDEF}
        alt={`${firstname} ${lastname}`}
      />
    </div>
  );
}
ProfilePicture.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

export default ProfilePicture;
