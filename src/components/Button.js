import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Button = ({ id }) => {
  const dispatch = useDispatch();

  const handleBookDelete = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div>
      <button type="button" onClick={() => handleBookDelete(id)}>Remove</button>
    </div>
  );
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Button;
