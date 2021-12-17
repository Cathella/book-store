import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Book = ({
  id, category, title,
}) => (
  <li className="book">
    <p className="book-category">{category}</p>
    <h3 className="book-title">{title}</h3>
    <span className="book-author">Nakitto Catherine</span>
    <div className="actions-container">
      <button type="button">Comments</button>
      <Button id={id} />
      <button type="button">Edit</button>
    </div>
  </li>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
