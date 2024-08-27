import React, { useContext } from 'react';
import { NotificationContext } from './NotificationContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import './NotificationIcon.css';

const NotificationIcon: React.FC = () => {
    const context = useContext(NotificationContext);

    if (!context) {
        // สามารถ return UI ที่เหมาะสม หรือ null ได้ในกรณีที่ context เป็น undefined
        return null;
    }

    const { notifications } = context;

    return (
        <div className="notification-icon">
            <FontAwesomeIcon icon={faBell} size="2x" />
            {notifications.length > 0 && (
                <span className="notification-count">{notifications.length}</span>
            )}
        </div>
    );
};

export default NotificationIcon;
