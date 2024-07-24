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

const AppMenu202: React.FC = () => {
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

    const menuItems = [
        {
            key: '1',
            icon: <AppstoreOutlined />,
            label: <Link to="/room202">รายการค้างชำระ</Link>,
        },
        {
            key: '2',
            icon: <NotificationOutlined />,
            label: <Link to="/bank202">แจ้งชำระค่าเช่า</Link>,
        },
        {
            key: '3',
            icon: <UserOutlined />,
            label: <Link to="/userpage202">บัญชี</Link>,
        },
        {
            key: '4',
            icon: <LogoutOutlined style={{ color: 'red' }} />,
            label: 'ออกจากระบบ',
        },
    ];

    return (
        <div className='menu-container'>
            <Dropdown
                menu={{ items: menuItems, onClick: handleMenuClick }}
                trigger={['click']}
                getPopupContainer={() => document.body} // ตั้งค่าให้เมนูดรอปดาวน์ถูกเพิ่มใน body
                onOpenChange={handleOpenChange}
                open={open}
            >
                <Button>
                    เมนู <DownOutlined />
                </Button>
            </Dropdown>
        </div>
    );
};

export default AppMenu202;
