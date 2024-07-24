import React from 'react';
import AppMenu202 from './AppMenu202';
import './UserPage201.css'; // นำเข้าไฟล์ CSS
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate

const UserPage202: React.FC = () => {
    const navigate = useNavigate(); // สร้าง navigate

    return (
        <div className='User-container'>
            <h3>ห้อง 202</h3>
            <div className='menu-container'><AppMenu202 /></div>
            <table>
                <thead>
                    <tr>
                        <th>ชื่อ-นามสกุล</th>
                        <th>ราคาห้อง</th>
                        <th>สัญญา</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>น.ส.เกวลิน ศรีสุนนท์</td>
                        <td>3,200</td>
                        <td>5 พ.ย. 63 ถึง 26 ต.ค. 64</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage202;
