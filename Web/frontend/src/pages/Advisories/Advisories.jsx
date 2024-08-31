import React, { useEffect, useState } from "react";
import AddAdvisory from "../../components/Advisory/AddAdvisory";
import "./Advisories.css";
import AdvTab from "../../components/Advisory/AdvTab";
import { getDatabase,ref, get, set } from "firebase/database";
import {database} from "../../firebase"
import { toast } from 'react-toastify';



const Advisories = () => {
  const [keyCounter, setKeyCounter] = useState(1);
  // State for form input
  const [advisory, setAdvisory] = useState({
    uniqueKey: keyCounter,
    title: "",
    description: "",
    date: "",
    time: "",
    cityName: "",
    pincode: "",
    Advisories: true,
    Sos: false,
    alert: false,
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

  const addAdvisoryToDatabase = () => {
    const advisoryRef = ref(database, '/', keyCounter); // using pincode as a unique key
    set(advisoryRef, advisory)
      .then(() => {
        console.log("Advisory data added successfully!");
        toast.success('Advisiory uploaded successfully');
        setKeyCounter(prevKey => prevKey + 1);
      })
      .catch((error) => {
        console.error("Error adding advisory data: ", error);
      });
  };

  function handleDelete(index) {
    const newAdvArray = advisoryArray.filter((advisory, advisoryIndex) => advisoryIndex !== index);
    persistData(newAdvArray);
    setAdvisoryArray(newAdvArray);
  }
  

  // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const updatedAdvisoryArray = [...advisoryArray, advisory];
  //   setAdvisoryArray(updatedAdvisoryArray);
  //   persistData(updatedAdvisoryArray);
  //   setAdvisory({
  //     title: "",
  //     description: "",
  //     date: "",
  //     time: "",
  //     cityName: "",
  //     pincode: "",
  //   }); // Clear the form fields after submission
  // };

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
        handleSubmit={addAdvisoryToDatabase}
        advisory={advisory}
        setAdvisory={setAdvisory}
      />
      <AdvTab advisoryArray={advisoryArray} handleDelete={handleDelete}/>
    </div>
  );
};

export default Advisories;
