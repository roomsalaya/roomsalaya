import React from 'react';
import './UserPage201.css'; // Import CSS file
import AppMenu316 from './AppMenu316';

const UserPage316: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='user-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 316</h3>
            <div className='menu-container'>
                <AppMenu316 />
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

export default UserPage316;
