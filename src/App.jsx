import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProductListing from "./ProductListing";
import ProductDetails from "./ProductDetails";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route
            path="/product/:id"
            element={<ProductDetails addToCart={addToCart} />}
          />
        </Routes>

        <div className="cart">
          <h3>Cart ({cart.length})</h3>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
