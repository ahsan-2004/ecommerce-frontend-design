import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import ProductListing from "./ProductListing";
import ProductDetails from "./ProductDetails";
import "./App.css";

function Header({ cartCount }) {
  return (
    <header className="site-header">
      <div className="header-left">
        <div className="logo">🛍️ Ecom</div>
      </div>

      <form className="search-form" onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          aria-label="Search products"
          placeholder="Search products..."
        />
        <button type="submit" className="search-btn">Search</button>
      </form>

      <div className="header-right">
        <Link to="/" className="header-icon" title="Home">🏠</Link>
        <Link to="/products" className="header-icon" title="Products">📦</Link>
        <Link to="/cart" className="header-icon cart-icon-link">
          🛒 <span className="cart-badge">{cartCount}</span>
        </Link>
        <div className="header-icon" title="Account">👤</div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="#">Help Center</a>
          <a href="#">Shipping Info</a>
          <a href="#">Returns</a>
        </div>
        <div>
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="#">Contact Us</a>
          <a href="#">Support</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Ecommerce Frontend Design</p>
        <div className="footer-socials">Facebook • Instagram • Twitter</div>
      </div>
    </footer>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div className="app-shell">
        <Header cartCount={cart.length} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
            <Route
              path="/cart"
              element={
                <section className="cart-page container">
                  <div className="page-heading">
                    <h1>Shopping Cart</h1>
                  </div>
                  {cart.length === 0 ? (
                    <p className="empty-state">Your cart is empty. Start shopping!</p>
                  ) : (
                    <div className="cart-grid">
                      <div className="cart-items">
                        {cart.map((item, index) => (
                          <div key={index} className="cart-item">
                            <div className="item-image">
                              <img src={item.image} alt={item.name} />
                            </div>
                            <div className="item-details">
                              <h3>{item.name}</h3>
                              <p className="item-size">Size: {item.selectedSize}</p>
                              <p className="item-price">{item.price}</p>
                            </div>
                            <div className="item-quantity">
                              <label>Qty:</label>
                              <input type="number" defaultValue="1" min="1" />
                            </div>
                            <div className="item-total">{item.price}</div>
                          </div>
                        ))}
                      </div>
                      <div className="cart-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-row">
                          <span>Subtotal:</span>
                          <span>${(cart.length * 100).toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                          <span>Shipping:</span>
                          <span>Free</span>
                        </div>
                        <div className="summary-row total">
                          <span>Total:</span>
                          <span>${(cart.length * 100).toFixed(2)}</span>
                        </div>
                        <button className="button button-primary checkout-btn">
                          Checkout ({cart.length} items)
                        </button>
                      </div>
                    </div>
                  )}
                </section>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
