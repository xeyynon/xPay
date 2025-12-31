import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Profile({ onLogout }) {
  const navigate = useNavigate();

  return (
    <div className="profile-page">

      {/* Header */}
      <header className="top-bar d-flex align-items-center px-3">
        <button
          className="menu-button"
          onClick={() => navigate("/")}
        >
          ←
        </button>
        <span className="ms-3 text-light">Profile</span>
      </header>

      {/* Content */}
      <div className="profile-card">
        <img
          src="https://i.ibb.co/3F4G9GQ/user-avatar.png"
          alt="User"
          className="profile-avatar"
        />

        <h5 className="profile-name">User</h5>
        <p className="profile-role">Account Holder</p>

        <button
          className="logout-btn"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
