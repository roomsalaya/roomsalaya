import React from 'react';
import './UserPage201.css'; // Import CSS file
import AppMenu315 from './AppMenu315';

const UserPage315: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='user-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 315</h3>
            <div className='menu-container'>
                <AppMenu315 />
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
                        <td>นายนวพล คำฮี้</td>
                        <td>2,500</td>
                        <td>1 ก.ค. 67 ถึง 31 ธ.ค. 67</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage315;
