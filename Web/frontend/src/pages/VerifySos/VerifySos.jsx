/* eslint-disable no-undef */
import React, { useState } from "react";
import "./verifySos.css";
import VerifyCard from "../../components/VerifyCard/VerifyCard";

const initialData = [
  {
    id: 1,
    ip: "192.168.0.1",
    latitude: "16446",
    longitude: "4578.21636.32",
    time: "45874",
    verified: false,
    rescued: false,
  },
  {
    id: 2,
    ip: "192.168.0.2",
    latitude: "16447",
    longitude: "4578.21636.33",
    time: "45875",
    verified: false,
    rescued: false,
  },
  {
    id: 3,
    ip: "192.168.0.2",
    latitude: "16447",
    longitude: "4578.21636.33",
    time: "45875",
    verified: false,
    rescued: false,
  },
  {
    id: 4,
    ip: "192.168.0.2",
    latitude: "16447",
    longitude: "4578.21636.33",
    time: "45875",
    verified: false,
    rescued: false,
  },
];

function VerifySos() {
  const [sosData, setSosData] = useState(initialData);

  const handleVerification = (id) => {
    setSosData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, verified: true } : item
      )
    );
  };

  const handleRescue = (id) => {
    setSosData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, rescued: true } : item
      )
    );
  };
  return (
    <>
      <h1>Verify SOS and Track Rescues</h1>
      <div className="mainVerifiedDiv">
        <div className="NonVerified">
          <div className="nothing scrollable">
            <h3>Non Verified SOS</h3>
            {sosData
              .filter((item) => !item.verified)
              .map((item) => (
                <VerifyCard
                  key={item.id}
                  ip={item.ip}
                  latitude={item.latitude}
                  logitude={item.longitude}
                  time={item.time}
                  verified={item.verified}
                  rescued={item.rescued}
                  onVerify={() => handleVerification(item.id)}
                />
              ))}
          </div>
        </div>
        <div className="Verified">
          <div className="NotRescued scrollable">
            <h3>Verified SOS</h3>
            {sosData
              .filter((item) => item.verified && !item.rescued)
              .map((item) => (
                <VerifyCard
                  key={item.id}
                  ip={item.ip}
                  latitude={item.latitude}
                  logitude={item.longitude}
                  time={item.time}
                  verified={item.verified}
                  rescued={item.rescued}
                  onRescue={() => handleRescue(item.id)}
                />
              ))}
          </div>
          <div className="Rescued scrollable">
            <h3>Rescued SOS</h3>
            {sosData
              .filter((item) => item.verified && item.rescued)
              .map((item) => (
                <VerifyCard
                  key={item.id}
                  ip={item.ip}
                  latitude={item.latitude}
                  logitude={item.longitude}
                  time={item.time}
                  verified={item.verified}
                  rescued={item.rescued}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifySos;
