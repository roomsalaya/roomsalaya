import React from 'react';
import './UserPage201.css'; // Import CSS file
import AppMenu207 from './AppMenu207';

const UserPage207: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='user-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 207</h3>
            <div className='menu-container'>
                <AppMenu207 />
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
                        <td>-</td>
                        <td>2,800</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage207;
