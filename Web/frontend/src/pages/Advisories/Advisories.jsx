import React, { useEffect, useState } from "react";
import AddAdvisory from "../../components/Advisory/AddAdvisory";
import "./Advisories.css";
import AdvTab from "../../components/Advisory/AdvTab";

const Advisories = () => {
  // State for form input
  const [advisory, setAdvisory] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    cityName: "",
    pincode: "",
  });

  // State for storing advisory list
  const [advisoryArray, setAdvisoryArray] = useState([]);

  // Handle form field changes
  const handleChange = (name, value) => {
    setAdvisory((prevAdvisory) => ({
      ...prevAdvisory,
      [name]: value,
    }));
  };

  // Persist data to local storage
  const persistData = (newList) => {
    localStorage.setItem("advisory", JSON.stringify(newList));
  };

  function handleDelete(index) {
    const newAdvArray = advisoryArray.filter((advisory, advisoryIndex) => advisoryIndex !== index);
    persistData(newAdvArray);
    setAdvisoryArray(newAdvArray);
  }
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedAdvisoryArray = [...advisoryArray, advisory];
    setAdvisoryArray(updatedAdvisoryArray);
    persistData(updatedAdvisoryArray);
    setAdvisory({
      title: "",
      description: "",
      date: "",
      time: "",
      cityName: "",
      pincode: "",
    }); // Clear the form fields after submission
  };

  // Load data from local storage on component mount
  useEffect(() => {
    // Check if localStorage is available
    const localAdvisories = localStorage.getItem("advisory");
    if (localAdvisories) {
      try {
        const parsedAdvisories = JSON.parse(localAdvisories);
        if (Array.isArray(parsedAdvisories)) {
          setAdvisoryArray(parsedAdvisories);
        } else {
          console.error("Parsed data is not an array");
          setAdvisoryArray([]);
        }
      } catch (error) {
        console.error("Failed to parse localStorage data", error);
        setAdvisoryArray([]);
      }
    }
  }, []);

  return (
    <div className="advisory-panel">
      <AddAdvisory
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        advisory={advisory}
        setAdvisory={setAdvisory}
      />
      <AdvTab advisoryArray={advisoryArray} handleDelete={handleDelete}/>
    </div>
  );
};

export default Advisories;
