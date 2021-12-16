import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../redux/books/books';

const Button = ({ id }) => {
  const dispatch = useDispatch();

  const handleBookDelete = (bookId) => {
    dispatch(removeBookFromApi(bookId));
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
