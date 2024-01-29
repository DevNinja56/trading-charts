import React, { useState } from 'react';
import OrderBook from './OrderBook';

const OrderBookWithOptions = () => {
    const [selectedPair, setSelectedPair] = useState('BTC/USD');

    const handlePairChange = (event) => {
        setSelectedPair(event.target.value);
    };

    return (
        <div className='center'>
            <h2>API Based Live Order Book {selectedPair}</h2>
            <div>
                    <select className='custom-select' value={selectedPair} onChange={handlePairChange}>
                        <option value="BTC/USD">BTC/USD</option>
                        <option value="ETH/USD">ETH/BTC</option>
                        <option value="BTC/USD">ZRX/USD</option>
                        <option value="ETH/USD">XRP/USD</option>
                    </select>
                </div>
            <OrderBook selectedPair={selectedPair}/>
        </div>
    );
};

export default OrderBookWithOptions;
