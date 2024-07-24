import React, { useEffect, useState } from 'react';
import { Table, Card, Space, Button, message } from 'antd';
import { ExclamationCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import './Allowpayment201.css';  // Import your CSS file

// Define the interface for payment proof data
interface PaymentProof {
    key: string;
    item: string;
    detail: React.ReactNode;
    status: string;
}

const Allowpayment315: React.FC = () => {
    // State for holding data
    const [data, setData] = useState<PaymentProof[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Fetch data from Firestore
    const fetchData = async () => {
        setLoading(true);
        try {
            const querySnapshot = await getDocs(collection(db, "paymentProofs315")); // Adjust collection name
            const fetchedData: PaymentProof[] = querySnapshot.docs.map((doc) => {
                const data = doc.data();
                return {
                    key: doc.id,
                    item: data.invoice,
                    detail: (
                        <>
                            {data.imageUrl ? (
                                <img src={data.imageUrl} alt="Proof" style={{ maxWidth: '200px' }} />
                            ) : (
                                'ไม่พบภาพ'
                            )}
                        </>
                    ),
                    status: data.status
                };
            });
            setData(fetchedData);
        } catch (error) {
            console.error('Error fetching data: ', error);
            message.error('เกิดข้อผิดพลาดในการดึงข้อมูล');
        } finally {
            setLoading(false);
        }
    };

    // Fetch data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    // Function to update status in Firestore
    const handleStatusChange = async (key: string, currentStatus: string) => {
        const newStatus = currentStatus === 'pending' ? 'approved' : 'pending';
        const docRef = doc(db, "paymentProofs315", key); // Adjust collection name
        
        try {
            await updateDoc(docRef, { status: newStatus });
            setData(prevData =>
                prevData.map(item =>
                    item.key === key ? { ...item, status: newStatus } : item
                )
            );
            message.success('สถานะอัปเดตสำเร็จ');
        } catch (error) {
            console.error('Error updating status: ', error);
            message.error('เกิดข้อผิดพลาดในการอัปเดตสถานะ');
        }
    };

    // Columns for the table
    const columns = [
        { title: 'รายการที่เลือก', dataIndex: 'item', key: 'item' },
        { title: 'รายละเอียด', dataIndex: 'detail', key: 'detail' },
        {
            title: 'การดำเนินการ',
            key: 'action',
            render: (_: any, record: PaymentProof) => (
                <Button
                    type="default"
                    icon={record.status === 'pending' ? <CheckCircleOutlined /> : <ExclamationCircleOutlined />}
                    style={{ 
                        backgroundColor: record.status === 'pending' ? '#f0f9eb' : '#f4f4f4', 
                        color: record.status === 'pending' ? '#52c41a' : '#faad14'
                    }}
                    onClick={() => handleStatusChange(record.key, record.status)}
                >
                    {record.status === 'pending' ? 'อนุมัติชำระ' : 'รออนุมัติชำระ'}
                </Button>
            )
        }
    ];

    return (
        <div className='payment-history-container'>
            <h3>ประวัติแจ้งชำระค่าเช่า
            </h3>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <Card title="รายละเอียดการชำระเงิน">
                    <Table 
                        columns={columns} 
                        dataSource={data} 
                        pagination={false} 
                        loading={loading} 
                    />
                </Card>
            </Space>
        </div>
    );
};

export default Allowpayment315;
