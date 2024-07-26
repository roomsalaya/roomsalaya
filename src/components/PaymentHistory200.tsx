import React, { useEffect, useState } from 'react';
import { Table, Card, Space, Button, message } from 'antd';
import { ExclamationCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import AppMenu200 from './AppMenu200'; // Assuming you have a similar component for Room200
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import './PaymentHistory201.css'; // Import your CSS file

const PaymentHistory200: React.FC = () => {
    const [data, setData] = useState<{ key: string, item: string, detail: React.ReactNode, status: string }[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Fetch data from Firestore
    const fetchData = async () => {
        setLoading(true);
        try {
            const querySnapshot = await getDocs(collection(db, "paymentProofs200")); // Adjust collection name
            const fetchedData = querySnapshot.docs.map((doc) => {
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

    // Columns for the table
    const columns = [
        { title: 'รายการที่เลือก', dataIndex: 'item', key: 'item' },
        { title: 'รายละเอียด', dataIndex: 'detail', key: 'detail' },
        {
            title: 'สถานะ',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Button
                    type="default"
                    icon={status === 'pending' ? <CheckCircleOutlined /> : <ExclamationCircleOutlined/>}
                    style={{ 
                        backgroundColor: status === 'pending' ? '#f0f9eb' : '#f4f4f4', 
                        color: status === 'pending' ?  '#52c41a' : '#faad14' 
                    }}
                >
                    {status === 'pending' ? 'อนุมัติชำระ' : 'รออนุมัติชำระ'}
                </Button>
            )
        }
    ];

    return (
        <div className='payment-history-container'>
            <h3>ประวัติแจ้งชำระค่าเช่า 200
                <AppMenu200 />
            </h3>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <Card title="รายละเอียดการชำระเงิน">
                    <Button onClick={fetchData} style={{ marginBottom: '16px' }}>
                        รีเฟรช
                    </Button>
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

export default PaymentHistory200;
