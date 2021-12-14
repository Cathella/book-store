import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <header>
    <nav>
      <Link to="/" className="logo">Bookstore CMS</Link>
      <Link to="/">Books</Link>
      <Link to="categories">Categories</Link>
    </nav>
  </header>
);

export default Nav;
