import React, { useState,useEffect } from 'react'
import './Truck.css'

function TrackTrucks() {
const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, [latitude,longitude]);


  return (
    <div>
      <h1>Track Trucks</h1>
      {error && <p>Error: {error}</p>}
      {latitude && longitude ? (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          <div id="map" style={{ width: '100%', height: '500px' }}></div>
        </div>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  )
}

export default TrackTrucks