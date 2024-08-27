import React from 'react';
import './UserPage201.css'; // Import CSS file
import AppMenu225 from './AppMenu225';

const UserPage225: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='User-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 225</h3>
            <div className='menu-container'>
                <AppMenu225 />
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
                        <td>นางสาวสิริญาภรณ์ แก้วนิ่ม</td>
                        <td>3,500</td>
                        <td>1 พ.ค. 66 ถึง 31 ต.ค. 66</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage225;
