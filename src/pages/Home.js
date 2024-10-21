import React from 'react';
import { Link } from 'react-router-dom';
import allBeersImg from '../assets/beers.png';
import randomBeerImg from '../assets/random-beer.png';
import newBeerImg from '../assets/new-beer.png';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Beer App</h1>
      <Link to="/beers">
        <img src={allBeersImg} alt="All Beers" />
        <p>All Beers</p>
      </Link>
      <Link to="/random-beer">
        <img src={randomBeerImg} alt="Random Beer" />
        <p>Random Beer</p>
      </Link>
      <Link to="/new-beer">
        <img src={newBeerImg} alt="New Beer" />
        <p>New Beer</p>
      </Link>
    </div>
  );
};

export default Home;
