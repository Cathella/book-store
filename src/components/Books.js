import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="container">
      <ul>
        {
          books.map((bkObj) => (
            <Book
              key={bkObj.id}
              id={bkObj.id}
              category={bkObj.category}
              title={bkObj.title}
              author={bkObj.author}
            />
          ))
        }
      </ul>
    </div>
  )
};

export default Books;
