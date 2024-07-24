import React, { useState } from 'react';
import './Allowpayment.css';
import AppMenuAdmin from './AppMenuAdmin';
import Allowpayment201 from './Allowpayment201';
import Allowpayment202 from './Allowpayment202';

const Allowpayment: React.FC = () => {
    const [isHouse201Visible, setHouse201Visible] = useState(false);
    const [isHouse202Visible, setHouse202Visible] = useState(false);

    const toggleHouse201Info = () => {
        setHouse201Visible(prevState => !prevState);
    };

    const toggleHouse202Info = () => {
        setHouse202Visible(prevState => !prevState);
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
        </div>
    );
};

export default Allowpayment;
