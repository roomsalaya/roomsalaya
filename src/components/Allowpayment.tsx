import React, { useState } from 'react';
import './AdminPage.css';
import AppMenuAdmin from './AppMenuAdmin';
import Allowpayment201 from './Allowpayment201';
import Allowpayment202 from './Allowpayment202';

const Allowpayment: React.FC = () => {
    const [isHouseInfoVisible, setHouseInfoVisible] = useState(false);

    const toggleHouseInfo = () => {
        setHouseInfoVisible(prevState => !prevState);
    };

    return (
        <div className='AdminPage'>
            <h2>เฉพาะแอดมินอนุญาตชำระ <AppMenuAdmin /></h2>
            <button onClick={toggleHouseInfo}>
                {isHouseInfoVisible ? '201 ขออนุญาตชำระ' : '201 ขออนุญาตชำระ'}
            </button>
            {isHouseInfoVisible && <Allowpayment201 />}
            <pre />
            <button onClick={toggleHouseInfo}>
                {isHouseInfoVisible ? '202 ขออนุญาตชำระ' : '202 ขออนุญาตชำระ'}
            </button>
            {isHouseInfoVisible && <Allowpayment202 />}
            <pre />
        </div>
    );
};

export default Allowpayment;
