import React from 'react';
import './UserPage201.css'; // Import CSS file
import AppMenu312 from './AppMenu312';

const UserPage207: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='user-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 207</h3>
            <div className='menu-container'>
                <AppMenu312 />
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
                        <td>นางสาวณิชา เข็มวัน</td>
                        <td>3,200</td>
                        <td>1 ส.ค. 67 ถึง 31 ม.ค. 68</td>
                    </tr>
                    <tr>
                        <th>ค่าไฟยูนิตละ</th>
                        <th>ค่าน้ำเหมาจ่าย</th>
                    </tr>
                    <tr>
                        <td>9 บาท</td>
                        <td>100 บาท</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage207;
