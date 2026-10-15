import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Error states
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Email validation
  const validateEmail = (value: string) => {
    if (!value.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  // Password validation
  const validatePassword = (value: string) => {
    if (!value) {
      return "Password is required";
    }
    if (value.length < 6) {
      return "Password must be at least 6 characters";
    }
    if (!/\d/.test(value)) {
      return "Password must contain at least 1 number";
    }
    return "";
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);

    setEmailError(emailErr);
    setPasswordError(passwordErr);

    // Agar koi error hai to aage mat jao
    if (emailErr || passwordErr) {
      return;
    }

    // Validation pass → Home pe jao
    navigate("/home");
  };

  return (
    <div className="login-page">
      {/* ================= LEFT SIDE ================= */}
      <section className="left-section">
        {/* Logo */}
        <div className="brand">
          <div className="brand-logo">
            <span className="logo-heart">♥</span>
            <span className="logo-person">♟</span>
          </div>

          <div className="brand-text">
            <h1>
              Feel<span>Connect</span>
            </h1>
            <p>Emotion First. Connection Always.</p>
          </div>
        </div>

        {/* Emotion badge */}
        <div className="emotion-badge">♡ &nbsp; Emotion Based Social Media</div>

        {/* Main heading */}
        <div className="hero-content">
          <h2>
            Every emotion
            <br />
            deserves to be
            <br />
            <span>seen, heard</span>
            <br />
            and <span>understood.</span> ♡
          </h2>

          <p>
            Share how you feel, get real support
            <br />
            and connect with people who
            <br />
            truly understand you.
          </p>
        </div>

        {/* Center illustration */}
        <div className="emotion-orbit">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="orbit-item item-feel">
            <div className="small-icon pink-icon">☺</div>
            <span>Feel</span>
          </div>

          <div className="orbit-item item-connect">
            <div className="small-icon blue-icon">♥♥</div>
            <span>Connect</span>
          </div>

          <div className="orbit-item item-community">
            <div className="small-icon green-icon">♟</div>
            <span>Communities</span>
          </div>

          <div className="orbit-item item-watch">
            <div className="small-icon cyan-icon">▶</div>
            <span>Watch</span>
          </div>

          <div className="orbit-item item-chat">
            <div className="small-icon purple-icon">•••</div>
            <span>Chat</span>
          </div>

          <div className="orbit-item item-shop">
            <div className="small-icon orange-icon">▣</div>
            <span>Shop</span>
          </div>

          <div className="orbit-item item-book">
            <div className="small-icon blue-icon">▧</div>
            <span>Book</span>
          </div>

          <div className="orbit-item item-ai">
            <div className="small-icon violet-icon">AI</div>
            <span>AI Support</span>
          </div>

          {/* Main person */}
          <div className="person-circle">
            <div className="person-head"></div>
            <div className="person-body">♡</div>
          </div>
        </div>

        {/* Quote */}
        <div className="quote-box">
          <div className="quote-mark">“</div>
          <div>
            <p>
              It’s okay to feel.
              <br />
              You are not alone.
              <br />
              We are here with you.
            </p>
          </div>
          <div className="quote-heart">♥</div>
        </div>

        {/* Features */}
        <div className="features">
          <div className="feature">
            <div className="feature-icon">∞</div>
            <strong>100%</strong>
            <span>Anonymous</span>
          </div>

          <div className="feature">
            <div className="feature-icon">♢</div>
            <strong>Safe</strong>
            <span>Space</span>
          </div>

          <div className="feature">
            <div className="feature-icon">🔒</div>
            <strong>Private</strong>
            <span>& Secure</span>
          </div>

          <div className="feature">
            <div className="feature-icon">✦</div>
            <strong>AI</strong>
            <span>Powered</span>
          </div>
        </div>

        {/* Privacy */}
        <div className="privacy-box">
          <div className="privacy-icon">♢</div>
          <div>
            <strong>Your privacy is our priority.</strong>
            <p>We keep your data safe and secure.</p>
          </div>
        </div>
      </section>

      {/* ================= RIGHT SIDE ================= */}
      <section className="right-section">
        <div className="login-card">
          {/* Language */}
          <div className="language">
            <span>◎</span>
            <strong>English</strong>
            <span>⌄</span>
          </div>

          {/* Welcome illustration */}
          <div className="welcome-image">
            <div className="heart-orbit orbit-a"></div>
            <div className="heart-orbit orbit-b"></div>

            <div className="floating-heart heart-one">♡</div>
            <div className="floating-heart heart-two">♥</div>
            <div className="floating-heart heart-three">♡</div>

            <div className="big-heart">
              <span>⌣⌣</span>
              <small>⌣</small>
            </div>
          </div>

          {/* Welcome */}
          <div className="welcome-text">
            <h2>
              Welcome Back <span>💜</span>
            </h2>
            <p>Glad to see you again!</p>
            <div className="purple-line"></div>
          </div>

          {/* Login form */}
          <form onSubmit={handleLogin} className="login-form">
            {/* Email */}
            <div className={`input-box ${emailError ? "error" : ""}`}>
              <div className="input-icon">♙</div>
              <input
                type="text"
                placeholder="Phone number or email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
              />
            </div>
            {emailError && <p className="error-text">⚠️ {emailError}</p>}

            {/* Password */}
            <div className={`input-box ${passwordError ? "error" : ""}`}>
              <div className="input-icon">♙</div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordError) setPasswordError("");
                }}
              />
              <button
                type="button"
                className="eye-button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "◉" : "◌"}
              </button>
            </div>
            {passwordError && <p className="error-text">⚠️ {passwordError}</p>}

            {/* Remember + Forgot */}
            <div className="form-options">
              <label className="remember">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="custom-checkbox">
                  {rememberMe ? "✓" : ""}
                </span>
                <span>Remember me</span>
              </label>

              <button type="button" className="forgot">
                Forgot password?
              </button>
            </div>

            {/* Login button */}
            <button type="submit" className="login-button">
              <span>Login</span>
              <span className="arrow">→</span>
            </button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span></span>
            <p>or continue with</p>
            <span></span>
          </div>

          {/* Social buttons */}
          <div className="social-buttons">
            <button className="social-button">
              <span className="google-icon">G</span>
            </button>
            <button className="social-button apple"></button>
            <button className="social-button otp">
              <span>▯</span>
              <small>OTP</small>
            </button>
          </div>

          {/* Emotion card */}
          <div className="emotion-card">
            <div className="emotion-card-icon">♥</div>
            <div>
              <h3>Built around your emotions</h3>
              <p>
                Everything you need to express,
                <br />
                connect, explore and heal.
              </p>
            </div>
            <div className="card-arrow">→</div>
          </div>

          {/* Create account */}
          <div className="create-account">
            New here? <button type="button">Create an account</button>
          </div>

          {/* Bottom features */}
          <div className="bottom-features">
            <div>
              <div>♡</div>
              <span>Real People</span>
              <small>Real Support</small>
            </div>
            <div>
              <div>♙</div>
              <span>Anonymous</span>
              <small>by Default</small>
            </div>
            <div>
              <div>☺</div>
              <span>Kindness</span>
              <small>Everywhere</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default login;