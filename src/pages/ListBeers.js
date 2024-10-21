import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import Header from '../components/Header';

const BeersPage = () => {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch beers based on the search query or fetch all if empty
  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const apiUrl = searchQuery
          ? `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`
          : 'https://ih-beers-api2.herokuapp.com/beers';
        const response = await axios.get(apiUrl);
        setBeers(response.data);
      } catch (error) {
        console.error('Error fetching the beers:', error);
      }
    };

    fetchBeers();
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
    <Header />
    <div className="beers-container">
      <h2 className="section-title">Explore Our Beers</h2>
      <input
        type="text"
        placeholder="Search beers..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />

      <div className="beer-list">
        {beers.length > 0 ? (
          beers.map((beer) => (
            <div key={beer._id} className="beer-card">
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <img src={beer.image_url} alt={beer.name} className="beer-image" />
            </div>
          ))
        ) : (
          <p>No beers found.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default BeersPage;
