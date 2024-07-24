import React from 'react';
import './UserPage201.css'; // Import CSS file
import AppMenu311 from './AppMenu311';

const UserPage311: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='user-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 311</h3>
            <div className='menu-container'>
                <AppMenu311 />
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
                        <td>นางสาวนูรฟาเดีย สะแอ</td>
                        <td>2,500</td>
                        <td>1 พ.ค. 67 ถึง 31 ต.ค. 67</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage311;
