import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client"; // Import ApolloProvider
import client from "./apolloClient"; // Import your Apollo Client
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import PricePrediction from "./components/PricePrediction";
import SalesPrediction from "./components/SalesPrediction";

function App() {
  return (
    <ApolloProvider client={client}> {/* Wrap your app with ApolloProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/price-prediction" element={<PricePrediction />} />
          <Route path="/sales-prediction" element={<SalesPrediction />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
