import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <Link to="/">Bookstore CMS</Link>
      <nav>
        <Link to="/">Books</Link>
        <Link to="categories">Categories</Link>
      </nav>
    </header>
  )
}

export default Nav;
