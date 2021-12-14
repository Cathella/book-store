import React from 'react';

const categories = ['True Crime', 'Horror', 'Action & Adventure', 'Comic', 'Detective & Mystery', 'Fantasy', 'Historical Fiction', 'Poetry', 'Romance', 'Short Stories', 'Suspense & Thrillers', 'Biographies', 'Cookbooks', 'Essays', 'Memoirs'];

const Form = () => {
  return (
    <div>
      <form>
        <label htmlFor="book">
          <h3>Add New Book</h3>
        </label>
        <input name="title" placeholder="Book title" />
        <select name="category">
          {
            categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))
          }
        </select>
        <button type="button">Add Book</button>
      </form>
    </div>
  )
}

export default Form;
