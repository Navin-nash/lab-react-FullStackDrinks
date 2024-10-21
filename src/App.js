import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListBeers from './pages/ListBeers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import SingleBeer from './pages/SingleBeer';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beers" element={<ListBeers />} />
      <Route path="/beers/:beerId" element={<SingleBeer />} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/new-beer" element={<NewBeer />} />
    </Routes>
  </Router>
);

export default App;
