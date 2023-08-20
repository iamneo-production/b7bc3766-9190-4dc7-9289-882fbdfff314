import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SubmitReview() {
  const { id } = useParams();
  const [review, setReview] = useState('');
  const [username, setUsername] = useState('');

  const handleReviewChange = event => {
    setReview(event.target.value);
  };

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const submitReview = () => {
    // Submit user's review to API
    axios.post(`/api/movies/${id}/review`, { text: review, username }).then(response => {
      // Handle success or error
    });
  };

  return (
    <div>
      <h1>Submit Review for {movie.title}</h1>
      <input type="text" placeholder="Your Name" value={username} onChange={handleUsernameChange} />
      <textarea placeholder="Write your review here..." value={review} onChange={handleReviewChange}></textarea>
      <button onClick={submitReview}>Submit Review</button>
    </div>
  );
}

export default SubmitReview;
