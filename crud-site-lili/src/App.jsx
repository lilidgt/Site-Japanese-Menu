import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';

import MenuList from './pages/MenuList';
import DishForm from './pages/DishForm';
import DishDetails from './pages/DishDetails';

function App() {
  const [dishes, setDishes] = useState([
    { id: 1, name: 'Shoyu Ramen', description: 'Soy sauce based broth, chashu pork, marinated egg, and green onions.', price: 45.90 },
    { id: 2, name: 'Spicy Miso Ramen', description: 'Spicy miso broth, ground pork, bean sprouts, and corn.', price: 48.50 }
  ]);

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