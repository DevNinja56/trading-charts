import CandlestickChart from "./CandleChart";
import ChartWithOptions from "./ChartWithOption";
import OrderBook from "./OrderBook";
import OrderBookWithOptions from "./OrderBookWithOptions";

const APIPage = () => {
    return (
        <div className='page-container'>
            <h1 style={{ color: 'purple' }}> API Based Implementation </h1>
            <p>On this page we are getting data from API every 10 seconds and show live data for Candle chart and Order Book</p>
            <p>This project is using a proxy server to call APIs due to CORS restrictions on Bitfinex API.</p>
            <a href="https://api.bitfinex.com/v2//candles/trade:1m:tBTCUSD/hist?limit=1000" target="_blank" rel="noreferrer">Data source for Trade Chart</a>
            <br />
            <a href="https://api.bitfinex.com/v2//candles/trade:1m:tBTCUSD/hist?limit=1000" target="_blank" rel="noreferrer">Data source for Order Book</a>
            <div className='candle-chart-container'>
                <ChartWithOptions></ChartWithOptions>
            </div>
            <br /><br />
            <div>
                <OrderBookWithOptions></OrderBookWithOptions>
            </div>
        </div>
    );
};

export default APIPage;
