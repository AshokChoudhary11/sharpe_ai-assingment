import React from "react";

const TransactionCard = ({ data }) => {
  return (
    <div className="w-full flex">
      <div className="mt-4 p-6 w-4/5 text-left border-2 rounded border-gray-500">
        <div className="block text-lg mb-1 font-small text-white-400">
          <span>Wallet Address : </span>
          <span>{data.walletAddress}</span>
        </div>
        <div className="block text-lg mb-1 font-small text-white-400">
          <span>Amount : </span>
          <span>{data.amount}</span>
        </div>
      </div>
    </div>
  );
};
export default TransactionCard;
