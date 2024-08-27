import React from 'react';
import './UserPage201.css'; // Import CSS file
import AppMenu332 from './AppMenu332';

const UserPage332: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='User-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 332</h3>
            <div className='menu-container'>
                <AppMenu332 />
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
                        <td>นางสาวพรพิมล รักจ้อย</td>
                        <td>3,200</td>
                        <td>1 ก.ค. 67 ถึง 31 ธ.ค. 67</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage332;
