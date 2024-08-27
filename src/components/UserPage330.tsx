import React from 'react';
import './UserPage201.css'; // Import CSS file
import AppMenu330 from './AppMenu330';

const UserPage330: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='User-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 330</h3>
            <div className='menu-container'>
                <AppMenu330 />
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
                        <td>นายกันทรากร กิมกัว</td>
                        <td>3,200</td>
                        <td>8 ก.ค. 66 ถึง 8 ธ.ค. 66</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage330;
