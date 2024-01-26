import CandlestickChart from "./CandleChart";
import OrderBook from "./OrderBook";

const SocketPage = () => {
  return (
    <div style={{ textAlign: "center", padding: '10px', margin: '20px' }}>
            <h1 style={{ color: 'purple' }}> API Based Implementation </h1>
            <p>On this page we are getting live data for Candle Chart and Order Book using Bitfinex Websocket.</p> 
            <p>I used this approach because Websockets are always preferred in those scenarios where live data is required.</p>
            <a href="wss://api.bitfinex.com/ws/2" target="_blank" rel="noreferrer">Data source for Trade Chart and Order Book</a>
            <br />
            <a href="https://docs.bitfinex.com/reference/ws-public-trades" target="_blank" rel="noreferrer">Websocket Documentation</a>
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

export default SocketPage;
