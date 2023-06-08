import React from "react";
import PropTypes from "prop-types";

// FINAL CODE ONCE DATABASE IS SET
//
// function ProfilePicture({ profilePicture, firstname, lastname }) {
//   return (
//     <div className="ProfilePicture">
//       <img
//         className="ProfileImage"
//         src={profilePicture}
//         alt={`${firstname} ${lastname}`}
//       />
//     </div>
//   );
// }
// ProfilePicture.propTypes = {
//   profilePicture: PropTypes.string.isRequired,
//   firstname: PropTypes.string.isRequired,
//   lastname: PropTypes.string.isRequired,
// };
//
// END OF FINAL CODE

// TEMPORARY CODE WITH DEFAULT SETTINGS during developpement
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

// END OF TEMPORARY CODE

export default ProfilePicture;
