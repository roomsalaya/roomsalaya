import React from 'react';
import './UserPage201.css'; // Import CSS file
import AppMenu226 from './AppMenu226';

const UserPage226: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='User-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 226</h3>
            <div className='menu-container'>
                <AppMenu226 />
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
                        <td>นางสาวปุญญิศา สังข์กล่ำ</td>
                        <td>3,200</td>
                        <td>20 ก.ค. 66 ถึง 31 ธ.ค. 66</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage226;
