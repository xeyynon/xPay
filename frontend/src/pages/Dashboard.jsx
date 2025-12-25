import { useEffect, useState } from "react";
import API from "../services/api";
import AddTransaction from "../components/AddTransaction";

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  const loadStats = () => {
    API.get("/dashboard/today")
      .then((res) => setStats(res.data))
      .catch(() => alert("Unauthorized"));
  };

  useEffect(() => {
    loadStats();
  }, []);

  if (!stats) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">xPay Dashboard</h1>

      {/* ADD TRANSACTION FORM */}
      <AddTransaction onSuccess={loadStats} />

      {/* STATS */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-100 p-4 rounded-xl">
          <p className="text-sm">Inward</p>
          <h2 className="text-xl font-bold">₹{stats.inward.amount}</h2>
        </div>

        <div className="bg-red-100 p-4 rounded-xl">
          <p className="text-sm">Outward</p>
          <h2 className="text-xl font-bold">₹{stats.outward.amount}</h2>
        </div>
      </div>
    </div>
  );
}
