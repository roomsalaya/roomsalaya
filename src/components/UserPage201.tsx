import React from 'react';
import AppMenu201 from './AppMenu201';
import './UserPage201.css'; // Import CSS file

const UserPage201: React.FC = () => {
    return (
        <div className='User-container'>
            <h3>ห้อง 201</h3>
            <div className='menu-container'><AppMenu201 /></div>
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
                        <td>น.ส.ศศิกาญจ์ ทูดารี</td>
                        <td>3,200</td>
                        <td>5 พ.ย. 63 ถึง 26 ต.ค. 64</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage201;
