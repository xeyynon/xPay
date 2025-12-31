import { useState, useEffect } from "react";
import "./App.css";

export default function SuperAdmin() {
  const [masters, setMasters] = useState([]);
  const [showAddUser, setShowAddUser] = useState(false);
  const [accountType, setAccountType] = useState("user");
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  /* ===============================
     Load from localStorage
  =============================== */
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("masters")) || [];
    setMasters(stored);
  }, []);

  /* ===============================
     Save to localStorage
  =============================== */
  useEffect(() => {
    localStorage.setItem("masters", JSON.stringify(masters));
  }, [masters]);

  /* ===============================
     Create Account
  =============================== */
  const createAccount = () => {
    if (!form.name || !form.email || !form.password) {
      alert("All fields required");
      return;
    }

    if (accountType === "master") {
      setMasters([...masters, { name: form.name }]);
    }

    console.log("Created:", accountType, form);
    setForm({ name: "", email: "", password: "" });
    setShowAddUser(false);
  };

  /* ===============================
     Delete Master
  =============================== */
  const deleteMaster = (index) => {
    if (window.confirm("Delete this master?")) {
      setMasters(masters.filter((_, i) => i !== index));
    }
  };

  return (
    <>
      {/* ===============================
          Header
      =============================== */}
      <header className="top-bar d-flex align-items-center px-3">
        <img
          src="https://i.ibb.co/TBYhF4PD/tlogo.png"
          alt="Logo"
          className="header-logo"
        />

        <div className="ms-auto d-flex gap-2">
          <button className="lang-button">Lang</button>
          <button className="menu-button">
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </header>

      {/* ===============================
          Main Logo
      =============================== */}
      <div className="brand-hero">
        <img
          src="https://i.ibb.co/TBYhF4PD/tlogo.png"
          alt="Main Logo"
          className="hero-logo"
        />
      </div>

      {/* ===============================
          ADD USER
      =============================== */}
      <button
        className="add-user-btn"
        onClick={() => setShowAddUser(true)}
      >
        + ADD USER
      </button>

      <h2 className="main-title">Today's Collection Overall</h2>

      {/* ===============================
          Master List
      =============================== */}
      <div className="master-rows-container">
        {masters.map((m, i) => (
          <div className="master-row" key={i}>
            <span className="status">✓</span>
            <span>{m.name}</span>

            <i
              className="fa fa-plus"
              onClick={() => console.log("Add amount", m)}
            />
            <i
              className="fa fa-minus"
              onClick={() => console.log("Deduct amount", m)}
            />
            <i
              className="fa fa-trash"
              onClick={() => deleteMaster(i)}
            />
            <i
              className="fa fa-key"
              onClick={() => console.log("Change password", m)}
            />
            <span>double</span>
            <span>Remark</span>
          </div>
        ))}
      </div>

      {/* ===============================
          Footer
      =============================== */}
      <div className="footer">User Interface</div>

      {/* ===============================
          ADD USER MODAL
      =============================== */}
      {showAddUser && (
        <div className="modal-backdrop" onClick={() => setShowAddUser(false)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>ADD NEW ACCOUNT</h3>

            <label>
              <input
                type="radio"
                checked={accountType === "user"}
                onChange={() => setAccountType("user")}
              />{" "}
              User
            </label>

            <label>
              <input
                type="radio"
                checked={accountType === "master"}
                onChange={() => setAccountType("master")}
              />{" "}
              Master
            </label>

            <input
              placeholder="Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
            <input
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Create Password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <button onClick={createAccount}>
              CREATE ACCOUNT
            </button>
          </div>
        </div>
      )}
    </>
  );
}
