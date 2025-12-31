import "./App.css";
import { useState, useRef, useEffect } from "react";

export default function Dashboard() {
  return(
    <>
      {/* ===============================
            Header
        =============================== */}
        <header className="top-bar d-flex align-items-center px-3">
        <img
            src="https://i.ibb.co/TBYhF4PD/tlogo.png"
            alt="Brand Logo"
            className="header-logo"
        />

        <div className="ms-auto d-flex align-items-center gap-2">
            <button className="lang-button">Lang</button>

            <button
            className="menu-button"
            onClick={() => navigate("/profile")}
            >
            <div className="menu-icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
            </button>
        </div>
        </header>

      {/* ===============================
          Main Content
      =============================== */}
      <main className="py-5">

        {/* ===============================
            Standalone Brand Section
        =============================== */}
        <section className="brand-hero d-flex justify-content-center mb-4">
          <img
            src="https://i.ibb.co/TBYhF4PD/tlogo.png"
            alt="Main Logo"
            className="hero-logo"
          />
        </section>

        {/* ===============================
            Functional Section
        =============================== */}
        <section className="d-flex justify-content-center">
          <div className="main-wrapper text-center">

            {/* Today's Collection */}
            <div className="dashboard-card mb-4">
              <h5 className="mb-0 heading-dark">Today’s Collection</h5>
            </div>

            {/* Action Buttons */}
            {/* Action Buttons */}
            <div className="action-grid">
              <button className="action-button">Dep</button>
              <button className="action-button">Withdraw</button>
              <button className="action-button">%</button>
            </div>

            {/* History Button */}
            <button className="history-button">History</button>


            {/* <div className="row g-2 mb-3">
              <div className="col-12 col-md-4">
                <button className="action-button">Deposit</button>
              </div>
              <div className="col-12 col-md-4">
                <button className="action-button">Withdraw</button>
              </div>
              <div className="col-12 col-md-4">
                <button className="action-button">%</button>
              </div>
            </div> */}

            {/* History */}
            {/* <button className="history-button">History</button> */}

            {/* Signature */}
            <div className="text-start">
              <span className="handwritten signature">User Interface</span>
            </div>

          </div>
          
        </section>
      </main>
      {/* ===============================
            Footer
        =============================== */}
        <footer className="app-footer mt-5">
          <div className="container">
            <div className="row align-items-center gy-3">

              {/* Brand */}
              <div className="col-12 col-md-4 text-center text-md-start">
                <img
                  src="https://i.ibb.co/TBYhF4PD/tlogo.png"
                  alt="Footer Logo"
                  className="footer-logo mb-2"
                />
                <p className="footer-text">
                  Secure • Simple • Smart 
                </p>
              </div>

              {/* Links */}
              <div className="col-12 col-md-4 text-center">
                <ul className="footer-links">
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </div>

              {/* Copyright */}
              <div className="col-12 col-md-4 text-center text-md-end">
                <p className="footer-text mb-0">
                  © {new Date().getFullYear()} xPay All Rights Reserved
                </p>
              </div>

            </div>
          </div>
        </footer>
    </>
  );
}
