import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="profile-page">
      {/* Header */}
      <header className="profile-header">
        <button className="back-btn" onClick={() => navigate("/social")}>
          ←
        </button>
        <h1>Profile</h1>
        <button className="settings-btn">⚙️</button>
      </header>

      {/* Profile Card */}
      <div className="profile-card">
        <div className="avatar-section">
          <img
            src="https://i.pravatar.cc/150?img=5"
            alt="Profile"
            className="profile-avatar"
          />
          <div className="mood-badge">😊 Calm</div>
        </div>

        <h2 className="user-name">Riya Sharma</h2>
        <p className="user-bio">Student • Trying to feel better every day 💜</p>

        {/* Emotion Passport */}
        <div className="emotion-passport">
          <div className="passport-header">
            <span>🧬</span>
            <h3>Emotion Passport</h3>
          </div>

          <div className="passport-stats">
            <div className="stat">
              <span className="stat-icon">❤️</span>
              <div>
                <strong>248</strong>
                <p>Helped People</p>
              </div>
            </div>

            <div className="stat">
              <span className="stat-icon">🤝</span>
              <div>
                <strong>64</strong>
                <p>Meaningful Chats</p>
              </div>
            </div>

            <div className="stat">
              <span className="stat-icon">🌳</span>
              <div>
                <strong>Level 8</strong>
                <p>Kindness Level</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kindness Tree */}
      <div className="section-card">
        <div className="section-header">
          <span>🌳</span>
          <h3>Kindness Tree</h3>
        </div>
        <div className="tree-visual">
          <div className="tree">🌸🌿🌳🌱</div>
          <p>Your tree is growing with every support you give!</p>
        </div>
      </div>

      {/* Badges */}
      <div className="section-card">
        <div className="section-header">
          <span>🏅</span>
          <h3>Badges</h3>
        </div>
        <div className="badges">
          <div className="badge">
            <span>🎧</span>
            <p>Great Listener</p>
          </div>
          <div className="badge">
            <span>💖</span>
            <p>Hope Giver</p>
          </div>
          <div className="badge">
            <span>🌙</span>
            <p>Night Owl</p>
          </div>
          <div className="badge">
            <span>🤝</span>
            <p>Kind Human</p>
          </div>
        </div>
      </div>

      {/* Current Mood */}
      <div className="section-card">
        <div className="section-header">
          <span>😊</span>
          <h3>Current Mood</h3>
        </div>
        <div className="mood-selector">
          {["😊 Calm", "😔 Low", "😰 Anxious", "😡 Frustrated", "🥰 Happy"].map(
            (mood) => (
              <button key={mood} className={mood.includes("Calm") ? "active" : ""}>
                {mood}
              </button>
            )
          )}
        </div>
      </div>

      {/* Menu Options */}
      <div className="menu-list">
        <button className="menu-item">
          <span>🧬</span> Emotion DNA History
        </button>
        <button className="menu-item">
          <span>📊</span> Weekly Insights
        </button>
        <button className="menu-item">
          <span>🔒</span> Privacy & Safety
        </button>
        <button className="menu-item">
          <span>🌙</span> Dark Mode
        </button>
        <button className="menu-item logout" onClick={() => navigate("/login")}>
          <span>🚪</span> Logout
        </button>
      </div>

      {/* Bottom Nav */}
      <nav className="bottom-nav">
        <button onClick={() => navigate("/social")}>
          <span>🏠</span>
          <small>Home</small>
        </button>
        <button>
          <span>➕</span>
          <small>Create</small>
        </button>
        <button>
          <span>💬</span>
          <small>Connect</small>
        </button>
        <button>
          <span>🌱</span>
          <small>Journey</small>
        </button>
        <button className="active">
          <span>👤</span>
          <small>Profile</small>
        </button>
      </nav>
    </div>
  );
}