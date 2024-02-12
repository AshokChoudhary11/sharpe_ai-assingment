import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  // return (
  //   <div>
  //     <nav className="flex gap-9 mb-4 fixed top-0 left-0 right-0 bg-gray-800 p-4 shadow-md">
  //       <Link to="/" className="items-center">
  //         <img
  //           className="h-7 w-auto"
  //           src="https://framerusercontent.com/images/pDyVPAanzfYpfZFNjTiMP2nAQU.svg"
  //           alt="Your Company"
  //         />
  //       </Link>
  //       <Link to="/" className="text-blue-500 hover:text-blue-700">
  //         Home
  //       </Link>
  //       <Link to="/transactions" className="text-blue-500 hover:text-blue-700">
  //         Transaction
  //       </Link>
  //       <Link to="/data" className="text-blue-500 hover:text-blue-700">
  //         Data
  //       </Link>
  //       <div className="hidden sm:ml-6 sm:block">
  //         <div className="flex space-x-4">
  //           <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</a>
  //           <a href="/transactions" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Transaction</a>
  //           <a href="/data" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Data</a>
  //         </div>
  //       </div>
  //     </nav>
  //   </div>
  // );
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <a href="/" className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://framerusercontent.com/images/pDyVPAanzfYpfZFNjTiMP2nAQU.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </a>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="/"
                  className={`${
                    pathname === "/"
                      ? "bg-gray-900 text-white"
                      : ` text-gray-300 hover:bg-gray-700 hover:text-white`
                  } rounded-md px-3 py-2 text-sm font-medium`}
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  href="/transactions"
                  className={`${
                    pathname === "/transactions"
                      ? "bg-gray-900 text-white"
                      : ` text-gray-300 hover:bg-gray-700 hover:text-white`
                  } rounded-md px-3 py-2 text-sm font-medium`}
                >
                  Transaction
                </a>
                <a
                  href="/data"
                  className={`${
                    pathname === "/data"
                      ? "bg-gray-900 text-white"
                      : ` text-gray-300 hover:bg-gray-700 hover:text-white`
                  } rounded-md px-3 py-2 text-sm font-medium`}
                >
                  Data
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDropdown && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="/"
              className={`${
                pathname === "/"
                  ? "bg-gray-900 text-white"
                  : ` text-gray-300 hover:bg-gray-700 hover:text-white`
              } rounded-md px-3 py-2 text-sm font-medium block`}
              // className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="/transactions"
              className={`${
                pathname === "/transactions"
                  ? "bg-gray-900 text-white"
                  : ` text-gray-300 hover:bg-gray-700 hover:text-white`
              } rounded-md px-3 py-2 text-sm font-medium block`}
              // className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Transactions
            </a>
            <a
              href="/data"
              className={`${
                pathname === "/data"
                  ? "bg-gray-900 text-white"
                  : ` text-gray-300 hover:bg-gray-700 hover:text-white`
              } rounded-md px-3 py-2 text-sm font-medium block`}
              // className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Data
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
