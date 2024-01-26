// OrderBookTable.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderBook = () => {

    const [orderBook, setOrderBook] = useState({ bids: [], asks: [] });
    const ORDER_BOOK_API = "https://trading-charts-proxy-app-2b10140bc843.herokuapp.com/bitfinex-order-book-api";
    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 5000);

        return () => clearInterval(interval);
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(ORDER_BOOK_API);

            setOrderBook({
                bids: response.data.bids,
                asks: response.data.asks,
            });
        } catch (error) {
        }
    };

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
                    {orderBook.bids.map((bid, index) => (
                        <tr key={index}>
                            <td>{bid.price}</td>
                            <td>{bid.amount}</td>
                            <td>{orderBook.asks[index].price}</td>
                            <td>{orderBook.asks[index].amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderBook;
