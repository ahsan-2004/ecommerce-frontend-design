import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home-page container">
      <div className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Desktop Ecommerce Design</span>
          <h1>Launch your shopping experience with a polished desktop layout.</h1>
          <p>
            Explore premium products, curated categories, and clean presentation
            built for desktop users.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="button button-primary">
              Shop Best Sellers
            </Link>
            <Link to="/products" className="button button-secondary">
              View Collection
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <img src="/banner.jpg" alt="Shopping highlight banner" />
        </div>
      </div>

      <section className="section-block">
        <div className="section-header">
          <span className="eyebrow">Featured categories</span>
          <h2>Browse popular categories in one place</h2>
        </div>

        <div className="category-grid">
          <div className="category-card">Electronics</div>
          <div className="category-card">Fashion</div>
          <div className="category-card">Home & Furniture</div>
          <div className="category-card">Accessories</div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-header">
          <span className="eyebrow">Featured products</span>
          <h2>Top desktop products you should not miss</h2>
        </div>

        <div className="product-grid home-products">
          <Link to="/product/1" className="product-card">
            <img src="/phone.jpg" alt="Smartphone" />
            <h3>Smartphone</h3>
            <p className="price">$299</p>
          </Link>
          <Link to="/product/2" className="product-card">
            <img src="/headphones.jpg" alt="Headphones" />
            <h3>Headphones</h3>
            <p className="price">$99</p>
          </Link>
          <Link to="/product/6" className="product-card">
            <img src="/laptop.jpg" alt="Laptop" />
            <h3>Laptop</h3>
            <p className="price">$899</p>
          </Link>
          <Link to="/product/3" className="product-card">
            <img src="/sofa.jpg" alt="Sofa" />
            <h3>Modern Sofa</h3>
            <p className="price">$499</p>
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Home;
