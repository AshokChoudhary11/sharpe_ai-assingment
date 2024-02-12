import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="flex gap-9 mb-4 fixed top-0 left-0 right-0 bg-gray-800 p-4 shadow-md">
        <Link to="/" className="items-center">
          <img
            className="h-7 w-auto"
            src="https://framerusercontent.com/images/pDyVPAanzfYpfZFNjTiMP2nAQU.svg"
            alt="Your Company"
          />
        </Link>
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          Home
        </Link>
        <Link to="/transactions" className="text-blue-500 hover:text-blue-700">
          Transaction
        </Link>
        <Link to="/data" className="text-blue-500 hover:text-blue-700">
          Data
        </Link>
      </nav>
    </div>
  );
};
export default Navbar;
