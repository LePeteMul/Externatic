import React from "react";
import PropTypes from "prop-types";
import "./DashboardCard.scss";

function DashboardCard({ title, description }) {
  // const goodIcon = getIcon(title);
  return (
    <div className="container">
      <div className="card">
        <style />
        {/* <div className="icon">{goodIcon}</div> */}
        <p className="title">{title}</p>
        <p className="text">{description}</p>
      </div>
    </div>
  );
}

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default DashboardCard;
