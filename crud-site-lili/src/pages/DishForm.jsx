import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function DishForm({ dishes, setDishes }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState(''); 
  
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const dishToEdit = dishes.find((d) => d.id === parseInt(id));
      if (dishToEdit) {
        setName(dishToEdit.name);
        setDescription(dishToEdit.description);
        setPrice(dishToEdit.price);
        setCategory(dishToEdit.category || ''); 
      }
    }
  }, [id, dishes]);

  const handleSaveDish = async (e) => {
    e.preventDefault();
    
    if (!name || !description || !price || !category) {
        alert('Please fill all fields!');
        return;
    }

    const dishData = {
        name,
        description,
        price: parseFloat(price),
        category,
        is_available: true
    };

    try {
        if (id) {
          // update
          await axios.put(`http://localhost:3000/dishes/${id}`, dishData);
          
          const updatedDishes = dishes.map((dish) => {
            if (dish.id === parseInt(id)) {
              return { ...dish, ...dishData };
            }
            return dish;
          });
          setDishes(updatedDishes);
          
        } else {
          // create
          const response = await axios.post('http://localhost:3000/dishes', dishData);
          
          const newDish = { id: response.data.id, ...dishData };
          setDishes([...dishes, newDish]);
        }
        
        navigate('/');
    } catch (error) {
        console.error('Error saving dish:', error);
        alert('Error saving to database!');
    }
  };

  return (
    <section className="form-section">
      <h2>{id ? 'Edit Dish' : 'Add New Dish'}</h2>
      
      <form onSubmit={handleSaveDish} className="dish-form">
        <input type="text" placeholder="Dish Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Category (e.g. Main Course, Appetizer)" value={category} onChange={(e) => setCategory(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="number" placeholder="Price (25.50)" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} />
        
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