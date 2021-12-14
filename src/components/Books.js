import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';

const books = [
  {
    id: uuidv4(),
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: uuidv4(),
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

const Books = () => (
  <div className="container">
    <ul>
      {
        books.map((book) => (
          <Book key={book.id} category={book.category} title={book.title} author={book.author} />
        ))
      }
    </ul>
  </div>
);

export default Books;
