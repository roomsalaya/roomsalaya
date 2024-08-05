import React, { useEffect, useState, useRef } from 'react';
import { Card, Space, Button, Tooltip, message, Dropdown, Menu } from 'antd';
import { CopyOutlined, DownOutlined, UploadOutlined, DeleteOutlined, CheckOutlined, HistoryOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import AppMenu201 from './AppMenu201';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage, auth } from '../firebaseConfig';
import './BankTransferForm201.css';

// ฟังก์ชันในการคัดลอกข้อความไปยังคลิปบอร์ด
const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
        message.success('คัดลอกไปยังคลิปบอร์ดเรียบร้อย');
    }).catch(() => {
        message.error('ไม่สามารถคัดลอกได้');
    });
};

// อินเตอร์เฟซสำหรับข้อมูลใบแจ้งหนี้
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
    createdAt?: { seconds: number }; // ฟิลด์ Timestamp จาก Firestore
}

// เมนูดรอปดาวน์สำหรับการเลือกใบแจ้งหนี้
const DropdownMenu: React.FC<{ invoices: Invoice[], onSelect: (text: string) => void }> = ({ invoices, onSelect }) => (
    <Menu onClick={({ key }) => onSelect(key)}>
        {invoices.map((invoice) => (
            <Menu.Item key={`${invoice.month}: ${invoice.total} บาท`}>
                {invoice.month}: {invoice.total} บาท - {invoice.status ? 'ชำระแล้ว' : 'รอชำระ'}
            </Menu.Item>
        ))}
    </Menu>
);

const BankTransferForm201: React.FC = () => {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [selectedText, setSelectedText] = useState<string>('เลือกใบแจ้งหนี้');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "invoices"));
                const invoicesData: Invoice[] = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data() as Invoice;
                    invoicesData.push({ id: doc.id, ...data });
                });
                invoicesData.sort((a, b) => (a.createdAt?.seconds || 0) - (b.createdAt?.seconds || 0));
                setInvoices(invoicesData);
            } catch (e) {
                console.error("เกิดข้อผิดพลาดในการดึงข้อมูลใบแจ้งหนี้: ", e);
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
        setSelectedImage(null);
        message.info('ลบภาพออกแล้ว');
    };

    const handleAttachImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleSubmitProof = async () => {
        if (!selectedImage || selectedText === 'เลือกใบแจ้งหนี้') {
            message.error('กรุณาเลือกหลักฐานการชำระเงินและใบแจ้งหนี้');
            return;
        }

        try {
            const user = auth.currentUser;
            if (!user) {
                message.error('คุณต้องเข้าสู่ระบบก่อน');
                return;
            }

            const imageRef = ref(storage, `proofs/${Date.now()}_${Math.random()}`);
            const response = await fetch(selectedImage);
            const blob = await response.blob();
            await uploadBytes(imageRef, blob);

            const downloadURL = await getDownloadURL(imageRef);

            await addDoc(collection(db, "paymentProofs"), {
                invoice: selectedText,
                imageUrl: downloadURL,
                status: 'รอการอนุมัติ',
                timestamp: new Date()
            });

            message.success('ส่งหลักฐานการชำระเงินเรียบร้อยแล้ว');
            navigate('/paymenthistory201', { state: { selectedText, selectedImage: downloadURL } });
        } catch (error) {
            console.error('เกิดข้อผิดพลาดในการส่งหลักฐาน: ', error);
            message.error('เกิดข้อผิดพลาดในการส่งหลักฐานการชำระเงิน');
        }
    };

    const handleViewHistory = () => {
        navigate('/paymenthistory201');
    };

    return (
        <div className='bank-container'>
            <h3> แจ้งชำระค่าเช่า 201 <AppMenu201/></h3>
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
                    <pre />
                    <input
                        type="file"
                        id="file-input"
                        accept="image/*"
                        onChange={handleFileChange}
                        className='file-input'
                        aria-label="เลือกไฟล์ภาพเพื่ออัปโหลด"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                    />
                    <Button
                        icon={<UploadOutlined />}
                        onClick={handleAttachImageClick}
                        className='upload-button'
                        aria-label="แนบรูปภาพ"
                    >
                        แนบรูปภาพ
                    </Button>
                    <pre />
                    {selectedImage && (
                        <div className='image-preview'>
                            <img src={selectedImage} alt="Selected" className='image-preview-img' />
                            <Button
                                icon={<DeleteOutlined />}
                                onClick={handleRemoveImage}
                                className='remove-image-button'
                                aria-label="ลบภาพที่แนบ"
                            >
                                ลบภาพ
                            </Button>
                        </div>
                    )}
                    <Button
                        icon={<CheckOutlined />}
                        onClick={handleSubmitProof}
                        className='submit-button'
                        aria-label="ส่งหลักฐานการชำระ"
                    >
                        กดส่งแจ้งหลักฐานการชำระ
                    </Button>
                </Card>
            </Space>
        </div>
    );
};

export default BankTransferForm201;
