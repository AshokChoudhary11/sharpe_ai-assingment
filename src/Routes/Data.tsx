import { useEffect, useState } from "react";
import { db } from "../firebase/app";
import { collection, onSnapshot } from "firebase/firestore";
import { query } from "firebase/firestore";
import TransactionCard from "./TransactionCard";

const Data = () => {
  const [transactions, setTransactions] = useState([]);

  const collectData = () => {
    const q = query(collection(db, "transactions"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const trans = [] as any;
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
    <div className=" mt-16 m-36 truncate">
      <h2>Wallet Data</h2>
      <div className="mx-auto w-[100vw]">
        {transactions.length > 0 ? (
          transactions.map((data) => <TransactionCard data={data} />)
        ) : (
          <div>No transactions</div>
        )}
      </div>
    </div>
  );
};

export default Data;
