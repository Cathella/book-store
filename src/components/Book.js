import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Button from './Button';

const percentage = 70;

const Book = ({
  id, category, title,
}) => (
  <li className="book">
    <div>
      <p className="book-category">{category}</p>
      <h3 className="book-title">{title}</h3>
      <span className="book-author">Nakitto Catherine</span>
      <div className="actions-container">
        <button type="button">Comments</button>
        <Button id={id} />
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="section-two">
      <div className="percentage-sec">
        <div style={{ width: 70, height: 70 }}>
          <CircularProgressbar value={percentage} />
        </div>
        <div>
          <h2 className="percent-complete">70%</h2>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div>
        <p className="current-chapter">Current Chapter</p>
        <p className="chapter-title">Chapter 17</p>
        <button className="update-btn">Update Progress</button>
      </div>
    </div>
  </li>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
