import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [dynamicPrice, setDynamicPrice] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/products/${id}`)
      .then(res => setProduct(res.data));

    axios.get(`http://127.0.0.1:8000/pricing/${id}/dynamic-price/`)
      .then(res => setDynamicPrice(res.data.dynamic_price));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <h1 className="text-3xl">{product.name}</h1>
      <p className="text-xl text-gray-600">Base Price: ${product.price}</p>
      {dynamicPrice && <p className="text-xl text-red-500">AI Price: ${dynamicPrice.toFixed(2)}</p>}
    </div>
  );
};

export default ProductDetail;
