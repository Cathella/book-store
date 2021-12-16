import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../redux/books/books';

const Button = ({ item_id }) => {
  const dispatch = useDispatch();

  const handleBookDelete = (id) => {
    dispatch(removeBookFromApi(id));
  };

  return (
    <div>
      <button type="button" onClick={() => handleBookDelete(item_id)}>Remove</button>
    </div>
  );
};

Button.propTypes = {
  item_id: PropTypes.string.isRequired,
};

export default Button;
