import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const categories = ['True Crime', 'Horror', 'Action & Adventure', 'Comic', 'Detective & Mystery', 'Fantasy', 'Historical Fiction', 'Poetry', 'Romance', 'Short Stories', 'Suspense & Thrillers', 'Biographies', 'Cookbooks', 'Essays', 'Memoirs'];

const Form = () => {
  const dispatch = useDispatch();
  const createBookAction = bindActionCreators(addBook, dispatch);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();

    const id = uuidv4();

    if (title && category && author) {
      createBookAction({
        title, author, category, id,
      });
      setTitle('');
      setCategory('');
      setAuthor('');
    }
  };

  return (
    <div className="form">
      <form onSubmit={submitBookToStore}>
        <h3>Add New Book</h3>
        <section>
          <input id="title" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} type="text" value={title} />
          <select id="category" onChange={(e) => setCategory(e.target.value)} value={category}>
            {
              categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))
            }
          </select>
          <input id="author" placeholder="Book Author" onChange={(e) => setAuthor(e.target.value)} type="text" value={author} />
          <button type="submit">Add Book</button>
        </section>
      </form>
    </div>
  )
};

export default Form;
