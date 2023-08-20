import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import MovieDetail from './Components/MovieDetail';
import Movies from './Components/Movies';


export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Movie</Link>
          </li>
          <li>
            <Link to="/about">Movie detail
            
            
            
            
            
            
            
            
            </Link>
          </li>
        </ul>

        <hr />
        <Routes>
          <Route exact path="/" element={<Movies/>} />
          <Route path="/about" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
