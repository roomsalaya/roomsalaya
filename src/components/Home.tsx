import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home: React.FC = () => {
    return (
        <div className='home-container'>
            <h2>ระบบหอพักณิชชาวีร์</h2>
            <p>เข้าสู่ระบบด้วยอีเมลและรหัสที่แอดมินแจ้ง</p>
            <Link to="/login">Login Admin</Link>
            <Link to="/loginuser">เข้าสู่ระบบผู้เช่า</Link>
        </div>
    );
};

export default Home;
