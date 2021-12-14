import React from 'react';

const Form = () => {
  return (
    <div>
      <form>
        <label htmlFor="book">
          <h3>Add New Book</h3>
        </label>
        <input name="title" placeholder="Book title" />
        <select name="category">
          <option>Category</option>
        </select>
        <button type="button">Add Book</button>
      </form>
    </div>
  )
}

export default Form;
