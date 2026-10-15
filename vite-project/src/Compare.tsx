import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Compare.css";

interface PriceOption {
  platform: string;
  price: number;
  logo: string;
  link: string;
}

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  prices: PriceOption[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Apple AirPods Pro (2nd Gen)",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400",
    category: "Electronics",
    prices: [
      { platform: "Amazon", price: 19990, logo: "🛒", link: "#" },
      { platform: "Flipkart", price: 18999, logo: "🛍️", link: "#" },
      { platform: "Croma", price: 20990, logo: "🎧", link: "#" },
    ],
  },
  {
    id: 2,
    name: "Nike Air Force 1 '07",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
    category: "Fashion",
    prices: [
      { platform: "Amazon", price: 7495, logo: "🛒", link: "#" },
      { platform: "Myntra", price: 6999, logo: "👕", link: "#" },
      { platform: "Ajio", price: 7299, logo: "👟", link: "#" },
    ],
  },
  {
    id: 3,
    name: "Samsung Galaxy Watch 6",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400",
    category: "Electronics",
    prices: [
      { platform: "Amazon", price: 26990, logo: "🛒", link: "#" },
      { platform: "Flipkart", price: 24999, logo: "🛍️", link: "#" },
      { platform: "Samsung", price: 27990, logo: "📱", link: "#" },
    ],
  },
  {
    id: 4,
    name: "The Psychology of Money",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    category: "Books",
    prices: [
      { platform: "Amazon", price: 299, logo: "🛒", link: "#" },
      { platform: "Flipkart", price: 275, logo: "🛍️", link: "#" },
      { platform: "Bookmark", price: 320, logo: "📚", link: "#" },
    ],
  },
];

export default function Compare() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Electronics", "Fashion", "Books"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getBestPrice = (prices: PriceOption[]) => {
    return Math.min(...prices.map((p) => p.price));
  };

  return (
    <div className="compare-page">
      {/* Header */}
      <header className="compare-header">
        <button className="back-btn" onClick={() => navigate("/home")}>
          ←
        </button>
        <h1>Price Compare</h1>
        <div className="header-right">💰</div>
      </header>

      {/* Search */}
      <div className="search-section">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="products-list">
        {filteredProducts.length === 0 ? (
          <p className="no-results">No products found</p>
        ) : (
          filteredProducts.map((product) => {
            const bestPrice = getBestPrice(product.prices);

            return (
              <div key={product.id} className="product-card">
                <div className="product-top">
                  <img src={product.image} alt={product.name} />
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <span className="category-tag">{product.category}</span>
                    <p className="best-price">
                      Best Price: <strong>₹{bestPrice.toLocaleString()}</strong>
                    </p>
                  </div>
                </div>

                <div className="price-options">
                  {product.prices
                    .sort((a, b) => a.price - b.price)
                    .map((option) => (
                      <div
                        key={option.platform}
                        className={`price-row ${
                          option.price === bestPrice ? "best" : ""
                        }`}
                      >
                        <div className="platform">
                          <span className="platform-logo">{option.logo}</span>
                          <span>{option.platform}</span>
                        </div>
                        <div className="price-action">
                          <span className="price">
                            ₹{option.price.toLocaleString()}
                          </span>
                          {option.price === bestPrice && (
                            <span className="best-badge">Best</span>
                          )}
                          {/* ▼▼▼ YEH IMPORTANT CHANGE HAI ▼▼▼ */}
                          <button
                            className="buy-btn"
                            onClick={() => navigate(`/product/${product.id}`)}
                          >
                            View
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}