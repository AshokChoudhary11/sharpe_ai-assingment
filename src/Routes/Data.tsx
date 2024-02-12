import React, { useEffect, useState } from "react";
import { db } from "../firebase/app";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { query } from "firebase/firestore";
import TransactionCard from "./TransactionCard";

const Data = () => {
  const [transactions, setTransactions] = useState([]);

  const collectData = () => {
    const q = query(collection(db, "transactions"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const trans = [];
      querySnapshot.forEach((snapshot) => {
        trans.push({ id: snapshot.id, ...snapshot.data() });
      });
      setTransactions(trans);
    });
    return unsubscribe;
  };

  useEffect(() => {
    const unsubscribe = collectData();
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="w-[100vw] mt-16 m-40">
      <h2>Wallet Data</h2>
      <div className="mx-auto w-[100vw]">
        {transactions.length > 0 ? (
          transactions.map((data) => (
            <TransactionCard data={data} />
          ))
        ) : (
          <div>No transactions</div>
        )}
      </div>
    </div>
  );
};

export default Data;
