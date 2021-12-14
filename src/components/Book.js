import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ category, title, author }) => (
  <li className="book">
    <p>{category}</p>
    <h3>{title}</h3>
    <span>{author}</span>
    <div>
      <button type="button">Remove</button>
    </div>
  </li>
);

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
