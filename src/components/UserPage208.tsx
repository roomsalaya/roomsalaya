import React from 'react';
import './UserPage201.css'; // Import CSS file
import AppMenu208 from './AppMenu208';

const UserPage208: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='User-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 208</h3>
            <div className='menu-container'>
                <AppMenu208 />
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
                        <td>นางสาวนูรุลฮุสนี ปารามัล</td>
                        <td>3,200</td>
                        <td>1 เม.ย. 67 ถึง 30 ก.ย. 67</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage208;
