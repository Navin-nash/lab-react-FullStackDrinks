import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSingleBeer } from '../services/beerService';
import Header from '../components/Header';

const SingleBeer = () => {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    fetchSingleBeer(beerId).then((data) => setBeer(data));
  }, [beerId]);

  return (
    <>
      <Header />
      {beer && (
        <div className="beer-details">
          <img src={beer.image_url} alt={beer.name} />
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
          <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
        </div>
      )}
    </>
  );
};

export default SingleBeer;
