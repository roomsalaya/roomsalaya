import React from 'react';
import './UserPage201.css'; // Import CSS file
import AppMenu205 from './AppMenu205';

const UserPage205: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='user-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 205</h3>
            <div className='menu-container'>
                <AppMenu205 />
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
                        <td>นายภัทรพล อร่ำเรือง</td>
                        <td>3,500</td>
                        <td>1 มิ.ย. 67 ถึง 30 พ.ย. 67</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage205;
