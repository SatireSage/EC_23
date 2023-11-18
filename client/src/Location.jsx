//AIzaSyCzaZV9j_747A-c9_nAAMkIQq6U1kAfVD8
import React, { useState, useEffect } from 'react';

function Location() {
  const [mapSrc, setMapSrc] = useState('');
  const destination = '8888+University+Dr,+Burnaby,+BC+V5A+1S6'; // SFU Burnaby
  const apiKey = 'AIzaSyCzaZV9j_747A-c9_nAAMkIQq6U1kAfVD8';

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const origin = `${position.coords.latitude},${position.coords.longitude}`;
        const newMapSrc = `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=${origin}&destination=${destination}&mode=driving`;
        setMapSrc(newMapSrc);
      }, () => {
        alert('Error getting your location');
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      <h1>Directions to SFU Burnaby</h1>
      {mapSrc && (
        <iframe
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={mapSrc}
        ></iframe>
      )}
    </div>
  );
}

export default Location;
