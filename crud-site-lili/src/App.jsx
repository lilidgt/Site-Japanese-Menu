import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './index.css';

import MenuList from './pages/MenuList';
import DishForm from './pages/DishForm';
import DishDetails from './pages/DishDetails';

function App() {
const [dishes, setDishes] = useState([]);

// fetch data from node server
  const fetchDishes = async () => {
    try {
      // reaches back
      const response = await axios.get('http://localhost:3000/dishes');
      // save sql into state
      setDishes(response.data);
    } catch (error) {
      console.error('Error fetching data from backend:', error);
      alert('Could not connect to the database.');
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <BrowserRouter>
      <div className="container">
        <header className="header">
          <h1>Lissa Deguti - Menu</h1>
          {/* navigation menu */}
          <nav className="nav-menu">
            <Link to="/" className="nav-link">Home (Menu List)</Link>
            <Link to="/add" className="nav-link">Add New Dish</Link>
          </nav>
        </header>

        <main className="menu-section">
          <Routes>
            <Route path="/" element={<MenuList dishes={dishes} setDishes={setDishes} />} />
            <Route path="/add" element={<DishForm dishes={dishes} setDishes={setDishes} />} />
            <Route path="/edit/:id" element={<DishForm dishes={dishes} setDishes={setDishes} />} />
            <Route path="/dish/:id" element={<DishDetails dishes={dishes} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;