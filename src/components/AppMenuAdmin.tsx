import React, { useState } from 'react';
import { Menu, Button, Dropdown } from 'antd';
import {
    DownOutlined,
    LogoutOutlined,
    IssuesCloseOutlined,
} from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom'; // Import Link and useNavigate for navigation
import './AppMenuAdmin.css';

const AppMenuAdmin: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate for navigation

    const handleMenuClick = (e: any) => {
        if (e.key === '5') {
            // Handle logout
            handleLogout();
        } else {
            console.log('Menu clicked', e);
            setVisible(false);
        }
    };

    const handleVisibleChange = (flag: boolean) => {
        setVisible(flag);
    };

    const handleLogout = () => {
        // Clear user session data or perform logout logic here
        // Example: localStorage.removeItem('user');

        // Redirect to the login page
        navigate('/');
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<IssuesCloseOutlined />} >
                <Link to="/admin">แจ้งหนี้</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<IssuesCloseOutlined />} >
                <Link to="/allowpayment">สถานะรออนุมัติ</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<LogoutOutlined />} style={{ color: 'red' }}>
                ออกจากระบบ
            </Menu.Item>
        </Menu>
    );

    return (
        <div className='menu-container'>
            <Dropdown overlay={menu} onVisibleChange={handleVisibleChange} visible={visible}>
                <Button>
                    เมนูใช้งาน <DownOutlined />
                </Button>
            </Dropdown>
        </div>
    );
};

export default AppMenuAdmin;
