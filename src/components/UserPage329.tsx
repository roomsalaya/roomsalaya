import React from 'react';
import './UserPage201.css'; // Import CSS file
import AppMenu329 from './AppMenu329';

const UserPage329: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='user-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 329</h3>
            <div className='menu-container'>
                <AppMenu329 />
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
                        <td>นางสาวนภกตน์ เทศเกิด</td>
                        <td>3,500</td>
                        <td>1 ส.ค. 67 ถึง 31 ม.ค. 67</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage329;
