import { useParams } from "react-router-dom";
import "./ProductDetails.css";

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

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p className="price">{product.price}</p>
      <p className="description">
        This is a detailed description of {product.name}. It is high quality and
        customer‑approved.
      </p>

      <button className="add-to-cart" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
