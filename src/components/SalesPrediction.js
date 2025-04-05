import React, { useState } from 'react';
import axios from 'axios';

const SalesPrediction = () => {
  const [file, setFile] = useState(null);
  const [predictedSales, setPredictedSales] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please upload a CSV file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://127.0.0.1:8000/predict_sales/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPredictedSales(response.data.predicted_sales);
    } catch (err) {
      setError('There was an error with the file upload or prediction.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Sales Prediction for the Next 7 Days</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="border p-2 w-full"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 w-full mt-2"
        >
          {loading ? 'Processing...' : 'Predict Sales'}
        </button>
      </form>

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {predictedSales.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl">Predicted Sales for the Next 7 Days:</h3>
          <ul className="space-y-2 mt-2">
            {predictedSales.map((sale, index) => (
              <li key={index} className="bg-gray-100 p-2 rounded">
                Day {index + 1}: {sale.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SalesPrediction;
