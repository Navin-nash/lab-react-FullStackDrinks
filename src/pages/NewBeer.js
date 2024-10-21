import React, { useState } from 'react';
import { createNewBeer } from '../services/beerService';
import Header from '../components/Header';

const NewBeer = () => {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewBeer(formData).then(() => {
      alert('New beer successfully saved to database!');
    });
  };

  return (
    <>
      <Header />
      <div className="new-beer-form">
        <h2>Create a New Beer</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="text" name="tagline" placeholder="Tagline" onChange={handleChange} required />
          <textarea name="description" placeholder="Description" onChange={handleChange} required></textarea>
          <input type="text" name="first_brewed" placeholder="First Brewed" onChange={handleChange} required />
          <input type="text" name="brewers_tips" placeholder="Brewers Tips" onChange={handleChange} required />
          <input type="number" name="attenuation_level" placeholder="Attenuation Level" onChange={handleChange} required />
          <input type="text" name="contributed_by" placeholder="Contributed By" onChange={handleChange} required />
          <button type="submit">Add New Beer</button>
        </form>
      </div>
    </>
  );
};

export default NewBeer;
