import React, { useState } from 'react';
import './Allowpayment.css';
import AppMenuAdmin from './AppMenuAdmin';
import Allowpayment201 from './Allowpayment201';
import Allowpayment202 from './Allowpayment202';
import Allowpayment204 from './Allowpayment204';
import Allowpayment206 from './Allowpayment206';
import Allowpayment205 from './Allowpayment205';

const Allowpayment: React.FC = () => {
    const [isHouse201Visible, setHouse201Visible] = useState(false);
    const [isHouse202Visible, setHouse202Visible] = useState(false);
    const [isHouse204Visible, setHouse204Visible] = useState(false);
    const [isHouse205Visible, setHouse205Visible] = useState(false);
    const [isHouse206Visible, setHouse206Visible] = useState(false);


    const toggleHouse201Info = () => {
        setHouse201Visible(prevState => !prevState);
    };

    const toggleHouse202Info = () => {
        setHouse202Visible(prevState => !prevState);
    };

    const toggleHouse204Info = () => {
        setHouse204Visible(prevState => !prevState);
    };

    const toggleHouse205Info = () => {
        setHouse205Visible(prevState => !prevState);
    };

    const toggleHouse206Info = () => {
        setHouse206Visible(prevState => !prevState);
    };

    return (
        <div className='AdminPage'>
            <h2>เฉพาะแอดมินอนุญาตชำระ <AppMenuAdmin /></h2>
            <div className='allow-payment-section'>
                <button onClick={toggleHouse201Info}>
                    {isHouse201Visible ? 'ซ่อน 201 ขออนุญาตชำระ' : '201 ขออนุญาตชำระ'}
                </button>
                {isHouse201Visible && <Allowpayment201 />}
            </div>
            <div className='allow-payment-section'>
                <button onClick={toggleHouse202Info}>
                    {isHouse202Visible ? 'ซ่อน 202 ขออนุญาตชำระ' : '202 ขออนุญาตชำระ'}
                </button>
                {isHouse202Visible && <Allowpayment202 />}
            </div>
            <div className='allow-payment-section'>
                <button onClick={toggleHouse204Info}>
                    {isHouse204Visible ? 'ซ่อน 204 ขออนุญาตชำระ' : '204 ขออนุญาตชำระ'}
                </button>
                {isHouse204Visible && <Allowpayment204 />}
            </div>
            <div className='allow-payment-section'>
                <button onClick={toggleHouse205Info}>
                    {isHouse205Visible ? 'ซ่อน 205 ขออนุญาตชำระ' : '205 ขออนุญาตชำระ'}
                </button>
                {isHouse205Visible && <Allowpayment205 />}
            </div>
            <div className='allow-payment-section'>
                <button onClick={toggleHouse206Info}>
                    {isHouse206Visible ? 'ซ่อน 206 ขออนุญาตชำระ' : '206 ขออนุญาตชำระ'}
                </button>
                {isHouse206Visible && <Allowpayment206 />}
            </div>
        </div>
    );
};

export default Allowpayment;
