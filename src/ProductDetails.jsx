import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: "$299",
    image: "/phone.jpg",
    sizes: ["64GB", "128GB", "256GB"],
    colors: ["Black", "Silver", "Blue"],
    description: "A sleek smartphone built for productivity and everyday use. Advanced camera system with night mode, fast processor, and all-day battery.",
    rating: 4.5,
    reviews: 128,
    supplier: "TechSupply Co.",
    country: "🇺🇸 USA",
    verified: true,
  },
  {
    id: 2,
    name: "Headphones",
    price: "$99",
    image: "/headphones.jpg",
    sizes: ["Standard"],
    colors: ["Black", "White"],
    description: "Comfortable headphones with premium sound and modern design. Active noise cancellation and 30-hour battery life.",
    rating: 4.8,
    reviews: 256,
    supplier: "AudioTech Inc.",
    country: "🇯🇵 Japan",
    verified: true,
  },
  {
    id: 3,
    name: "Sofa",
    price: "$499",
    image: "/sofa.jpg",
    sizes: ["2-seater", "3-seater"],
    colors: ["Gray", "Blue", "Brown"],
    description: "A stylish sofa with premium upholstery and comfortable cushioning. Perfect for modern living rooms.",
    rating: 4.2,
    reviews: 89,
    supplier: "Furniture Plus",
    country: "🇩🇪 Germany",
    verified: true,
  },
  {
    id: 4,
    name: "Shoes",
    price: "$59",
    image: "/shoes.jpg",
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    colors: ["Black", "White", "Navy"],
    description: "Modern running shoes designed for everyday comfort and style. Lightweight foam sole for all-day wear.",
    rating: 4.6,
    reviews: 342,
    supplier: "StyleWear Ltd.",
    country: "🇮🇳 India",
    verified: true,
  },
  {
    id: 5,
    name: "Watch",
    price: "$199",
    image: "/watch.jpg",
    sizes: ["One Size"],
    colors: ["Silver", "Gold", "Black"],
    description: "A polished smartwatch with fitness tracking, heart rate monitor, and stylish design.",
    rating: 4.7,
    reviews: 197,
    supplier: "WatchCorp",
    country: "🇨🇭 Switzerland",
    verified: true,
  },
  {
    id: 6,
    name: "Laptop",
    price: "$899",
    image: "/laptop.jpg",
    sizes: ["13-inch", "15-inch"],
    colors: ["Silver", "Space Gray"],
    description: "Professional laptop with powerful processor, long battery life, and premium display. Ideal for work and content creation.",
    rating: 4.9,
    reviews: 501,
    supplier: "ComputeHub",
    country: "🇺🇸 USA",
    verified: true,
  },
  {
    id: 7,
    name: "Camera",
    price: "$399",
    image: "/camera.jpg",
    sizes: ["Standard"],
    colors: ["Black"],
    description: "Professional digital camera with 4K video recording, 20MP sensor, and advanced autofocus.",
    rating: 4.4,
    reviews: 134,
    supplier: "CameraWorld",
    country: "🇯🇵 Japan",
    verified: true,
  },
  {
    id: 8,
    name: "Table",
    price: "$149",
    image: "/table.jpg",
    sizes: ["Small (80cm)", "Large (120cm)"],
    colors: ["Oak", "Walnut", "White"],
    description: "Solid wood table with clean minimalist design. Perfect for dining or workspace setup.",
    rating: 4.3,
    reviews: 76,
    supplier: "HomeFurniture",
    country: "🇮🇳 India",
    verified: true,
  },
];

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id, 10));
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] ?? "One Size"
  );
  const [statusMessage, setStatusMessage] = useState("");

  if (!product) {
    return (
      <section className="product-details-page container">
        <h1>Product not found</h1>
      </section>
    );
  }

  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    addToCart({ ...product, selectedSize });
    setStatusMessage(`${product.name} (${selectedSize}) was added to your cart.`);
    window.setTimeout(() => setStatusMessage(""), 3000);
  };

  const renderStars = (rating) => {
    return "⭐".repeat(Math.floor(rating));
  };

  return (
    <section className="product-details-page container">
      <div className="page-heading">
        <span className="eyebrow">Product details</span>
        <h1>{product.name}</h1>
      </div>

      <div className="details-grid">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-copy">
          <h2>{product.name}</h2>
          <div className="product-meta">
            <div className="rating-section">
              <span className="stars">{renderStars(product.rating)}</span>
              <span className="rating-count">({product.reviews} reviews)</span>
            </div>
            <p className="price">{product.price}</p>
          </div>

          <p className="description">{product.description}</p>

          <div className="form-row">
            <label htmlFor="size-select">Select Size</label>
            <select
              id="size-select"
              value={selectedSize}
              onChange={(event) => setSelectedSize(event.target.value)}
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <button className="button button-primary" onClick={handleAddToCart}>
            Send Inquiry
          </button>
          {statusMessage && <p className="status-message">{statusMessage}</p>}

          <div className="supplier-section">
            <h4>Supplier</h4>
            <div className="supplier-info">
              <p className="supplier-name">{product.supplier}</p>
              <p className="supplier-country">{product.country} {product.verified && "✓ Verified"}</p>
              <a href="#" className="supplier-link">View Supplier Profile</a>
            </div>
          </div>
        </div>
      </div>

      <section className="review-section">
        <div className="section-header">
          <h2>Customer Reviews</h2>
        </div>
        <div className="review-list">
          <article className="review-card">
            <div className="review-header">
              <strong>Excellent product!</strong>
              <span className="review-stars">⭐⭐⭐⭐⭐</span>
            </div>
            <p>"Very responsive and high quality. Fast delivery and great packaging. Would buy again!"</p>
            <span className="review-author">— Alice M.</span>
          </article>
          <article className="review-card">
            <div className="review-header">
              <strong>Great value</strong>
              <span className="review-stars">⭐⭐⭐⭐</span>
            </div>
            <p>"The product details page is clean and easy to read on a laptop screen. Delivery was fast."</p>
            <span className="review-author">— Marcus T.</span>
          </article>
          <article className="review-card">
            <div className="review-header">
              <strong>Highly recommend</strong>
              <span className="review-stars">⭐⭐⭐⭐⭐</span>
            </div>
            <p>"Perfect product at great price. Seller communication was excellent throughout the process."</p>
            <span className="review-author">— Sarah L.</span>
          </article>
        </div>
      </section>

      <section className="related-section">
        <div className="section-header">
          <h2>Similar Products</h2>
        </div>
        <div className="related-grid">
          {relatedProducts.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="related-card">
              <img src={item.image} alt={item.name} />
              <div className="related-copy">
                <h3>{item.name}</h3>
                <div className="related-rating">
                  <span>{renderStars(item.rating)}</span>
                  <span>({item.reviews})</span>
                </div>
                <p className="price">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}

export default ProductDetails;
