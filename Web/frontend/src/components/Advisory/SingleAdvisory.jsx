import React from "react";
import { GoAlert } from "react-icons/go";

const SingleAdvisory = ({ item, index }) => {
  return (
    <div className="single-card">
      <div className="icon-container">
        <GoAlert size={25} />
      </div>
      <div className="advisory-card">
        <h3 className="advisory-title">{item.title?.slice(0, 5)}</h3>
        <div className="advisory-details">
          <p className="advisory-description">
            {item.description?.slice(0, 5)}
          </p>
          <div className="advisory-date-time">
            <div>Date: {item.date}</div>
            <div>Time: {item.time}</div>
          </div>
          <p className="advisory-location">
            <div>City: {item.cityName?.slice(0, 5)}</div>
            <div>Pincode: {item.pincode?.slice(0, 6)}</div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleAdvisory;
