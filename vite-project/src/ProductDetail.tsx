import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetail.css";

export default function ProductDetail() {
  const navigate = useNavigate();
  const { id: _id } = useParams();

  // Temporary product data (baad mein dynamic bana sakte hain)
  const product = {
    id: 4,
    name: "The Psychology of Money",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600",
    category: "Books",
    bestPrice: 275,
    description:
      "Timeless lessons on wealth, greed, and happiness. This book teaches you how to think about money in a smarter way.",
    prices: [
      { platform: "Flipkart", price: 275, logo: "🛍️" },
      { platform: "Amazon", price: 299, logo: "🛒" },
      { platform: "Bookmark", price: 320, logo: "📚" },
    ],
  };

  return (
    <div className="product-detail-page">
      {/* Header */}
      <header className="detail-header">
        <button className="back-btn" onClick={() => navigate("/compare")}>
          ←
        </button>
        <h1>Product Details</h1>
        <div></div>
      </header>

      {/* Product Image */}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      {/* Product Info */}
      <div className="product-info">
        <span className="category">{product.category}</span>
        <h2>{product.name}</h2>
        <p className="best-price">
          Best Price: <strong>₹{product.bestPrice}</strong>
        </p>
        <p className="description">{product.description}</p>
      </div>

      {/* Price Options */}
      <div className="price-section">
        <h3>Available on</h3>

        {product.prices.map((item) => (
          <div
            key={item.platform}
            className={`price-card ${
              item.price === product.bestPrice ? "best" : ""
            }`}
          >
            <div className="left">
              <span className="logo">{item.logo}</span>
              <div>
                <strong>{item.platform}</strong>
                {item.price === product.bestPrice && (
                  <span className="best-tag">Best Price</span>
                )}
              </div>
            </div>

            <div className="right">
              <span className="price">₹{item.price}</span>
              <button className="order-btn">Order Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Order Bar */}
      <div className="bottom-bar">
        <div className="price-info">
          <span>Best Price</span>
          <strong>₹{product.bestPrice}</strong>
        </div>
        <button className="main-order-btn">Order Now →</button>
      </div>
    </div>
  );
}