import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import BookList from './pages/BookList';
import Categories from './pages/Categories';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
