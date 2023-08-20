import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Rating } from '@mui/material';

function RateMovie() {
  const { id } = useParams();
  const [rating, setRating] = useState(2);

  const handleRatingChange = event => {
    setRating(event.target.value);
  };

  const submitRating = () => {
    // Submit user's rating to API
    axios.post(`/api/movies/${id}/rating`, { rating }).then(response => {
      // Handle success or error
    });
  };

  return (
    <div>
      
      <Rating
  name="simple-controlled"
  value={rating}
  onChange={handleRatingChange}
/>
      
     
    </div>
  );
}

export default RateMovie;
