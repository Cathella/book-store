import React from 'react';

const Book = ({ category, title, author }) => {
  return (
    <li>
      <p>{category}</p>
      <h3>{title}</h3>
      <span>{author}</span>
      <div>
        <button type="button">Remove</button>
      </div>
    </li>
  )
}

export default Book;
