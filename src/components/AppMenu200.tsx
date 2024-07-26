import React, { useState } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import {
    AppstoreOutlined,
    NotificationOutlined,
    UserOutlined,
    DownOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';
import './AppMenu201.css';

const AppMenu200: React.FC = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleMenuClick = (e: any) => {
        if (e.key === '4') {
            handleLogout();
        } else {
            console.log('Menu clicked', e);
            setOpen(false);
        }
    };

    const handleOpenChange = (flag: boolean) => {
        setOpen(flag);
    };

    const handleLogout = () => {
        navigate('/');
    };

    const menuItems = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<AppstoreOutlined />}>
                <Link to="/room200">รายการค้างชำระ</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<NotificationOutlined />}>
                <Link to="/bank200">แจ้งชำระค่าเช่า</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
                <Link to="/userpage200">บัญชี</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<LogoutOutlined style={{ color: 'red' }} />}>
                ออกจากระบบ
            </Menu.Item>
        </Menu>
    );

    return (
        <div className='menu-container'>
            <Dropdown
                overlay={menuItems}
                trigger={['click']}
                getPopupContainer={() => document.body}
                onVisibleChange={handleOpenChange}
                visible={open}
            >
                <Button>
                    เมนู <DownOutlined />
                </Button>
            </Dropdown>
        </div>
    );
};

export default AppMenu200;
