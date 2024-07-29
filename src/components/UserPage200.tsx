import React, { useEffect, useState } from 'react';
import AppMenu200 from './AppMenu200';
import { BellOutlined } from '@ant-design/icons';
import { notification, Badge, Modal, Table } from 'antd';
import { collection, onSnapshot, QuerySnapshot, DocumentData, getDocs, query, where, WriteBatch, writeBatch } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import './UserPage201.css'; // นำเข้าไฟล์ CSS

interface PaymentProof {
    key: string;
    item: string;
    status: string;
    read?: boolean; // เพิ่มฟิลด์ read
}

const UserPage200: React.FC = () => {
    const [notificationCount, setNotificationCount] = useState<number>(0);
    const [paymentProofs, setPaymentProofs] = useState<PaymentProof[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // ดึงสถานะการชำระเงินและอัปเดตจำนวนการแจ้งเตือน
    const fetchPaymentStatus = async (snapshot: QuerySnapshot<DocumentData>) => {
        try {
            const statusData = snapshot.docs.map((doc) => {
                const data = doc.data();
                // แทนที่สถานะ 'pending' ด้วย 'อนุมัติชำระ'
                const statusText = data.status === 'pending' ? 'อนุมัติชำระ' : data.status;
                
                return {
                    key: doc.id,
                    item: data.invoice,
                    status: statusText,
                    read: data.read || false // สถานะการอ่านจาก Firestore
                };
            });
            setPaymentProofs(statusData);

            // นับจำนวนสถานะ 'อนุมัติชำระ' ที่ยังไม่ถูกอ่าน
            const unreadCount = statusData.filter(status => status.status === 'อนุมัติชำระ' && !status.read).length;
            setNotificationCount(unreadCount);
        } catch (error) {
            console.error('เกิดข้อผิดพลาดในการประมวลผลสถานะการชำระเงิน: ', error);
            notification.error({
                message: 'เกิดข้อผิดพลาด',
                description: 'ไม่สามารถประมวลผลสถานะการชำระเงินได้',
            });
        } finally {
            setLoading(false);
        }
    };

    // ตั้งค่าตัวฟังการเปลี่ยนแปลงข้อมูลแบบเรียลไทม์
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "paymentProofs200"), (snapshot) => {
            fetchPaymentStatus(snapshot);
        });

        // ทำความสะอาดตัวฟังเมื่อคอมโพเนนต์ยกเลิกการติดตาม
        return () => unsubscribe();
    }, []);

    // ตั้งค่าสถานะทั้งหมดเป็นอ่าน
    const markAllAsRead = async () => {
        try {
            // สร้างอินสแตนซ์ของ batch
            const batch: WriteBatch = writeBatch(db);
            const paymentProofsRef = collection(db, "paymentProofs200");
            const snapshot = await getDocs(query(paymentProofsRef, where('read', '==', false)));

            snapshot.forEach((doc) => {
                batch.update(doc.ref, { read: true });
            });

            // ส่งคำสั่ง batch
            await batch.commit();
        } catch (error) {
            console.error('เกิดข้อผิดพลาดในการอัปเดตสถานะการแจ้งเตือน: ', error);
        }
    };

    // แสดง modal พร้อมการชำระเงินและรีเซ็ตจำนวนการแจ้งเตือน
    const showPaymentProofs = async () => {
        try {
            // รีเซ็ตจำนวนการแจ้งเตือนเป็น 0
            setNotificationCount(0);

            // ตั้งค่าสถานะการแจ้งเตือนทั้งหมดเป็นอ่านก่อนที่จะแสดง modal
            await markAllAsRead();

            // ดึงข้อมูลการชำระเงินล่าสุด
            const paymentProofsRef = collection(db, "paymentProofs200");
            const snapshot = await getDocs(paymentProofsRef);
            await fetchPaymentStatus(snapshot); // ทำให้แน่ใจว่า state ของ paymentProofs ถูกอัปเดต

            // แสดง modal
            Modal.info({
                title: 'รายการแจ้งชำระเงิน',
                content: (
                    <Table
                        columns={[
                            { title: 'รายการที่เลือก', dataIndex: 'item', key: 'item' },
                            { title: 'สถานะ', dataIndex: 'status', key: 'status' }
                        ]}
                        dataSource={paymentProofs}
                        pagination={false}
                        loading={loading}
                    />
                ),
                onOk() {},
            });
        } catch (error) {
            console.error('เกิดข้อผิดพลาดในการดึงข้อมูลการชำระเงินสำหรับ modal: ', error);
            notification.error({
                message: 'เกิดข้อผิดพลาด',
                description: 'ไม่สามารถโหลดรายการแจ้งชำระเงินได้',
            });
        }
    };

    return (
        <div className='user-container'>
            <h3>ห้อง 200</h3>
            <div className='menu-container'>
                <AppMenu200 />
            </div>
            <button className='notification-button' onClick={showPaymentProofs}>
                <Badge count={notificationCount} showZero>
                    <BellOutlined />
                </Badge>
            </button>
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
                        <td>น้องเทส</td>
                        <td>3,200</td>
                        <td>1 มิ.ย. 67 ถึง 30 พ.ย. 67</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage200;
