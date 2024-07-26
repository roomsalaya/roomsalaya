import React from 'react';
import AppMenu200 from './AppMenu200';
import './UserPage201.css'; // Import CSS file

const UserPage200: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='user-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 200</h3>
            <div className='menu-container'>
                <AppMenu200 />
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
                        <td>น้องเทส</td>
                        <td>3,200</td>
                        <td>1 มิ.ย. 67 ถึง 30 พ.ย. 67</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage200;
