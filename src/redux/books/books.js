const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
})

export const addBookToApi = (payload) => async (dispatch) => {
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/X2VIOoFyC20f0wsfi5oT/books';
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    dispatch(addBook(payload));
  }
};

export const removeBookFromApi = (payload) => async (dispatch) => {
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/X2VIOoFyC20f0wsfi5oT/books/${payload}`;
  const response = await fetch(url, {
    method: 'DELETE',
  });

  if (response.ok) {
    dispatch(removeBook(payload));
  }
};

export const listBooks = async () => {
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/X2VIOoFyC20f0wsfi5oT/books';
  const response = await fetch(url);
  const books = await response.json();
  const newBooks = Object.keys(books).map((key) => ({
    ...books[key][0],
    item_id: key,
  }))

  return Object.values(newBooks);
} 

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
