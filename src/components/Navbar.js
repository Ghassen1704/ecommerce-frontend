import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between text-white">
      <h1 className="text-xl font-bold">E-Commerce</h1>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/products" className="mx-2">Products</Link>
        <Link to="/price-prediction" className="mx-2">Price Prediction</Link> {/* New link */}
        <Link to="/sales-prediction" className="mx-2">Sales Prediction</Link> {/* New link */}
        <Link to="/login" className="mx-2">Login</Link>
        <Link to="/register" className="mx-2">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
