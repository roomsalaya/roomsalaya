import React from 'react';
import './UserPage201.css'; // Import CSS file
import AppMenu309 from './AppMenu309';

const UserPage309: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='user-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 309</h3>
            <div className='menu-container'>
                <AppMenu309 />
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
                        <td>นางสาวณัฐนรี มุทิตสกุล</td>
                        <td>3,200</td>
                        <td>1 ก.ค. 67 ถึง 31 ธ.ค. 67</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage309;
