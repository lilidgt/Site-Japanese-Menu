import { useNavigate } from 'react-router-dom';

function MenuList({ dishes, setDishes }) {
  const navigate = useNavigate();

  const handleDeleteDish = (id) => {
    const updatedDishes = dishes.filter((dish) => dish.id !== id);
    setDishes(updatedDishes);
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
              <p className="price">${dish.price.toFixed(2)}</p>
              
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