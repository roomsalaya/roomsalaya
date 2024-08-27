const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const packages = [];

// เก็บข้อมูลผู้เชื่อมต่อ
let connectedUsers = {};

io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    // รับข้อมูล userId จาก client
    socket.on('register', (userId) => {
        connectedUsers[userId] = socket.id;
        console.log(`User ${userId} registered with socket ID ${socket.id}`);
    });

    socket.on('disconnect', () => {
        // ลบ user ที่ disconnect
        for (const [userId, socketId] of Object.entries(connectedUsers)) {
            if (socketId === socket.id) {
                delete connectedUsers[userId];
                break;
            }
        }
        console.log('Client disconnected:', socket.id);
    });
});

// API สำหรับเพิ่มพัสดุ
app.post('/api/packages', (req, res) => {
    const { trackingNumber, recipient, deliveryAddress, notifyUserIds } = req.body;
    const newPackage = { id: packages.length + 1, trackingNumber, recipient, deliveryAddress };
    packages.push(newPackage);

    // ส่งแจ้งเตือนไปยังผู้ใช้ที่กำหนด
    notifyUserIds.forEach(userId => {
        const socketId = connectedUsers[userId];
        if (socketId) {
            io.to(socketId).emit('packageAdded', newPackage);
        }
    });

    res.status(201).json(newPackage);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
