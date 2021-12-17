/* eslint-disable camelcase */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookToApi } from '../redux/books/books';

const categories = ['True Crime', 'Horror', 'Action & Adventure', 'Comic', 'Detective & Mystery', 'Fantasy', 'Historical Fiction', 'Poetry', 'Romance', 'Short Stories', 'Suspense & Thrillers', 'Biographies', 'Cookbooks', 'Essays', 'Memoirs'];

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();

    const item_id = uuidv4();

    const newBook = {
      item_id, title, category,
    };
    dispatch(addBookToApi(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <div className="container">
      <form onSubmit={submitBookToStore}>
        <h3>Add New Book</h3>
        <section>
          <input id="title" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} type="text" value={title} />
          <select id="category" onChange={(e) => setCategory(e.target.value)} value={category}>
            <option>Category</option>
            {
              categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))
            }
          </select>
          <button type="submit" className="add-btn">Add Book</button>
        </section>
      </form>
    </div>
  );
};

export default Form;
