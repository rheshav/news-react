import './App.css';
import AdminPage from './News/AdminPage';
import NewsList from './News/NewsList';
import SearchBar from './News/SearchBar';
import { Routes, Route, Link } from 'react-router-dom';
import Subscribe from './News/Subscribe';

function App() {
  return (
    <div>
      <SearchBar />
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" index element={<NewsList />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
    </div>
  );
}

export default App;
