import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function MenuList({ dishes, setDishes }) {
  const navigate = useNavigate();

  // delete from db
  const handleDeleteDish = async (id) => {
    const isConfirmed = window.confirm('Do you really want to delete this dish?');
    
    if (isConfirmed) {
      try {
        // del from back
        await axios.delete(`http://localhost:3000/dishes/${id}`);
        
        // del from screen
        const updatedDishes = dishes.filter((dish) => dish.id !== id);
        setDishes(updatedDishes);
        
      } catch (error) {
        console.error('Error deleting dish:', error);
        alert('Error deleting dish');
      }
    }
  };

  return (
    <section className="list-section">
      <h2>Our Dishes</h2>
      <div className="dish-list">
        {dishes.length === 0 ? (
          <p>No dishes available. Add some!</p>
        ) : (
          dishes.map((dish) => (
            <div key={dish.id} className="dish-card">
              <h3>{dish.name}</h3>
              <p className="price">${Number(dish.price).toFixed(2)}</p>
              
              <div className="actions">
                <button className="btn-details" onClick={() => navigate(`/dish/${dish.id}`)}>View Details</button>
                <button className="btn-edit" onClick={() => navigate(`/edit/${dish.id}`)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDeleteDish(dish.id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default MenuList;