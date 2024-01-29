import React, { useState, useEffect } from 'react';
import { getlastNElements } from '../../utils/helper';

const OrderBook = ({selectedPair}) => {
    const [orderBook, setOrderBook] = useState({ bids: [], asks: [] });
    useEffect(() => {
        const socket = new WebSocket('wss://api.bitfinex.com/ws/2');
        socket.onopen = () => {
            const subscribeMessage = JSON.stringify({
                event: 'subscribe',
                channel: 'book',
                pair: `t${selectedPair.replace('/','')}`,
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
    }, [selectedPair]);

return (
    <div>
    <table className='order-book-table'>
        <thead>
            <tr>
                <th>Bid Price ({selectedPair.split('/')[1]})</th>
                <th>Bid Amount ({selectedPair.split('/')[0]})</th>
                <th>Ask Price ({selectedPair.split('/')[1]})</th>
                <th>Ask Amount ({selectedPair.split('/')[0]})</th>
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
