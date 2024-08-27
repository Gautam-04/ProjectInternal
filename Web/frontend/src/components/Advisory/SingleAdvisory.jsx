import React from "react";
import { GoAlert } from "react-icons/go";

const SingleAdvisory = ({ item, index }) => {
  return (
    <div className="">
      {" "}
      {/* Add class to wrap advisory */}
      <div className="advisory-card">
        <div className="icon-container">
          <GoAlert size={40} className="advisory-icon" />{" "}
          {/* Corrected className */}
        </div>
        <h3 className="advisory-title">{item.title?.slice(0, 20)}</h3>{" "}
        {/* Increased slice length for better display */}
        <div className="advisory-details">
          <p className="advisory-description">
            {item.description?.slice(0, 100)}{" "}
            {/* Increased slice length for better display */}
          </p>
          <div className="advisory-time">
            <div>Date: {item.date}</div>
            <div>Time: {item.time}</div>
          </div>
          <div className="advisory-city">
            <div>City: {item.cityName?.slice(0, 20)}</div>{" "}
            {/* Increased slice length for better display */}
            <div>Pincode: {item.pincode?.slice(0, 6)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAdvisory;
