import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBooks, listBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    listBooks().then((result) => dispatch(getBooks(result)));
  }, []);

  return (
    <div className="container">
      <ul>
        {
          books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              category={book.category}
              title={book.title}
              // author={book.author}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default Books;
