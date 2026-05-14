import "./App.css";

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
        <h1>Welcome to ShopEase</h1>
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
