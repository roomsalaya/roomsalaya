import React from 'react';
import './UserPage201.css'; // Import CSS file
import AppMenu314 from './AppMenu314';

const UserPage314: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='User-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 314</h3>
            <div className='menu-container'>
                <AppMenu314 />
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
                        <td>นางสาวปรินดา บุญก่อเกื้อ</td>
                        <td>3,200</td>
                        <td>1 ส.ค. 66 ถึง 30 ม.ค. 67</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage314;
