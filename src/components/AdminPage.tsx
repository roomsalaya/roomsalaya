import React, { useState } from 'react';
import './AdminPage.css';
import HouseInfo201 from './HouseInfo201';
import AppMenuAdmin from './AppMenuAdmin';
import HouseInfo202 from './HouseInfo202';
import HouseInfo204 from './HouseInfo204';
import HouseInfo205 from './HouseInfo205';
import HouseInfo206 from './HouseInfo206';

const AdminPage: React.FC = () => {
    const [isHouseInfo201Visible, setHouseInfo201Visible] = useState(false);
    const [isHouseInfo202Visible, setHouseInfo202Visible] = useState(false);
    const [isHouseInfo204Visible, setHouseInfo204Visible] = useState(false);
    const [isHouseInfo205Visible, setHouseInfo205Visible] = useState(false);
    const [isHouseInfo206Visible, setHouseInfo206Visible] = useState(false);

    const toggleHouseInfo201 = () => {
        setHouseInfo201Visible(prevState => !prevState);
    };

    const toggleHouseInfo202 = () => {
        setHouseInfo202Visible(prevState => !prevState);
    };

    const toggleHouseInfo204 = () => {
        setHouseInfo204Visible(prevState => !prevState);
    };

    const toggleHouseInfo205 = () => {
        setHouseInfo205Visible(prevState => !prevState);
    };

    const toggleHouseInfo206 = () => {
        setHouseInfo206Visible(prevState => !prevState);
    };

    return (
        <div className='AdminPage'>
            <h2>
                ข้อมูลผู้ดูแล <AppMenuAdmin />
            </h2>
            <button onClick={toggleHouseInfo201}>
                {isHouseInfo201Visible ? 'ปิดข้อมูล 201' : 'เปิดข้อมูล 201'}
            </button>
            {isHouseInfo201Visible && <HouseInfo201 />}
            <pre></pre>
            <button onClick={toggleHouseInfo202}>
                {isHouseInfo202Visible ? 'ปิดข้อมูล 202' : 'เปิดข้อมูล 202'}
            </button>
            {isHouseInfo202Visible && <HouseInfo202 />}
            <pre></pre>
            <button onClick={toggleHouseInfo204}>
                {isHouseInfo204Visible ? 'ปิดข้อมูล 204' : 'เปิดข้อมูล 204'}
            </button>
            {isHouseInfo204Visible && <HouseInfo204 />}
            <pre></pre>
            <button onClick={toggleHouseInfo205}>
                {isHouseInfo205Visible ? 'ปิดข้อมูล 205' : 'เปิดข้อมูล 205'}
            </button>
            {isHouseInfo205Visible && <HouseInfo205 />}
            <pre></pre>
            <button onClick={toggleHouseInfo206}>
                {isHouseInfo206Visible ? 'ปิดข้อมูล 206' : 'เปิดข้อมูล 206'}
            </button>
            {isHouseInfo206Visible && <HouseInfo206 />}
            <pre></pre>
        </div>
    );
};

export default AdminPage;
