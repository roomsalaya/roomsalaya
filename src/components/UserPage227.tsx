import React from 'react';
import './UserPage201.css'; // Import CSS file
import AppMenu227 from './AppMenu227';

const UserPage227: React.FC = () => {
    // const navigate = useNavigate(); // Remove if not used

    return (
        <div className='User-container'> {/* Adjusted class name to follow convention */}
            <h3>ห้อง 227</h3>
            <div className='menu-container'>
                <AppMenu227 />
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
                        <td>นางสาวกิฤติมา โสดา</td>
                        <td>2,500</td>
                        <td>1 มิ.ย. 66 ถึง 30 พ.ย. 66</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage227;
