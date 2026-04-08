import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function DishForm({ dishes, setDishes }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  
  const navigate = useNavigate();
  const { id } = useParams(); // gets id if exists

  // if id = editing
  useEffect(() => {
    if (id) {
      const dishToEdit = dishes.find((d) => d.id === parseInt(id));
      if (dishToEdit) {
        setName(dishToEdit.name);
        setDescription(dishToEdit.description);
        setPrice(dishToEdit.price);
      }
    }
  }, [id, dishes]);

  const handleSaveDish = (e) => {
    e.preventDefault();
    if (!name || !description || !price) return;

    if (id) {
      // update
      const updatedDishes = dishes.map((dish) => {
        if (dish.id === parseInt(id)) {
          return { ...dish, name, description, price: parseFloat(price) };
        }
        return dish;
      });
      setDishes(updatedDishes);
    } else {
      // create
      const newDish = {
        id: Date.now(),
        name,
        description,
        price: parseFloat(price)
      };
      setDishes([...dishes, newDish]);
    }

    // home after save
    navigate('/');
  };

  return (
    <section className="form-section">
      <h2>{id ? 'Edit Dish' : 'Add New Dish'}</h2>
      
      <form onSubmit={handleSaveDish} className="dish-form">
        <input type="text" placeholder="Dish Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="number" placeholder="Price (ex: 25.50)" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} />
        
        <div className="form-actions">
          <button type="submit" className="btn-submit">
            {id ? 'Update Dish' : 'Save New Dish'}
          </button>
          <button type="button" className="btn-cancel" onClick={() => navigate('/')}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

export default DishForm;