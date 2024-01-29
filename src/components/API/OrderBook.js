// OrderBookTable.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderBook = ({ selectedPair }) => {

    const [orderBook, setOrderBook] = useState({ bids: [], asks: [] });
    const ORDER_BOOK_API = `https://trading-charts-proxy-app-2b10140bc843.herokuapp.com/bitfinex-order-book-api/${selectedPair.replace('/','')}`;
    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 10000);

        return () => clearInterval(interval);
    }, [selectedPair]);

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
