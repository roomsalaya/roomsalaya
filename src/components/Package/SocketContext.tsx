import React, { createContext, useContext } from 'react';
import io, { Socket } from 'socket.io-client';

interface SocketContextType {
    socket: Socket | null;
}

// สร้าง context พร้อมค่าเริ่มต้น
const SocketContext = createContext<SocketContextType>({ socket: null });

export const useSocket = () => {
    return useContext(SocketContext);
};

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const socket = io('http://localhost:3000'); // หรือ URL ของเซิร์ฟเวอร์ที่ใช้ Socket.io

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};
