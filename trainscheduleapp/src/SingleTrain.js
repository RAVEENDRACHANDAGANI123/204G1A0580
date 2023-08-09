import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleTrain = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    axios.get(`YOUR_BACKEND_API_ENDPOINT/single-train/${trainId}`)
      .then(response => {
        setTrain(response.data);
      })
      .catch(error => {
        console.error('Error fetching train:', error);
      });
  }, [trainId]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Single Train Details</h1>
      <p>Train Name: {train.name}</p>
      <p>Departure Time: {train.departureTime}</p>
      {/* Display other train details */}
    </div>
  );
};

export default SingleTrain;
