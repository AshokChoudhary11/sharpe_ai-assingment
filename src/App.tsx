import { Route, Routes } from "react-router-dom";
import Data from "./Routes/Data";
import Home from "./Routes/Home";
import Transactions from "./Routes/Transactions";
import NavBar from "./Navbar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </>
  );
}

export default App;
