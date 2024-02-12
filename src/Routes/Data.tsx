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
    <div className="mt-4 md:mt-12 p-4 flex justify-center items-center">
      <div className="">
        <h2 className="text-2xl font-bold">Wallet Data</h2>
        <div className="mx-auto w-full md:w-[80vw] items-center">
          {transactions.length > 0 ? (
            transactions.map((data) => (
              <TransactionCard key={data.id} data={data} />
            ))
          ) : (
            <div>No transactions</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Data;
