import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const dispatch = useDispatch();

const submitBookToStore = () => {
  const newBook = {
    id, title, author,
  }

  dispatch(addBook(newBook));
}

const categories = ['True Crime', 'Horror', 'Action & Adventure', 'Comic', 'Detective & Mystery', 'Fantasy', 'Historical Fiction', 'Poetry', 'Romance', 'Short Stories', 'Suspense & Thrillers', 'Biographies', 'Cookbooks', 'Essays', 'Memoirs'];

const Form = () => (
  <div className="form">
    <form>
      <h3>Add New Book</h3>
      <section>
        <input name="title" placeholder="Book title" />
        <select name="category">
          {
            categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))
          }
        </select>
        <button onClick={submitBookToStore} type="button">Add Book</button>
      </section>
    </form>
  </div>
);

export default Form;
