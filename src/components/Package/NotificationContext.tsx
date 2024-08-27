import React, { createContext, useState, useContext, ReactNode } from 'react';

interface NotificationContextType {
    notifications: string[];
    addNotification: (notification: string) => void;
}

interface NotificationProviderProps {
    children: ReactNode;
}

// เพิ่มการ export ที่นี่
export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
    const [notifications, setNotifications] = useState<string[]>([]);

    const addNotification = (notification: string) => {
        setNotifications([...notifications, notification]);
    };

    return (
        <NotificationContext.Provider value={{ notifications, addNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};
