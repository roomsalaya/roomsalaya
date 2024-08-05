import React, { useEffect, useState, useRef } from 'react';
import { Card, Space, Button, Tooltip, message, Dropdown, Menu, notification } from 'antd';
import { CopyOutlined, DownOutlined, UploadOutlined, DeleteOutlined, CheckOutlined, HistoryOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import AppMenu200 from './AppMenu200'; // อัปเดตเพื่อสะท้อนคอมโพเนนต์ใหม่
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage, auth } from '../firebaseConfig';
import './BankTransferForm201.css'; // อัปเดต CSS

const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
        message.success('คัดลอกไปยังคลิปบอร์ด');
    }).catch(() => {
        message.error('ไม่สามารถคัดลอกได้');
    });
};

interface Invoice {
    id?: string;
    month: string;
    name: string;
    room: string;
    rent: string;
    electricity: string;
    water: string;
    total: string;
    status: boolean; // true สำหรับชำระแล้ว, false สำหรับยังไม่ชำระ
    createdAt?: { seconds: number }; // ฟิลด์ Timestamp
}

const DropdownMenu: React.FC<{ invoices: Invoice[], onSelect: (text: string) => void }> = ({ invoices, onSelect }) => (
    <Menu onClick={({ key }) => onSelect(key)}>
        {invoices.map((invoice) => (
            <Menu.Item key={`${invoice.month}: ${invoice.total} บาท`}>
                {invoice.month}: {invoice.total} บาท - {invoice.status ? 'ชำระแล้ว' : 'รอชำระ'}
            </Menu.Item>
        ))}
    </Menu>
);

const BankTransferForm200: React.FC = () => {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [selectedText, setSelectedText] = useState<string>('เลือกใบแจ้งหนี้ที่จะชำระ');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "invoices200"));
                const invoicesData: Invoice[] = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data() as Invoice
                }));
                invoicesData.sort((a, b) => (a.createdAt?.seconds || 0) - (b.createdAt?.seconds || 0));
                setInvoices(invoicesData);
            } catch (error) {
                console.error("เกิดข้อผิดพลาดในการดึงข้อมูลใบแจ้งหนี้: ", error);
                message.error('เกิดข้อผิดพลาดในการดึงข้อมูลใบแจ้งหนี้');
            }
        };

        fetchData();
    }, []);

    const handleMenuSelect = (text: string) => {
        setSelectedText(text);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            message.success(`ไฟล์ "${file.name}" ได้รับการเลือกแล้ว`);
        }
    };

    const handleRemoveImage = () => {
        if (selectedImage) {
            URL.revokeObjectURL(selectedImage); // ปล่อยหน่วยความจำ
        }
        setSelectedImage(null);
        message.info('ลบภาพออกแล้ว');
    };

    const handleAttachImageClick = () => {
        fileInputRef.current?.click();
    };

    const notifyUser = (invoice: string) => {
        notification.success({
            message: 'แจ้งเตือนการชำระเงิน',
            description: `คุณได้ส่งหลักฐานการชำระเงินสำหรับ ${invoice} สำเร็จ`,
            placement: 'bottomRight',
            duration: 5,
            icon: <CheckOutlined />,
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    const notifyLineGroup = async (invoice: string, imageUrl: string) => {
        const token = '2aDKUQzI2hPap5H5gzTmjaz65EJA233P1vFq88B8XdQ'; // ใช้ token ของคุณที่นี่
        const message = `คุณได้ส่งหลักฐานการชำระเงินสำหรับ ${invoice}`;
    
        try {
            const response = await fetch('https://notify-api.line.me/api/notify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${token}`,
                },
                body: new URLSearchParams({
                    message: message,
                    imageThumbnail: imageUrl,
                    imageFullsize: imageUrl,
                }),
            });
    
            if (!response.ok) {
                throw new Error('เกิดข้อผิดพลาดในการส่งการแจ้งเตือนไปยัง LINE');
            }
    
            console.log('ส่งการแจ้งเตือนสำเร็จ');
        } catch (error) {
            console.error('เกิดข้อผิดพลาดในการแจ้งเตือน LINE: ', error);
        }
    };
    
    const handleSubmitProof = async () => {
        if (!selectedImage || selectedText === 'เลือกใบแจ้งหนี้ที่จะชำระ') {
            message.error('กรุณาเลือกหลักฐานการชำระเงินและใบแจ้งหนี้ที่จะชำระ');
            return;
        }

        try {
            const user = auth.currentUser;
            if (!user) {
                message.error('คุณต้องเข้าสู่ระบบก่อน');
                return;
            }

            const imageRef = ref(storage, `proofs200/${Date.now()}_${Math.random()}`);
            const response = await fetch(selectedImage);
            const blob = await response.blob();
            await uploadBytes(imageRef, blob);

            const downloadURL = await getDownloadURL(imageRef);

            await addDoc(collection(db, "paymentProofs200"), {
                invoice: selectedText,
                imageUrl: downloadURL,
                status: 'รอการอนุมัติ',
                timestamp: new Date()
            });

            message.success('ส่งหลักฐานการชำระเงินเรียบร้อยแล้ว');
            notifyUser(selectedText);
            notifyLineGroup(selectedText, downloadURL); // เรียกใช้ฟังก์ชันแจ้งเตือน LINE Notify
            navigate('/paymenthistory200', { state: { selectedText, selectedImage: downloadURL } });
        } catch (error) {
            console.error('เกิดข้อผิดพลาดในการส่งหลักฐาน: ', error);
            message.error('เกิดข้อผิดพลาดในการส่งหลักฐานการชำระเงิน');
        }
    };

    const handleViewHistory = () => {
        navigate('/paymenthistory200');
    };

    return (
        <div className='bank-container'>
            <h3>
                แจ้งชำระค่าเช่า 200
                <AppMenu200 />
            </h3>
            <Space className='space' direction="vertical" size="middle">
                <Card className='card' title="บัญชีสำหรับชำระหนี้">
                    <p className='scb'>
                        <img src="https://img5.pic.in.th/file/secure-sv1/unnamed4edf9fa04b6e50f3.png" alt="Bank Logo" className='logo-image' />
                        &nbsp; ธนาคารไทยพาณิชย์
                    </p>
                    <p className='scb'>
                        ชื่อบัญชี : ธนกร แดนประเทือง
                    </p>
                    <p className='bum'>
                        เลขบัญชี : 403-992701-1
                        &nbsp;<Tooltip title="คัดลอกหมายเลขบัญชี">
                            <Button
                                shape="circle"
                                icon={<CopyOutlined />}
                                onClick={() => copyToClipboard('4039927011')}
                                className='copy-button'
                                aria-label="คัดลอกหมายเลขบัญชี"
                            />
                        </Tooltip>
                    </p>
                    <p className='scb1'>
                        กำหนดชำระล่าช้าไม่เกินวันที่ 5 ของเดือนถัดไป
                    </p>
                </Card>
                <Button
                    icon={<HistoryOutlined />}
                    onClick={handleViewHistory}
                    className='history-button'
                    aria-label="ดูประวัติการชำระเงิน"
                >
                    ประวัติแจ้งชำระ
                </Button>
                <Card className='card' title="จำนวนเงินที่ต้องชำระ">
                    <Dropdown overlay={<DropdownMenu invoices={invoices} onSelect={handleMenuSelect} />} trigger={['click']} placement="bottomRight">
                        <Button className='dropdown-button'>
                            {selectedText} <DownOutlined />
                        </Button>
                    </Dropdown>
                </Card>
                <Card className='card' title="หลักฐานการชำระเงิน">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        title="เลือกไฟล์หลักฐานการชำระเงิน"
                    />
                    <div className="upload-container">
                        <Button
                            icon={<UploadOutlined />}
                            onClick={handleAttachImageClick}
                            className='attach-button'
                            aria-label="แนบไฟล์หลักฐานการชำระเงิน"
                        >
                            แนบไฟล์หลักฐาน
                        </Button>
                    </div>
                    {selectedImage && (
                        <div className='image-container'>
                            <img src={selectedImage} alt="Selected" className='selected-image' />
                            <Button
                                icon={<DeleteOutlined />}
                                onClick={handleRemoveImage}
                                className='remove-button'
                                aria-label="ลบภาพที่เลือก"
                            />
                        </div>
                    )}
                    <Button
                        type="primary"
                        icon={<CheckOutlined />}
                        onClick={handleSubmitProof}
                        className='submit-button'
                        aria-label="ส่งหลักฐานการชำระเงิน"
                    >
                        ส่งหลักฐานการชำระเงิน
                    </Button>
                </Card>
            </Space>
        </div>
    );
};

export default BankTransferForm200;
