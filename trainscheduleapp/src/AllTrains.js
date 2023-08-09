import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllTrains = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios.get('YOUR_BACKEND_API_ENDPOINT/all-trains')
      .then(response => {
        setTrains(response.data);
      })
      .catch(error => {
        console.error('Error fetching trains:', error);
      });
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      <ul>
        {trains.map(train => (
          <li key={train.id}>
            <p>Train Name: {train.name}</p>
            <p>Departure Time: {train.departureTime}</p>
            {/* Display other train details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTrains;
