import "./ProductListing.css";

function ProductListing() {
  const products = [
    { id: 1, name: "Smartphone", price: "$299", image: "/phone.jpg" },
    { id: 2, name: "Headphones", price: "$99", image: "/headphones.jpg" },
    { id: 3, name: "Sofa", price: "$499", image: "/sofa.jpg" },
    { id: 4, name: "Shoes", price: "$59", image: "/shoes.jpg" },
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
            <button>Buy Now</button>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button>Load More</button>
      </div>
    </div>
  );
}

export default ProductListing;
