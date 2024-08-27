import React from "react";
import SingleAdvisory from "./SingleAdvisory";
import "./Advisory.css";

const AdvTab = ({ advisoryArray, handleDelete }) => {
  // Ensure advisoryArray is an array and reverse it
  const reversedArray = Array.isArray(advisoryArray)
    ? [...advisoryArray].reverse()
    : [];

  return (
    <div className="advisory-tab">
      <div className="disasters-container">
        {reversedArray.map((item, index) => (
          <div key={index} className="single-advisory">
            <SingleAdvisory item={item} />
            <button
              onClick={() => handleDelete(index)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvTab;
