import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBooks, listBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    listBooks().then((result) => dispatch(getBooks(result)));
  }, [dispatch]);

  return (
    <div className="container">
      <ul>
        {
          books.map((book) => (
            <Book
              key={book.item_id}
              id={book.item_id}
              category={book.category}
              title={book.title}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default Books;
