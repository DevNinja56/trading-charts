import React, { useState } from 'react';
import CandlestickChart from './CandleChart';

const ChartWithOptions = () => {
    const [selectedPair, setSelectedPair] = useState('BTC/USD');
    const [timeFrame, setTimeFrame] = useState('1m');

    const handlePairChange = (event) => {
        setSelectedPair(event.target.value);
    };
    
    const handleTimeFrameClick = (value) => {
        if(value === timeFrame){
            return;
        }
        setTimeFrame(value);
    }

    const getTimeFrameClassNames = (value) => {
        return value === timeFrame ? 'time-frame-span selected' : 'time-frame-span'
    }

    return (
        <div>
            <h2 style={{paddingTop: '20px'}}>Live Candlestick Chart <span style={{color: 'red'}}>({selectedPair})</span></h2>
            <hr/>
            <div className='flex-container'>
                <div className='time-frame-container'>
                    <div className='time-frame-wrapper'>
                        <span>Time: </span>
                        <span className={getTimeFrameClassNames('1m')} onClick={() => handleTimeFrameClick('1m')}>1m</span>
                        <span className={getTimeFrameClassNames('5m')} onClick={() => handleTimeFrameClick('5m')}>5m</span>
                        <span className={getTimeFrameClassNames('15m')} onClick={() => handleTimeFrameClick('15m')}>15m</span>
                        <span className={getTimeFrameClassNames('1h')} onClick={() => handleTimeFrameClick('1h')}>1h</span>
                        <span className={getTimeFrameClassNames('12h')} onClick={() => handleTimeFrameClick('12h')}>12h</span>
                    </div>
                </div>
                <div className='custom-select-container'>
                    <select className='custom-select' value={selectedPair} onChange={handlePairChange}>
                        <option value="BTC/USD">BTC/USD</option>
                        <option value="ETH/USD">ETH/BTC</option>
                        <option value="BTC/USD">ZRX/USD</option>
                        <option value="ETH/USD">XRP/USD</option>
                    </select>
                </div>
            </div>
            <hr/>
            <CandlestickChart selectedPair={selectedPair} timeFrame={timeFrame} />
        </div>
    );
};

export default ChartWithOptions;
