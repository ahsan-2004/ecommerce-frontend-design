import "./App.css";
import ProductListing from "./ProductListing";
import ProductDetails from "./ProductDetails";


function App() {
  return (
    <div>
      <header className="header">
        <div className="logo">ShopEase</div>
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button>Search</button>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
  <section className="hero">
    <div className="hero-content">
      <h1>Discover the Best Deals</h1>
      <p>Shop your favorite products at unbeatable prices.</p>
      <button className="cta-btn">Shop Now</button>
    </div>
    <div className="hero-banner">
      <img src="/banner.jpg" alt="Hero Banner" />
    </div>
  </section>

  <section className="categories">
    <h2>Featured Categories</h2>
    <div className="category-grid">
      <div className="category-card">Electronics</div>
      <div className="category-card">Fashion</div>
      <div className="category-card">Home & Furniture</div>
      <div className="category-card">Sports</div>
    </div>
  </section>
  <ProductListing />
  <ProductDetails />
</main>


      <footer className="footer">
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Help</a>
        </div>
        <p>© 2026 ShopEase. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
