import React from 'react';
import AppMenu202 from './AppMenu202';
import './UserPage201.css'; // Import CSS file

const UserPage202: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='user-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 202</h3>
            <div className='menu-container'>
                <AppMenu202 />
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
