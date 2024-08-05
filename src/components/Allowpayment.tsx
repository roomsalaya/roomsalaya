import React, { useState } from 'react';
import './Allowpayment.css';
import AppMenuAdmin from './AppMenuAdmin';
import Allowpayment201 from './Allowpayment201';
import Allowpayment202 from './Allowpayment202';
import Allowpayment204 from './Allowpayment204';
import Allowpayment206 from './Allowpayment206';
import Allowpayment205 from './Allowpayment205';
import Allowpayment207 from './Allowpayment207';
import Allowpayment208 from './Allowpayment208';
import Allowpayment309 from './Allowpayment309';
import Allowpayment310 from './Allowpayment310';
import Allowpayment311 from './Allowpayment311';
import Allowpayment312 from './Allowpayment312';
import Allowpayment313 from './Allowpayment313';
import Allowpayment314 from './Allowpayment314';
import Allowpayment315 from './Allowpayment315';
import Allowpayment316 from './Allowpayment316';
import Allowpayment225 from './Allowpayment225';
import Allowpayment226 from './Allowpayment226';
import Allowpayment227 from './Allowpayment227';
import Allowpayment228 from './Allowpayment228';
import Allowpayment330 from './Allowpayment330';
import Allowpayment331 from './Allowpayment331';
import Allowpayment332 from './Allowpayment332';
import Allowpayment200 from './Allowpayment200';
import Allowpayment329 from './Allowpayment329';

const Allowpayment: React.FC = () => {
    
    const [isHouse201Visible, setHouse201Visible] = useState(false);
    const [isHouse202Visible, setHouse202Visible] = useState(false);
    const [isHouse204Visible, setHouse204Visible] = useState(false);
    const [isHouse205Visible, setHouse205Visible] = useState(false);
    const [isHouse206Visible, setHouse206Visible] = useState(false);
    const [isHouse207Visible, setHouse207Visible] = useState(false);
    const [isHouse208Visible, setHouse208Visible] = useState(false);
    const [isHouse309Visible, setHouse309Visible] = useState(false);
    const [isHouse310Visible, setHouse310Visible] = useState(false);
    const [isHouse311Visible, setHouse311Visible] = useState(false);
    const [isHouse312Visible, setHouse312Visible] = useState(false);
    const [isHouse313Visible, setHouse313Visible] = useState(false);
    const [isHouse314Visible, setHouse314Visible] = useState(false);
    const [isHouse315Visible, setHouse315Visible] = useState(false);
    const [isHouse316Visible, setHouse316Visible] = useState(false);
    const [isHouse225Visible, setHouse225Visible] = useState(false);
    const [isHouse226Visible, setHouse226Visible] = useState(false);
    const [isHouse227Visible, setHouse227Visible] = useState(false);
    const [isHouse228Visible, setHouse228Visible] = useState(false);
    const [isHouse329Visible, setHouse329Visible] = useState(false);
    const [isHouse330Visible, setHouse330Visible] = useState(false);
    const [isHouse331Visible, setHouse331Visible] = useState(false);
    const [isHouse332Visible, setHouse332Visible] = useState(false);
    const [isHouse200Visible, setHouse200Visible] = useState(false);

    const toggleHouse200Info = () => {
        setHouse200Visible(prevState => !prevState);
    };
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
    const toggleHouse207Info = () => {
        setHouse207Visible(prevState => !prevState);
    };
    const toggleHouse208Info = () => {
        setHouse208Visible(prevState => !prevState);
    };
    const toggleHouse309Info = () => {
        setHouse309Visible(prevState => !prevState);
    };
    const toggleHouse310Info = () => {
        setHouse310Visible(prevState => !prevState);
    };
    const toggleHouse311Info = () => {
        setHouse311Visible(prevState => !prevState);
    };
    const toggleHouse312Info = () => {
        setHouse312Visible(prevState => !prevState);
    };
    const toggleHouse313Info = () => {
        setHouse313Visible(prevState => !prevState);
    };
    const toggleHouse314Info = () => {
        setHouse314Visible(prevState => !prevState);
    };
    const toggleHouse315Info = () => {
        setHouse315Visible(prevState => !prevState);
    };
    const toggleHouse316Info = () => {
        setHouse316Visible(prevState => !prevState);
    };
    const toggleHouse225Info = () => {
        setHouse225Visible(prevState => !prevState);
    };
    const toggleHouse226Info = () => {
        setHouse226Visible(prevState => !prevState);
    };
    const toggleHouse227Info = () => {
        setHouse227Visible(prevState => !prevState);
    };
    const toggleHouse228Info = () => {
        setHouse228Visible(prevState => !prevState);
    };
    const toggleHouse329Info = () => {
        setHouse329Visible(prevState => !prevState);
    };
    const toggleHouse330Info = () => {
        setHouse330Visible(prevState => !prevState);
    };
    const toggleHouse331Info = () => {
        setHouse331Visible(prevState => !prevState);
    };
    const toggleHouse332Info = () => {
        setHouse332Visible(prevState => !prevState);
    };


    return (
        <div className='AdminPage'>
            <h2>เฉพาะแอดมินอนุญาตชำระ <AppMenuAdmin /></h2>
            <div className='allow-payment-section'>
                <h2>
                    ตึกสำนักงาน
                </h2>
                <button className='button' onClick={toggleHouse200Info}>
                    {isHouse200Visible ? 'ซ่อน 200 ขออนุญาตชำระ' : '200 ขออนุญาตชำระ'}
                </button>
                {isHouse200Visible && <Allowpayment200 />}
                <pre />

                <button className='button' onClick={toggleHouse201Info}>
                    {isHouse201Visible ? 'ซ่อน 201 ขออนุญาตชำระ' : '201 ขออนุญาตชำระ'}
                </button>
                {isHouse201Visible && <Allowpayment201 />}
                <pre />

                <button className='button' onClick={toggleHouse202Info}>
                    {isHouse202Visible ? 'ซ่อน 202 ขออนุญาตชำระ' : '202 ขออนุญาตชำระ'}
                </button>
                {isHouse202Visible && <Allowpayment202 />}
                <pre />

                <button className='button' onClick={toggleHouse204Info}>
                    {isHouse204Visible ? 'ซ่อน 204 ขออนุญาตชำระ' : '204 ขออนุญาตชำระ'}
                </button>
                {isHouse204Visible && <Allowpayment204 />}
                <pre />

                <button className='button' onClick={toggleHouse205Info}>
                    {isHouse205Visible ? 'ซ่อน 205 ขออนุญาตชำระ' : '205 ขออนุญาตชำระ'}
                </button>
                {isHouse205Visible && <Allowpayment205 />}
                <pre />

                <button className='button' onClick={toggleHouse206Info}>
                    {isHouse206Visible ? 'ซ่อน 206 ขออนุญาตชำระ' : '206 ขออนุญาตชำระ'}
                </button>
                {isHouse206Visible && <Allowpayment206 />}
                <pre />

                <button className='button' onClick={toggleHouse207Info}>
                    {isHouse207Visible ? 'ซ่อน 207 ขออนุญาตชำระ' : '207 ขออนุญาตชำระ'}
                </button>
                {isHouse207Visible && <Allowpayment207 />}
                <pre />

                <button className='button' onClick={toggleHouse208Info}>
                    {isHouse208Visible ? 'ซ่อน 208 ขออนุญาตชำระ' : '208 ขออนุญาตชำระ'}
                </button>
                {isHouse208Visible && <Allowpayment208 />}
                <pre />

                <button className='button' onClick={toggleHouse309Info}>
                    {isHouse309Visible ? 'ซ่อน 309 ขออนุญาตชำระ' : '309 ขออนุญาตชำระ'}
                </button>
                {isHouse309Visible && <Allowpayment309 />}
                <pre />

                <button className='button' onClick={toggleHouse310Info}>
                    {isHouse310Visible ? 'ซ่อน 310 ขออนุญาตชำระ' : '310 ขออนุญาตชำระ'}
                </button>
                {isHouse310Visible && <Allowpayment310 />}
                <pre />

                <button className='button' onClick={toggleHouse311Info}>
                    {isHouse311Visible ? 'ซ่อน 311 ขออนุญาตชำระ' : '311 ขออนุญาตชำระ'}
                </button>
                {isHouse311Visible && <Allowpayment311 />}
                <pre />

                <button className='button' onClick={toggleHouse312Info}>
                    {isHouse312Visible ? 'ซ่อน 312 ขออนุญาตชำระ' : '312 ขออนุญาตชำระ'}
                </button>
                {isHouse312Visible && <Allowpayment312 />}
                <pre />

                <button className='button' onClick={toggleHouse313Info}>
                    {isHouse313Visible ? 'ซ่อน 313 ขออนุญาตชำระ' : '313 ขออนุญาตชำระ'}
                </button>
                {isHouse313Visible && <Allowpayment313 />}
                <pre />

                <button className='button' onClick={toggleHouse314Info}>
                    {isHouse314Visible ? 'ซ่อน 314 ขออนุญาตชำระ' : '314 ขออนุญาตชำระ'}
                </button>
                {isHouse314Visible && <Allowpayment314 />}
                <pre />

                <button className='button' onClick={toggleHouse315Info}>
                    {isHouse315Visible ? 'ซ่อน 315 ขออนุญาตชำระ' : '315 ขออนุญาตชำระ'}
                </button>
                {isHouse315Visible && <Allowpayment315 />}
                <pre />

                <button className='button' onClick={toggleHouse316Info}>
                    {isHouse316Visible ? 'ซ่อน 316 ขออนุญาตชำระ' : '316 ขออนุญาตชำระ'}
                </button>
                {isHouse316Visible && <Allowpayment316 />}
                <pre />

                <h2>
                    ตึกซูชิ
                </h2>

                <button className='button' onClick={toggleHouse225Info}>
                    {isHouse225Visible ? 'ซ่อน 225 ขออนุญาตชำระ' : '225 ขออนุญาตชำระ'}
                </button>
                {isHouse225Visible && <Allowpayment225 />}
                <pre />

                <button className='button' onClick={toggleHouse226Info}>
                    {isHouse226Visible ? 'ซ่อน 226 ขออนุญาตชำระ' : '226 ขออนุญาตชำระ'}
                </button>
                {isHouse226Visible && <Allowpayment226 />}
                <pre />

                <button className='button' onClick={toggleHouse227Info}>
                    {isHouse227Visible ? 'ซ่อน 227 ขออนุญาตชำระ' : '227 ขออนุญาตชำระ'}
                </button>
                {isHouse227Visible && <Allowpayment227 />}
                <pre />

                <button className='button' onClick={toggleHouse228Info}>
                    {isHouse228Visible ? 'ซ่อน 228 ขออนุญาตชำระ' : '228 ขออนุญาตชำระ'}
                </button>
                {isHouse228Visible && <Allowpayment228 />}
                <pre />

                <button className='button' onClick={toggleHouse329Info}>
                    {isHouse329Visible ? 'ซ่อน 329 ขออนุญาตชำระ' : '329 ขออนุญาตชำระ'}
                </button>
                {isHouse329Visible && <Allowpayment329 />}
                <pre />

                <button className='button' onClick={toggleHouse330Info}>
                    {isHouse330Visible ? 'ซ่อน 330 ขออนุญาตชำระ' : '330 ขออนุญาตชำระ'}
                </button>
                {isHouse330Visible && <Allowpayment330 />}
                <pre />

                <button className='button' onClick={toggleHouse331Info}>
                    {isHouse331Visible ? 'ซ่อน 331 ขออนุญาตชำระ' : '331 ขออนุญาตชำระ'}
                </button>
                {isHouse331Visible && <Allowpayment331 />}
                <pre />

                <button className='button' onClick={toggleHouse332Info}>
                    {isHouse332Visible ? 'ซ่อน 332 ขออนุญาตชำระ' : '332 ขออนุญาตชำระ'}
                </button>
                {isHouse332Visible && <Allowpayment332 />}
                <pre />
            </div>
        </div>
    );
};

export default Allowpayment;
