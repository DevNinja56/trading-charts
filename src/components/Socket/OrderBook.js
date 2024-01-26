import React, { useState, useEffect } from 'react';
import { getlastNElements } from '../../utils/helper';

const OrderBook = () => {
    const [orderBook, setOrderBook] = useState({ bids: [], asks: [] });

    useEffect(() => {
        const socket = new WebSocket('wss://api.bitfinex.com/ws/2');
        socket.onopen = () => {
            const subscribeMessage = JSON.stringify({
                event: 'subscribe',
                channel: 'book',
                pair: 'tBTCUSD',
                prec: 'P0',
                freq: 'F1',
            });
            socket.send(subscribeMessage);
        };

        // Handle incoming messages
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);

            if (data[1] && data[1].length >= 3) {
                const [price, count, amount] = data[1];
                if (amount > 0) {

                    setOrderBook((prevOrderBook) => ({
                        ...prevOrderBook,
                        bids: [...getlastNElements(prevOrderBook.bids, 15) ?? [], { price, amount }],
                    }));
                } else {
                    setOrderBook((prevOrderBook) => ({
                        ...prevOrderBook,
                        asks: [...getlastNElements(prevOrderBook.asks, 15) ?? [], { price: price, amount: -amount }],
                    }));
}
            }
        };

return () => {
    socket.close();
    setOrderBook([])
};
    }, []);

return (
    <div className='center'>
    <h2>API Based Live Order Book (BTC/USD)</h2>
    <table className='order-book-table'>
        <thead>
            <tr>
                <th>Bid Price (USD)</th>
                <th>Bid Amount (BTC)</th>
                <th>Ask Price (USD)</th>
                <th>Ask Amount (BTC)</th>
            </tr>
        </thead>
        <tbody>
            {orderBook.bids?.map((bid, index) => (
                <tr key={index}>
                    <td>{bid.price}</td>
                    <td>{bid.amount}</td>
                    <td>{orderBook.asks[index]?.price}</td>
                    <td>{orderBook.asks[index]?.amount}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
);
};

export default OrderBook;
