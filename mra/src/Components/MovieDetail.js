import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch movie details from API and update state
    axios.get(`https://ide-dcdfdfcffadaadeeedccdbaffaafcdadabbbdecf.project.examly.io/proxy/8080/movies/${id}`).then(response => {
      setMovie(response.data);
      console.log(response.data);
    });

    // Fetch reviews from API and update state
   
  }, [id]);

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Synopsis: {movie.synopsis}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Average Rating: {movie.averageRating}</p>
      {/* Display reviews */}
      <h2>Reviews</h2>
      <ul>
        {movie&&movie.review&&movie.review.map(review => (
          <li key={review.id}>{review.comment} - {review.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetail;
