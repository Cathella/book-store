import React from 'react';

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
        <button type="button">Add Book</button>
      </section>
    </form>
  </div>
);

export default Form;
