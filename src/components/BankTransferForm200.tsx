import React, { useEffect, useState, useRef } from 'react';
import { Card, Space, Button, Tooltip, message, Dropdown, Menu } from 'antd';
import { CopyOutlined, DownOutlined, UploadOutlined, DeleteOutlined, CheckOutlined, HistoryOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import AppMenu200 from './AppMenu200'; // Updated to reflect the new component
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage, auth } from '../firebaseConfig';
import './BankTransferForm201.css'; // Updated CSS

// Function to copy text to clipboard
const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
        message.success('คัดลอกไปยังคลิปบอร์ด');
    }).catch(() => {
        message.error('ไม่สามารถคัดลอกได้');
    });
};

// Interface for invoice data
interface Invoice {
    id?: string;
    month: string;
    name: string;
    room: string;
    rent: string;
    electricity: string;
    water: string;
    total: string;
    status: boolean; // true for paid, false for unpaid
    createdAt?: { seconds: number }; // Timestamp field
}

// Dropdown menu for selecting invoices
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

    // Fetch invoices from Firestore when component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "invoices200")); // Adjusted collection name for room 200
                const invoicesData: Invoice[] = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data() as Invoice
                }));
                invoicesData.sort((a, b) => (a.createdAt?.seconds || 0) - (b.createdAt?.seconds || 0));
                setInvoices(invoicesData);
            } catch (error) {
                console.error("Error fetching invoices: ", error);
                message.error('เกิดข้อผิดพลาดในการดึงข้อมูลใบแจ้งหนี้');
            }
        };

        fetchData();
    }, []);

    // Handle selecting an invoice from the dropdown menu
    const handleMenuSelect = (text: string) => {
        setSelectedText(text);
    };

    // Handle file selection
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            message.success(`ไฟล์ "${file.name}" ได้รับการเลือกแล้ว`);
        }
    };

    // Remove selected image
    const handleRemoveImage = () => {
        setSelectedImage(null);
        message.info('ลบภาพออกแล้ว');
    };

    // Click to open file selector
    const handleAttachImageClick = () => {
        fileInputRef.current?.click(); // Open file selector
    };

    // Handle submitting payment proof
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

            await addDoc(collection(db, "paymentProofs200"), { // Adjusted collection name for room 200
                invoice: selectedText,
                imageUrl: downloadURL,
                status: 'รอการอนุมัติ',
                timestamp: new Date()
            });

            message.success('ส่งหลักฐานการชำระเงินเรียบร้อยแล้ว');
            navigate('/paymenthistory200', { state: { selectedText, selectedImage: downloadURL } }); // Adjusted navigation path
        } catch (error) {
            console.error('Error submitting proof: ', error);
            message.error('เกิดข้อผิดพลาดในการส่งหลักฐานการชำระเงิน');
        }
    };

    // Handle navigation to payment history
    const handleViewHistory = () => {
        navigate('/paymenthistory200'); // Navigate to payment history page
    };

    return (
        <div className='bank-container'>
            <h3>
                แจ้งชำระค่าเช่า 200
                <AppMenu200 /> {/* Updated to reflect the new component */}
            </h3>
            <Space className='space' direction="vertical" size="middle">
                <Card className='card' title="บัญชีสำหรับชำระหนี้">
                    <p className='scb'>
                        <img src="https://i.ibb.co/7yzngyM/scb-bank-logo.png" alt="Bank Logo" className='logo-image' />
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
                                onClick={() => copyToClipboard('403-992701-1')}
                                className='copy-button'
                            />
                        </Tooltip>
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
                        style={{ display: 'none' }} // Hide file selector
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

export default BankTransferForm200;
