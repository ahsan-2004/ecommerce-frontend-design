import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductListing.css";

function ProductListing() {
  const products = [
    { id: 1, name: "Smartphone", price: "$299", image: "/phone.jpg", rating: 4.5, reviews: 128, shipping: "Free" },
    { id: 2, name: "Headphones", price: "$99", image: "/headphones.jpg", rating: 4.8, reviews: 256, shipping: "Free" },
    { id: 3, name: "Sofa", price: "$499", image: "/sofa.jpg", rating: 4.2, reviews: 89, shipping: "Free" },
    { id: 4, name: "Shoes", price: "$59", image: "/shoes.jpg", rating: 4.6, reviews: 342, shipping: "Free" },
    { id: 5, name: "Watch", price: "$199", image: "/watch.jpg", rating: 4.7, reviews: 197, shipping: "Free" },
    { id: 6, name: "Laptop", price: "$899", image: "/laptop.jpg", rating: 4.9, reviews: 501, shipping: "Free" },
    { id: 7, name: "Camera", price: "$399", image: "/camera.jpg", rating: 4.4, reviews: 134, shipping: "Free" },
    { id: 8, name: "Table", price: "$149", image: "/table.jpg", rating: 4.3, reviews: 76, shipping: "Free" },
  ];

  const [visibleCount, setVisibleCount] = useState(9);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const visibleProducts = products.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((count) => Math.min(count + 3, products.length));
  };

  const renderStars = (rating) => {
    return "⭐".repeat(Math.floor(rating));
  };

  return (
    <section className="product-listing container">
      <div className="listing-grid">
        <aside className="filters-sidebar">
          <h3>Filters</h3>
          
          <div className="filter-group">
            <h4>Categories</h4>
            <label>
              <input type="radio" name="category" defaultChecked /> All Products
            </label>
            <label>
              <input type="radio" name="category" /> Electronics
            </label>
            <label>
              <input type="radio" name="category" /> Fashion
            </label>
            <label>
              <input type="radio" name="category" /> Home
            </label>
          </div>

          <div className="filter-group">
            <h4>Price Range</h4>
            <div className="price-inputs">
              <input type="number" placeholder="Min" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
              <span>-</span>
              <input type="number" placeholder="Max" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
            </div>
          </div>

          <div className="filter-group">
            <h4>Rating</h4>
            <label><input type="checkbox" /> 5 Stars (120)</label>
            <label><input type="checkbox" /> 4+ Stars (456)</label>
            <label><input type="checkbox" /> 3+ Stars (891)</label>
          </div>

          <div className="filter-group">
            <h4>Shipping</h4>
            <label><input type="checkbox" defaultChecked /> Free Shipping</label>
            <label><input type="checkbox" /> Paid Shipping</label>
          </div>
        </aside>

        <div className="products-section">
          <div className="page-heading">
            <h1>Products</h1>
            <span className="result-count">Showing {visibleCount} of {products.length}</span>
          </div>

          <div className="product-grid">
            {visibleProducts.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.name} />
                  <span className="shipping-badge">{product.shipping} shipping</span>
                </div>
                <div className="product-copy">
                  <h3>{product.name}</h3>
                  <div className="product-rating">
                    <span className="stars">{renderStars(product.rating)}</span>
                    <span className="rating-text">({product.reviews} reviews)</span>
                  </div>
                  <p className="price">{product.price}</p>
                </div>
                <Link to={`/product/${product.id}`} className="button button-primary">
                  View Details
                </Link>
              </article>
            ))}
          </div>

          {visibleCount < products.length && (
            <div className="load-more-wrap">
              <button className="button button-secondary" onClick={handleLoadMore}>
                Load More Products
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductListing;
