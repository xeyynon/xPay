import { useState } from "react";
import "../App.css";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // USER login
    if (username === "user" && password === "user") {
      setError("");
      onLogin("user");
      return;
    }

    // SUPER ADMIN login
    if (username === "super" && password === "super") {
      setError("");
      onLogin("super");
      return;
    }

    // Invalid
    setError("Invalid username or password");
  };

  return (
    <div className="login-page">

      {/* Logo */}
      <div className="login-logo">
        <img
          src="https://i.ibb.co/TBYhF4PD/tlogo.png"
          alt="Logo"
        />
      </div>

      {/* Login Card */}
      <div className="login-card">
        <h4 className="login-title">Welcome Back</h4>
        <p className="login-subtitle">Sign in to continue</p>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-3">
            <label className="login-label">Username</label>
            <input
              type="text"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="login-label">Password</label>
            <input
              type="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          {/* Login Button */}
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>

    </div>
  );
}
