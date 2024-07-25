import React, { useState } from 'react';
import './AdminPage.css';
import HouseInfo201 from './HouseInfo201';
import AppMenuAdmin from './AppMenuAdmin';
import HouseInfo202 from './HouseInfo202';
import HouseInfo204 from './HouseInfo204';
import HouseInfo205 from './HouseInfo205';
import HouseInfo206 from './HouseInfo206';
import HouseInfo207 from './HouseInfo207';
import HouseInfo208 from './HouseInfo208';
import HouseInfo310 from './HouseInfo310';
import HouseInfo309 from './HouseInfo309';
import HouseInfo311 from './HouseInfo311';
import HouseInfo312 from './HouseInfo312';
import HouseInfo313 from './HouseInfo313';
import HouseInfo314 from './HouseInfo314';
import HouseInfo315 from './HouseInfo315';
import HouseInfo316 from './HouseInfo316';
import HouseInfo225 from './HouseInfo225';
import HouseInfo226 from './HouseInfo226';
import HouseInfo227 from './HouseInfo227';
import HouseInfo228 from './HouseInfo228';
import HouseInfo329 from './HouseInfo329';
import HouseInfo330 from './HouseInfo330';
import HouseInfo331 from './HouseInfo331';
import HouseInfo332 from './HouseInfo332';

const AdminPage: React.FC = () => {
    const [isHouseInfo201Visible, setHouseInfo201Visible] = useState(false);
    const [isHouseInfo202Visible, setHouseInfo202Visible] = useState(false);
    const [isHouseInfo204Visible, setHouseInfo204Visible] = useState(false);
    const [isHouseInfo205Visible, setHouseInfo205Visible] = useState(false);
    const [isHouseInfo206Visible, setHouseInfo206Visible] = useState(false);
    const [isHouseInfo207Visible, setHouseInfo207Visible] = useState(false);
    const [isHouseInfo208Visible, setHouseInfo208Visible] = useState(false);
    const [isHouseInfo309Visible, setHouseInfo309Visible] = useState(false);
    const [isHouseInfo310Visible, setHouseInfo310Visible] = useState(false);
    const [isHouseInfo311Visible, setHouseInfo311Visible] = useState(false);
    const [isHouseInfo312Visible, setHouseInfo312Visible] = useState(false);
    const [isHouseInfo313Visible, setHouseInfo313Visible] = useState(false);
    const [isHouseInfo314Visible, setHouseInfo314Visible] = useState(false);
    const [isHouseInfo315Visible, setHouseInfo315Visible] = useState(false);
    const [isHouseInfo316Visible, setHouseInfo316Visible] = useState(false);
    const [isHouseInfo225Visible, setHouseInfo225Visible] = useState(false);
    const [isHouseInfo226Visible, setHouseInfo226Visible] = useState(false);
    const [isHouseInfo227Visible, setHouseInfo227Visible] = useState(false);
    const [isHouseInfo228Visible, setHouseInfo228Visible] = useState(false);
    const [isHouseInfo329Visible, setHouseInfo329Visible] = useState(false);
    const [isHouseInfo330Visible, setHouseInfo330Visible] = useState(false);
    const [isHouseInfo331Visible, setHouseInfo331Visible] = useState(false);
    const [isHouseInfo332Visible, setHouseInfo332Visible] = useState(false);


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
    const toggleHouseInfo207 = () => {
        setHouseInfo207Visible(prevState => !prevState);
    }
    const toggleHouseInfo208 = () => {
        setHouseInfo208Visible(prevState => !prevState);
    };
    const toggleHouseInfo309 = () => {
        setHouseInfo309Visible(prevState => !prevState);
    };
    const toggleHouseInfo310 = () => {
        setHouseInfo310Visible(prevState => !prevState);
    };
    const toggleHouseInfo311 = () => {
        setHouseInfo311Visible(prevState => !prevState);
    };
    const toggleHouseInfo312 = () => {
        setHouseInfo312Visible(prevState => !prevState);
    };
    const toggleHouseInfo313 = () => {
        setHouseInfo313Visible(prevState => !prevState);
    }
    const toggleHouseInfo314 = () => {
        setHouseInfo314Visible(prevState => !prevState);
    };
    const toggleHouseInfo315 = () => {
        setHouseInfo315Visible(prevState => !prevState);
    };
    const toggleHouseInfo316 = () => {
        setHouseInfo316Visible(prevState => !prevState);
    };
    const toggleHouseInfo225 = () => {
        setHouseInfo225Visible(prevState => !prevState);
    };
    const toggleHouseInfo226 = () => {
        setHouseInfo226Visible(prevState => !prevState);
    };
    const toggleHouseInfo227 = () => {
        setHouseInfo227Visible(prevState => !prevState);
    }
    const toggleHouseInfo228 = () => {
        setHouseInfo228Visible(prevState => !prevState);
    }
    const toggleHouseInfo329 = () => {
        setHouseInfo329Visible(prevState => !prevState);
    }
    const toggleHouseInfo330 = () => {
        setHouseInfo330Visible(prevState => !prevState);
    }
    const toggleHouseInfo331 = () => {
        setHouseInfo331Visible(prevState => !prevState);
    }
    const toggleHouseInfo332 = () => {
        setHouseInfo332Visible(prevState => !prevState);
    }


    return (
        <div className='AdminPage'>
            <h2>
                ข้อมูลแจ้งหนี้ผู้เช่า <AppMenuAdmin />
            </h2>
            <h2>
                ตึกสำนักงาน
            </h2>
            <button className='button' onClick={toggleHouseInfo201}>
                {isHouseInfo201Visible ? 'ปิดข้อมูล 201' : 'เปิดข้อมูล 201'}
            </button>
            {isHouseInfo201Visible && <HouseInfo201 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo202}>
                {isHouseInfo202Visible ? 'ปิดข้อมูล 202' : 'เปิดข้อมูล 202'}
            </button>
            {isHouseInfo202Visible && <HouseInfo202 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo204}>
                {isHouseInfo204Visible ? 'ปิดข้อมูล 204' : 'เปิดข้อมูล 204'}
            </button>
            {isHouseInfo204Visible && <HouseInfo204 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo205}>
                {isHouseInfo205Visible ? 'ปิดข้อมูล 205' : 'เปิดข้อมูล 205'}
            </button>
            {isHouseInfo205Visible && <HouseInfo205 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo206}>
                {isHouseInfo206Visible ? 'ปิดข้อมูล 206' : 'เปิดข้อมูล 206'}
            </button>
            {isHouseInfo206Visible && <HouseInfo206 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo207}>
                {isHouseInfo207Visible ? 'ปิดข้อมูล 207' : 'เปิดข้อมูล 207'}
            </button>
            {isHouseInfo207Visible && <HouseInfo207 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo208}>
                {isHouseInfo208Visible ? 'ปิดข้อมูล 208' : 'เปิดข้อมูล 208'}
            </button>
            {isHouseInfo208Visible && <HouseInfo208 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo309}>
                {isHouseInfo309Visible ? 'ปิดข้อมูล 309' : 'เปิดข้อมูล 309'}
            </button>
            {isHouseInfo309Visible && <HouseInfo309 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo310}>
                {isHouseInfo310Visible ? 'ปิดข้อมูล 310' : 'เปิดข้อมูล 310'}
            </button>
            {isHouseInfo310Visible && <HouseInfo310 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo311}>
                {isHouseInfo311Visible ? 'ปิดข้อมูล 311' : 'เปิดข้อมูล 311'}
            </button>
            {isHouseInfo311Visible && <HouseInfo311 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo312}>
                {isHouseInfo312Visible ? 'ปิดข้อมูล 312' : 'เปิดข้อมูล 312'}
            </button>
            {isHouseInfo312Visible && <HouseInfo312 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo313}>
                {isHouseInfo313Visible ? 'ปิดข้อมูล 313' : 'เปิดข้อมูล 313'}
            </button>
            {isHouseInfo313Visible && <HouseInfo313 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo314}>
                {isHouseInfo314Visible ? 'ปิดข้อมูล 314' : 'เปิดข้อมูล 314'}
            </button>
            {isHouseInfo314Visible && <HouseInfo314 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo315}>
                {isHouseInfo315Visible ? 'ปิดข้อมูล 315' : 'เปิดข้อมูล 315'}
            </button>
            {isHouseInfo315Visible && <HouseInfo315 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo316}>
                {isHouseInfo316Visible ? 'ปิดข้อมูล 316' : 'เปิดข้อมูล 316'}
            </button>
            {isHouseInfo316Visible && <HouseInfo316 />}
            <pre></pre>

            <h2>
                ตึกซูชิ
            </h2>

            <button className='button' onClick={toggleHouseInfo225}>
                {isHouseInfo225Visible ? 'ปิดข้อมูล 225' : 'เปิดข้อมูล 225'}
            </button>
            {isHouseInfo225Visible && <HouseInfo225 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo226}>
                {isHouseInfo226Visible ? 'ปิดข้อมูล 226' : 'เปิดข้อมูล 226'}
            </button>
            {isHouseInfo226Visible && <HouseInfo226 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo227}>
                {isHouseInfo227Visible ? 'ปิดข้อมูล 227' : 'เปิดข้อมูล 227'}
            </button>
            {isHouseInfo227Visible && <HouseInfo227 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo228}>
                {isHouseInfo228Visible ? 'ปิดข้อมูล 228' : 'เปิดข้อมูล 228'}
            </button>
            {isHouseInfo228Visible && <HouseInfo228 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo329}>
                {isHouseInfo329Visible ? 'ปิดข้อมูล 329' : 'เปิดข้อมูล 329'}
            </button>
            {isHouseInfo329Visible && <HouseInfo329 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo330}>
                {isHouseInfo330Visible ? 'ปิดข้อมูล 330' : 'เปิดข้อมูล 330'}
            </button>
            {isHouseInfo330Visible && <HouseInfo330 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo331}>
                {isHouseInfo331Visible ? 'ปิดข้อมูล 331' : 'เปิดข้อมูล 331'}
            </button>
            {isHouseInfo331Visible && <HouseInfo331 />}
            <pre></pre>

            <button className='button' onClick={toggleHouseInfo332}>
                {isHouseInfo329Visible ? 'ปิดข้อมูล 332' : 'เปิดข้อมูล 332'}
            </button>
            {isHouseInfo332Visible && <HouseInfo332 />}
            <pre></pre>
        </div>
    );
};

export default AdminPage;
