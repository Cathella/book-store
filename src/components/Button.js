import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../redux/books/books';

const Button = ({ id }) => {
  const dispatch = useDispatch();

  const handleBookDelete = (id) => {
    dispatch(removeBookFromApi(id));
  };

  return (
    <button className="remove-action" type="button" onClick={() => handleBookDelete(id)}>Remove</button>
  );
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Button;
