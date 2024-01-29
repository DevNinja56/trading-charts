import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { getfirstNElements } from '../../utils/helper';

const CandlestickChart = ({selectedPair, timeFrame}) => {
    const [candleData, setCandleData] = useState([]);
    useEffect(() => {
        const socket = new WebSocket('wss://api.bitfinex.com/ws/2');
        const requestKey = `trade:${timeFrame}:t${selectedPair.replace('/', '')}`;
        socket.onopen = () => {
            const subscribeMessage = JSON.stringify({
                event: 'subscribe',
                channel: 'candles',
                key: requestKey,
            });
            socket.send(subscribeMessage);
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (Array.isArray(data) && data.length === 2 && data[1].length > 2) {
                const [, candles] = data;
                if (Array.isArray(candles[0])) { // First time multiple trades comes in
                    setCandleData(candles);
                }
                else {
                    setCandleData((prevCandleData) => (
                        [candles, ...getfirstNElements(prevCandleData, 1000)]
                    ));
                }
            }
        };

        // Clean up WebSocket connection
        return () => {
            socket.close();
        };
    }, [timeFrame, selectedPair]);

    const seriesData = candleData.map((candle) => ({
        x: new Date(candle[0]),
        y: [candle[1], candle[3], candle[4], candle[2]],
    }));
    const options = {
        chart: {
            type: 'candlestick',
            height: 400,
            animations: { enabled: false }
        },
        xaxis: {
            type: 'datetime',
        },
    };

    return (
        <div>
            <ReactApexChart id="candle-socket" options={options} series={[{ data: seriesData }]} type="candlestick" height={400} />
        </div>
    );
};

export default CandlestickChart;
