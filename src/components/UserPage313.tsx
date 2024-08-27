import React from 'react';
import './UserPage201.css'; // Import CSS file
import AppMenu313 from './AppMenu313';

const UserPage313: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='User-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 313</h3>
            <div className='menu-container'>
                <AppMenu313 />
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
                        <td>นายพชร แก้วสว่าง</td>
                        <td>3,500</td>
                        <td>1 ส.ค. 66 ถึง 30 ม.ค. 67</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage313;
