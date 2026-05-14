import "./ProductDetails.css";

function ProductDetails() {
  return (
    <div className="product-details">
      <div className="product-info">
        <img src="/phone.jpg" alt="Smartphone" className="product-image" />
        <div className="details">
          <h2>Smartphone</h2>
          <p className="price">$299</p>
          <p className="description">
            A high‑performance smartphone with excellent camera and battery life.
          </p>

          <label htmlFor="size">Choose Size:</label>
          <select id="size">
            <option>64GB</option>
            <option>128GB</option>
            <option>256GB</option>
          </select>

          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>

      <div className="reviews">
        <h3>Customer Reviews</h3>
        <p>⭐ ⭐ ⭐ ⭐ ☆ — Great phone, worth the price!</p>
        <p>⭐ ⭐ ⭐ ⭐ ⭐ — Excellent performance and battery.</p>
      </div>

      <div className="related">
        <h3>Related Products</h3>
        <ul>
          <li>Headphones</li>
          <li>Laptop</li>
          <li>Smartwatch</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetails;
