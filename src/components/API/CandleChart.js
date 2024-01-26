// CandlestickChart.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';

const CandlestickChart = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'candlestick',
    },
    xaxis: {
      type: 'datetime',
    },
  });
  const [chartSeries, setChartSeries] = useState([{ data: [] }]);
  const CANDLES_TRADE_API = "https://trading-charts-proxy-app-2b10140bc843.herokuapp.com/bitfinex-candles-trade-api";

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(CANDLES_TRADE_API);

      const formattedData = response.data.map((entry) => ({
        x: new Date(entry[0]),
        y: [entry[1], entry[3], entry[4], entry[2]],
      }));
      setChartSeries([{ data: formattedData }]);
    } catch (error) {
    }
  };

  return (
    <div>

      <h2>API Based Live Trading Chart <span style={{ color: 'red' }}> BTC/USD</span></h2>
      <ReactApexChart options={chartOptions} series={chartSeries} type="candlestick" height={400} />
    </div>
  );
};

export default CandlestickChart;
