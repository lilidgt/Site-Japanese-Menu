import { useParams, useNavigate } from 'react-router-dom';

function DishDetails({ dishes }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // find dish
  const dish = dishes.find((d) => d.id === parseInt(id));

  // don't exist
  if (!dish) {
    return (
      <div className="details-section">
        <h2>Dish not found!</h2>
        <button className="btn-cancel" onClick={() => navigate('/')}>Back to Menu</button>
      </div>
    );
  }

  return (
    <section className="details-section">
      <h2>Dish Details</h2>
      <div className="details-card">
        <h3>{dish.name}</h3>
        <p className="category"><strong>Category:</strong> {dish.category}</p>
        <p className="description"><strong>Description:</strong> {dish.description}</p>
        <p className="price"><strong>Price:</strong> ${Number(dish.price).toFixed(2)}</p>
        <p className="id-info"><small>Item ID: {dish.id}</small></p>
      </div>
      <button className="btn-cancel mt-15" onClick={() => navigate('/')}>Back to Menu</button>
    </section>
  );
}

export default DishDetails;