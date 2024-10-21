import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/beers">All Beers</Link>
        <Link to="/random-beer">Random Beer</Link>
        <Link to="/new-beer">New Beer</Link>
      </nav>
    </header>
  );
};

export default Header;
