const TransactionCard = ({ data }: { data: any }) => {
  return (
    <div className="w-full md:flex">
      <div className="mt-4 p-4 md:p-6 w-full text-left border-2 rounded border-gray-500">
        <div className="block text-base md:text-lg mb-2 md:mb-1 font-small text-gray-400">
          <span className="font-bold">Wallet Address:</span>{" "}
          {data.walletAddress}
        </div>
        <div className="block text-base md:text-lg mb-2 md:mb-1 font-small text-gray-400">
          <span className="font-bold">Amount:</span> {data.amount}
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
