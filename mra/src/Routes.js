import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import MovieDetail from './Components/MovieDetail';
import Movies from './Components/Movies';
import Home from './Home';


export default function App() {
  return (
    <Router>
     <div>
        <Routes>
        <Route path="/" exact  element={<Home></Home>}></Route>
        <Route path="/movies/:id" element={<MovieDetail></MovieDetail>}></Route>
        </Routes>
        </div>
      
    </Router>
  );
}
