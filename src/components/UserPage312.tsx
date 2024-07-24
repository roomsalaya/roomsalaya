import React from 'react';
import './UserPage201.css'; // Import CSS file
import AppMenu312 from './AppMenu312';

const UserPage312: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='user-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 312</h3>
            <div className='menu-container'>
                <AppMenu312 />
            </div>
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
                        <td>ไม่มี</td>
                        <td>3,200</td>
                        <td>ไม่มี</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage312;
