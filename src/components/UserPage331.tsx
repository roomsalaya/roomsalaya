import React from 'react';
import './UserPage201.css'; // Import CSS file
import AppMenu331 from './AppMenu331';

const UserPage331: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='user-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 331</h3>
            <div className='menu-container'>
                <AppMenu331 />
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
                        <td>นางสาวธาริณี สุโกสิ</td>
                        <td>2,500</td>
                        <td>14 ก.ค. 66 ถึง 31 ธ.ค. 66</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage331;
