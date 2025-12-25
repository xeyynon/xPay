import { useState } from "react";
import API from "../services/api";

export default function AddTransaction({ onSuccess }) {
  const [amount, setAmount] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [type, setType] = useState("INWARD");
  const [source, setSource] = useState("");
  const [staffTag, setStaffTag] = useState("");
  const [loading, setLoading] = useState(false);

  const submitTransaction = async () => {
    if (!amount || !referenceNumber || !source) {
      alert("Please fill required fields");
      return;
    }

    try {
      setLoading(true);
      await API.post("/transactions", {
        amount: Number(amount),
        referenceNumber,
        type,
        source,
        staffTag,
      });

      alert("Transaction added successfully");

      // reset form
      setAmount("");
      setReferenceNumber("");
      setSource("");
      setStaffTag("");

      if (onSuccess) onSuccess();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add transaction");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">Add Transaction</h2>

      <div className="grid grid-cols-2 gap-3">
        <input
          className="border p-2 rounded col-span-2"
          placeholder="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          className="border p-2 rounded col-span-2"
          placeholder="Reference Number (UTR/RR)"
          value={referenceNumber}
          onChange={(e) => setReferenceNumber(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="INWARD">INWARD</option>
          <option value="OUTWARD">OUTWARD</option>
        </select>

        <input
          className="border p-2 rounded"
          placeholder="Source / Location"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />

        <input
          className="border p-2 rounded col-span-2"
          placeholder="Staff Tag (optional)"
          value={staffTag}
          onChange={(e) => setStaffTag(e.target.value)}
        />
      </div>

      <button
        onClick={submitTransaction}
        disabled={loading}
        className="mt-4 w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
      >
        {loading ? "Adding..." : "Add Transaction"}
      </button>
    </div>
  );
}
