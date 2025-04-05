import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      price
    }
  }
`;

const ProductList = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products!</p>;

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Available Products</h2>
      <div className="grid grid-cols-3 gap-6">
        {data.products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h3 className="text-xl">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <Link to={`/product/${product.id}`} className="text-blue-500">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
