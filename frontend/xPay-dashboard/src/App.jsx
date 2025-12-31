import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./Dashboard";
import SuperAdmin from "./SuperAdmin";
import Profile from "./pages/Profile";

export default function App() {
  const [role, setRole] = useState(null); // null | "user" | "super"

  // NOT logged in
  if (!role) {
    return <Login onLogin={(r) => setRole(r)} />;
  }

  // SUPER ADMIN (no router needed yet, single page)
  if (role === "super") {
    return <SuperAdmin />;
  }

  // USER FLOW
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/profile"
          element={<Profile onLogout={() => setRole(null)} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
