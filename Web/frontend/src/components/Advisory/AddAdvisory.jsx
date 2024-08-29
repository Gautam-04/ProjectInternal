import React from "react";
import { BsFillMegaphoneFill } from "react-icons/bs";
import "./AddAdvisory.css"; 
const AddAdvisory = ({ handleChange, handleSubmit, advisory }) => {
  return (
    <div className="add-advisory-container">
      <h2 className="header">Add New Advisory</h2>
      <form onSubmit={handleSubmit} className="advisory-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            placeholder="Title..."
            id="title"
            name="title"
            value={advisory.title}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="advisory-desc">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Short description..."
            value={advisory.description}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={advisory.date}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={advisory.time}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cityName">City Name:</label>
          <input
            type="text"
            id="cityName"
            name="cityName"
            placeholder="City name..."
            value={advisory.cityName}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pin-Code:</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            placeholder="Pin-Code..."
            value={advisory.pincode}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          <BsFillMegaphoneFill size={22} />
          <span>Broadcast</span>
        </button>
      </form>
    </div>
  );
};

export default AddAdvisory;
