import React, { useState } from "react";
import axios from "axios";

const PricePrediction = () => {
  const [demand, setDemand] = useState("");
  const [season, setSeason] = useState("");
  const [predictedPrice, setPredictedPrice] = useState(null);

  const handlePrediction = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://127.0.0.1:8000/predict_price/",  // Correct endpoint here
        { demand: parseInt(demand), season: parseInt(season) }
      );
      setPredictedPrice(result.data.predicted_price);
    } catch (error) {
      alert("Prediction failed");
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl">Predict Product Price</h2>
      <form onSubmit={handlePrediction}>
        <input
          type="number"
          className="border p-2 mt-2"
          placeholder="Demand"
          onChange={(e) => setDemand(e.target.value)}
        />
        <input
          type="number"
          className="border p-2 mt-2"
          placeholder="Season (0-3)"
          onChange={(e) => setSeason(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 mt-4">
          Predict
        </button>
      </form>
      {predictedPrice && (
        <p className="mt-4 text-xl text-red-500">Predicted Price: ${predictedPrice}</p>
      )}
    </div>
  );
};

export default PricePrediction;
