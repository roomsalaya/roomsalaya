import React from 'react';
import './UserPage201.css'; // Import CSS file
import AppMenu311 from './AppMenu311';

const UserPage201: React.FC = () => {
    return (
        <div className='User-container'>
            <h3>ห้อง 311</h3>
            <div className='menu-container'><AppMenu311 /></div>
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
                        <td>นายสิรนิชญ์ ขวัญเนตร</td>
                        <td>2,800</td>
                        <td>1 ส.ค. 67 ถึง 31 ม.ค. 68</td>
                    </tr>
                    <tr>
                        <th>ค่าไฟยูนิตละ</th>
                        <th>ค่าน้ำเหมาจ่าย</th>
                    </tr>
                    <tr>
                        <td>9 บาท</td>
                        <td>150 บาท</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage201;
