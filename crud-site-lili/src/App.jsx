import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <h1>Japanese Menu</h1>
        <p>by Lissa Deguti</p>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<h2>1. List View (Coming soon...)</h2>} />
          <Route path="/create" element={<h2>2. Create View (Coming soon...)</h2>} />
          <Route path="/dish/:id" element={<h2>3. Dish Details (Coming soon...)</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;