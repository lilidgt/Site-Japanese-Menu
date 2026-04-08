import { useState } from 'react';
import './index.css';

function App() {
  // mock data
  const [dishes, setDishes] = useState([
    { id: 1, name: 'Shoyu Ramen', description: 'Soy sauce based broth, chashu pork, marinated egg, and green onions.', price: 45.90 },
    { id: 2, name: 'Spicy Miso Ramen', description: 'Spicy miso broth, ground pork, bean sprouts, and corn.', price: 48.50 },
    { id: 3, name: 'Pork Gyoza', description: '6 pieces of pan-fried dumplings filled with pork and cabbage.', price: 28.00 }
  ]);

  // form inputs
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  // handle form submission
  const handleAddDish = (e) => {
    e.preventDefault(); // no reloading

    if (!name || !description || !price) return; // not empty

    // cr new dish objct
    const newDish = {
      id: Date.now(), // random id (for now :PPP)
      name: name,
      description: description,
      price: parseFloat(price)
    };

    // upd dishes array with new dish
    setDishes([...dishes, newDish]);

    // clear the inputs
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Lissa Deguti's Menu</h1>
      </header>

      <main className="menu-section">

        {/* add new dish form */}
        <section className="form-section">
          <h2>Add New Dish</h2>
          <form onSubmit={handleAddDish} className="dish-form">
            <input 
              type="text" 
              placeholder="Dish Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Description" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input 
              type="number" 
              placeholder="Price (ex: 25.50)" 
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit" className="btn-submit">Add Dish</button>
          </form>
        </section>

        <hr className="divider" />
    
        {/* dish list */}
        <section className="list-section">
          <h2>Fav Dishes</h2>
          <div className="dish-list">
            {dishes.map((dish) => (
              <div key={dish.id} className="dish-card">
                <h3>{dish.name}</h3>
                <p className="description">{dish.description}</p>
                <p className="price">${dish.price.toFixed(2)}</p>
                
                <div className="actions">
                  <button className="btn-edit">Edit</button>
                  <button className="btn-delete">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;