import React, { useState } from "react";
import { db } from "../firebase/app";
import { addDoc, collection } from "firebase/firestore";
const Transactions: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [amount, setAmount] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("handle submit");

    setError("");

    // Add data to Firestore
    try {
      await addDoc(collection(db, "transactions"), {
        walletAddress,
        amount: Number(amount),
        createdAt: Date.now(),
      });
      alert("Transaction saved!");
    } catch (err) {
      console.error("Error writing document: ", err);
      setError("Error saving transaction");
    }

    // Clear the form
    setWalletAddress("");
    setAmount(0);
  };

  return (
    <div className="flex flex-col mt-24 ">
      <h2 className="text-xl mx-auto">Transaction</h2>
      <form
        onSubmit={handleSubmit}
        className="mt-4 p-6 min-w-96 mx-auto text-left border-2 rounded border-gray-500"
      >
        <div className="mb-4">
          <label
            htmlFor="walletAddress"
            className="block text-sm mb-1 font-small text-white-400"
          >
            Wallet Address:
          </label>
          <input
            type="text"
            id="walletAddress"
            required
            pattern="0x[0-9A-Fa-f]+"
            value={walletAddress}
            placeholder="Enter wallet address"
            onChange={(e) => setWalletAddress(e.target.value)}
            className="mt-1 p-2 border rounded w-full border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm  mb-1 font-small text-white-400"
          >
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            required
            min={0}
            max={10000}
            value={String(amount)}
            placeholder="Enter amount"
            onChange={(e) => setAmount(parseInt(e.target.value))}
            className="mt-1 p-2 border rounded w-full border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button
          type="submit"
          className="mt-4 bg-green-600 hover:bg-green-700 border-none text-white py-1 px-5 rounded "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Transactions;
