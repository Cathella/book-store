import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Book = ({
  id, category, title,
}) => (
  <li className="book">
    <p>{category}</p>
    <h3>{title}</h3>
    <Button id={id} />
  </li>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
