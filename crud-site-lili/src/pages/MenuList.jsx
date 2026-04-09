import { useState } from 'react'; // NOVO: Precisamos do useState aqui agora
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function MenuList({ dishes, setDishes }) {
  const navigate = useNavigate();

  // pages
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  // math :PP
  const indexOfLastDish = currentPage * itemsPerPage;
  const indexOfFirstDish = indexOfLastDish - itemsPerPage;
  
  // cut list
  const currentDishes = dishes.slice(indexOfFirstDish, indexOfLastDish);

  // total pages (up)
  const totalPages = Math.ceil(dishes.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleDeleteDish = async (id) => {
    const isConfirmed = window.confirm('Do you really want to delete this dish?');
    
    if (isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/dishes/${id}`);
        
        const updatedDishes = dishes.filter((dish) => dish.id !== id);
        setDishes(updatedDishes);
        
        // if delete only dish from a page, back to old page
        if (currentDishes.length === 1 && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
        
      } catch (error) {
        console.error('Error deleting dish:', error);
        alert('Error deleting dish');
      }
    }
  };

  return (
    <section className="list-section">
      <h2> My (Favs) Dishes</h2>
      <div className="dish-list">
        {dishes.length === 0 ? (
          <p>No dishes available. Add some!</p>
        ) : (
          currentDishes.map((dish) => (
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

      {/* page buttons */}
      {dishes.length > itemsPerPage && (
        <div className="pagination">
          <button 
            onClick={handlePrevPage} 
            disabled={currentPage === 1}
            className="btn-page"
          >
            Previous
          </button>
          
          <span className="page-info">
            Page {currentPage} of {totalPages}
          </span>
          
          <button 
            onClick={handleNextPage} 
            disabled={currentPage === totalPages}
            className="btn-page"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}

export default MenuList;