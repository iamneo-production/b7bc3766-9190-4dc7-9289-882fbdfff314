import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import RateMovie from './Components/RateMovie';
import { Grid } from '@mui/material';


function Home() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    // Fetch movies from API and update state
    axios.get('https://ide-dcdfdfcffadaadeeedccdbaffaafcdadabbbdecf.project.examly.io/proxy/8080/movies').then(response => {
      setMovies(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Movies</h1>
    
      {/* Display list of movies */}
      
      <Grid container spacing={{ xs: 2, sm:3,md: 8 }} columns={{ xs: 4, sm: 8, md: 12 }} >
      {movies.map(movie => (
      
        <Grid item xs={6} sm={4} md={3}>
          <h2>{movie.title}</h2>
          <p>Average Rating: {movie.averagerating}</p>
          {/* Link to movie details */}
          <img src={movie.image} alt="image"></img>
          <h3>View</h3>
          <Link to={`/movies/${movie.id}`}>View Details</Link>
          <RateMovie></RateMovie>
          </Grid>
         

      ))}
       </Grid>
    </div>
  );
}

export default Home;
