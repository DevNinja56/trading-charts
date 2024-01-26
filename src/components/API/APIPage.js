import CandlestickChart from "./CandleChart";
import OrderBook from "./OrderBook";

const APIPage = () => {
    return (
        <div style={{ textAlign: "center", padding: '10px', margin: '20px' }}>
            <h1 style={{ color: 'purple' }}> API Based Implementation </h1>
            <p>On this page we are getting data from API every 10 seconds and show live data for Candle chart and Order Book</p>
            <p>This project is using a proxy server to call APIs due to CORS restrictions on Bitfinex API.</p>
            <a href="https://api.bitfinex.com/v2//candles/trade:1m:tBTCUSD/hist?limit=1000" target="_blank" rel="noreferrer">Data source for Trade Chart</a>
            <br />
            <a href="https://api.bitfinex.com/v2//candles/trade:1m:tBTCUSD/hist?limit=1000" target="_blank" rel="noreferrer">Data source for Order Book</a>
            <div style={{background: 'hsl(210,8%,85%)' }}>
                <CandlestickChart></CandlestickChart>
            </div>
            <br /><br />
            <div>
                <OrderBook></OrderBook>
            </div>
        </div>
    );
};

export default APIPage;
