import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Social.css";

interface Post {
  id: number;
  user: string;
  role: string;
  time: string;
  avatar: string;
  emotion: string;
  emotionEmoji: string;
  caption: string;
  need: string;
  stress: number;
  hope: number;
  energy: number;
  support: number;
  hug: number;
  stayStrong: number;
  understand: number;
  share: number;
  peopleSupported: number;
  newToday: number;
  bgColor: string;
}

const posts: Post[] = [
  {
    id: 1,
    user: "Riya",
    role: "Student",
    time: "2h",
    avatar: "https://i.pravatar.cc/150?img=5",
    emotion: "Anxious",
    emotionEmoji: "😰",
    caption:
      "I have an exam tomorrow and I haven't prepared well. Can't stop overthinking.",
    need: "Someone to Listen",
    stress: 82,
    hope: 38,
    energy: 26,
    support: 128,
    hug: 76,
    stayStrong: 54,
    understand: 91,
    share: 32,
    peopleSupported: 182,
    newToday: 12,
    bgColor: "#f3e8ff",
  },
  {
    id: 2,
    user: "Arjun",
    role: "Entrepreneur",
    time: "4h",
    avatar: "https://i.pravatar.cc/150?img=12",
    emotion: "Stressed",
    emotionEmoji: "😣",
    caption: "Things are not working as planned. Financial pressure is real.",
    need: "Advice",
    stress: 91,
    hope: 27,
    energy: 33,
    support: 213,
    hug: 103,
    stayStrong: 81,
    understand: 147,
    share: 58,
    peopleSupported: 213,
    newToday: 20,
    bgColor: "#fef3c7",
  },
  {
    id: 3,
    user: "Meera",
    role: "Graphic Designer",
    time: "6h",
    avatar: "https://i.pravatar.cc/150?img=9",
    emotion: "Hopeful",
    emotionEmoji: "😊",
    caption: "Tomorrow is a new day. Trying to stay positive and grateful.",
    need: "Encouragement",
    stress: 35,
    hope: 78,
    energy: 64,
    support: 156,
    hug: 89,
    stayStrong: 67,
    understand: 112,
    share: 41,
    peopleSupported: 167,
    newToday: 8,
    bgColor: "#d1fae5",
  },
];

export default function Social() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("For You");

  return (
    <div className="social-page">
      {/* Header */}
      <header className="social-header">
        <button className="menu-btn">☰</button>
        <div className="logo">
          <span className="logo-icon">💜</span>
          <div>
            <h1>FeelConnect</h1>
            <p>Express. Connect. Heal.</p>
          </div>
        </div>
        <button className="notif-btn">🔔</button>
      </header>

      {/* Tabs */}
      <div className="tabs">
        {["For You", "Following", "Communities", "Today Together"].map(
          (tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Stories / Emotions */}
      <div className="stories">
        <div className="story start-here">
          <div className="story-circle start">🌱</div>
          <span>Start Here</span>
          <small>Share how you feel</small>
        </div>

        {[
          {
            name: "Anxious",
            emoji: "😰",
            img: "https://i.pravatar.cc/150?img=5",
          },
          {
            name: "Lonely",
            emoji: "🥺",
            img: "https://i.pravatar.cc/150?img=12",
          },
          {
            name: "Stressed",
            emoji: "😣",
            img: "https://i.pravatar.cc/150?img=9",
          },
          {
            name: "Hopeful",
            emoji: "😊",
            img: "https://i.pravatar.cc/150?img=10",
          },
        ].map((item) => (
          <div key={item.name} className="story">
            <div className="story-circle">
              <img src={item.img} alt={item.name} />
            </div>
            <span>I feel</span>
            <small>
              {item.name} {item.emoji}
            </small>
          </div>
        ))}

        <div className="story">
          <div className="story-circle view-all">👥</div>
          <span>View All</span>
          <small>Communities</small>
        </div>
      </div>

      {/* Posts */}
      <div className="feed">
        {posts.map((post) => (
          <article
            key={post.id}
            className="post-card"
            style={{ background: post.bgColor }}
          >
            {/* User Info */}
            <div className="post-header">
              <img src={post.avatar} alt={post.user} className="avatar" />
              <div className="user-info">
                <div className="name-row">
                  <strong>{post.user}</strong>
                  <span className="dot">•</span>
                  <span className="time">{post.time}</span>
                </div>
                <span className="role">{post.role}</span>
              </div>
              <button className="more">•••</button>
            </div>

            {/* Emotion */}
            <div className="emotion-title">
              <span className="emoji">{post.emotionEmoji}</span>
              <h3>
                Feeling <span>{post.emotion}</span>
              </h3>
            </div>

            <p className="caption">{post.caption}</p>

            <div className="need-tag">🎧 Need: {post.need}</div>

            {/* Emotion DNA */}
            <div className="emotion-dna">
              <div className="dna-header">
                <span>Emotion DNA</span>
                <span className="info">ⓘ</span>
              </div>

              <div className="dna-bar">
                <span>Stress</span>
                <div className="bar">
                  <div
                    className="fill stress"
                    style={{ width: `${post.stress}%` }}
                  ></div>
                </div>
                <span className="percent">{post.stress}%</span>
              </div>

              <div className="dna-bar">
                <span>Hope</span>
                <div className="bar">
                  <div
                    className="fill hope"
                    style={{ width: `${post.hope}%` }}
                  ></div>
                </div>
                <span className="percent">{post.hope}%</span>
              </div>

              <div className="dna-bar">
                <span>Energy</span>
                <div className="bar">
                  <div
                    className="fill energy"
                    style={{ width: `${post.energy}%` }}
                  ></div>
                </div>
                <span className="percent">{post.energy}%</span>
              </div>
            </div>

            {/* Actions */}
            <div className="actions">
              <button>❤️ Support {post.support}</button>
              <button>🤗 Hug {post.hug}</button>
              <button>💪 Stay Strong {post.stayStrong}</button>
              <button>🤍 I Understand {post.understand}</button>
              <button>🌿 Share Exp. {post.share}</button>
              <button className="connect">🤝 Connect</button>
            </div>

            {/* Footer */}
            <div className="post-footer">
              <div className="supporters">
                <div className="avatars">
                  <img src="https://i.pravatar.cc/150?img=1" alt="" />
                  <img src="https://i.pravatar.cc/150?img=2" alt="" />
                  <img src="https://i.pravatar.cc/150?img=3" alt="" />
                </div>
                <span>
                  {post.peopleSupported} people supported • {post.newToday} new
                  today
                </span>
              </div>
              <button className="view-supporters">View Supporters →</button>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Nav */}
      <nav className="bottom-nav">
        <button className="active" onClick={() => navigate("/social")}>
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
        <button onClick={() => navigate("/profile")}>
          <span>👤</span>
          <small>Profile</small>
        </button>
      </nav>
    </div>
  );
}