import CandlestickChart from "./CandleChart";
import ChartWithOptions from "./ChartWithOptions";
import OrderBook from "./OrderBook";
import OrderBookWithOptions from "./OrderBookWithOptions";

const SocketPage = () => {
  return (
    <div className='page-container'>
            <h1 style={{ color: 'purple' }}> Socket Based Implementation </h1>
            <p>On this page we are getting live data for Candle Chart and Order Book using Bitfinex Websocket.</p> 
            <p>I used this approach because Websockets are always preferred in those scenarios where live data is required.</p>
            <a href="wss://api.bitfinex.com/ws/2" target="_blank" rel="noreferrer">Data source for Trade Chart and Order Book</a>
            <br />
            <a href="https://docs.bitfinex.com/reference/ws-public-trades" target="_blank" rel="noreferrer">Websocket Documentation</a>
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

export default SocketPage;
