import { Link } from "react-router-dom";
import "./ProductListing.css";

function ProductListing() {
  const products = [
    { id: 1, name: "Smartphone", price: "$299", image: "/phone.jpg" },
    { id: 2, name: "Headphones", price: "$99", image: "/headphones.jpg" },
    { id: 3, name: "Sofa", price: "$499", image: "/sofa.jpg" },
    { id: 4, name: "Shoes", price: "$59", image: "/shoes.jpg" },
    { id: 5, name: "Watch", price: "$199", image: "/watch.jpg" },
    { id: 6, name: "Laptop", price: "$899", image: "/laptop.jpg" },
    { id: 7, name: "Camera", price: "$399", image: "/camera.jpg" },
    { id: 8, name: "Table", price: "$149", image: "/table.jpg" },
  ];

  return (
    <div className="product-listing">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <Link to={`/product/${p.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
