import React from 'react';
import './UserPage201.css'; // Import CSS file
import AppMenu310 from './AppMenu310';

const UserPage310: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='User-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 310</h3>
            <div className='menu-container'>
                <AppMenu310 />
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
                        <td>นางสาววิชญาพร น้อยนิ่ม</td>
                        <td>3,200</td>
                        <td>1 ม.ค. 65 ถึง 1 ม.ย. 65</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage310;
