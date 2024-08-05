import React, { createContext, useContext, useState, useEffect } from 'react';

const ChartContext = createContext();

export const useChartContext = () => useContext(ChartContext);

// Mock data to simulate API response
const mockChartData = {
  ticker: 'AAPL',
  price: '3.38$',
  change: '0.75$',
  percentageChange: '-0.5%',
  earnings: '1213',
  marketCap: '1213',
  sector: '1213'
};

// Commented out the API fetch function
// import axios from 'axios';
// const BASE_URL = 'https://react-trading-backend.onrender.com';

// export const fetchChartData = async (ticker) => {
//   const requestData = { ticker: ticker };
  
//   return axios.post(`${BASE_URL}/charts`, requestData, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(response => {
//       return response.data;
//     })
//     .catch(error => {
//       console.error('Error fetching chart data:', error);
//       throw new Error('Error fetching chart data');
//     });
// };

export const ChartProvider = ({ children }) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating data fetch delay
    setTimeout(() => {
      setChartData(mockChartData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ChartContext.Provider value={{ chartData, loading, error }}>
      {children}
    </ChartContext.Provider>
  );
};
