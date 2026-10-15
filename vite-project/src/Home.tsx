import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>FeelConnect</h1>
        <p>Emotion First. Connection Always.</p>
      </header>

      <main className="options-container">
        <h2>What would you like to do?</h2>

        <div className="options-grid">
          {/* Option 1: Emotion Social */}
          <div
            className="option-card emotion-card"
            onClick={() => navigate("/social")}
          >
            <div className="option-icon">💜</div>
            <h3>Emotion-Based Social Platform</h3>
            <p>
              Share how you feel, get real support and connect with people who
              truly understand you.
            </p>
            <button>Enter Social Space →</button>
          </div>

          {/* Option 2: Price Comparison */}
          <div
            className="option-card price-card"
            onClick={() => navigate("/compare")}
          >
            <div className="option-icon">💰</div>
            <h3>Product Price Comparison</h3>
            <p>
              Compare prices of products across different platforms and find
              the best deals.
            </p>
            <button>Compare Prices →</button>
          </div>
        </div>
      </main>
    </div>
  );
}