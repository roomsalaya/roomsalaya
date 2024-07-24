import React, { useEffect, useState, useRef } from 'react';
import { Card, Space, Button, Tooltip, message, Dropdown, Menu } from 'antd';
import { CopyOutlined, DownOutlined, UploadOutlined, DeleteOutlined, CheckOutlined, HistoryOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import AppMenu201 from './AppMenu201';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage, auth } from '../firebaseConfig';
import './BankTransferForm201.css';

// Function to copy text to clipboard
const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
        message.success('Copied to clipboard');
    }).catch(() => {
        message.error('Failed to copy');
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
    status: boolean; // true for Paid, false for Unpaid
    createdAt?: { seconds: number }; // Timestamp field from Firestore
}

// Dropdown menu for selecting invoices
const DropdownMenu: React.FC<{ invoices: Invoice[], onSelect: (text: string) => void }> = ({ invoices, onSelect }) => (
    <Menu onClick={({ key }) => onSelect(key)}>
        {invoices.map((invoice) => (
            <Menu.Item key={`${invoice.month}: ${invoice.total} Baht`}>
                {invoice.month}: {invoice.total} Baht - {invoice.status ? 'Paid' : 'Pending'}
            </Menu.Item>
        ))}
    </Menu>
);

const BankTransferForm201: React.FC = () => {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [selectedText, setSelectedText] = useState<string>('Select payment item');
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
                console.error("Error fetching invoices: ", e);
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
            message.success(`File "${file.name}" selected`);
        }
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
        message.info('Image removed');
    };

    const handleAttachImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleSubmitProof = async () => {
        if (!selectedImage || selectedText === 'Select payment item') {
            message.error('Please select proof of payment and payment item');
            return;
        }

        try {
            const user = auth.currentUser;
            if (!user) {
                message.error('You need to be logged in');
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
                status: 'Pending Approval',
                timestamp: new Date()
            });

            message.success('Proof of payment submitted successfully');
            navigate('/paymenthistory201', { state: { selectedText, selectedImage: downloadURL } });
        } catch (error) {
            console.error('Error submitting proof: ', error);
            message.error('Error submitting proof of payment');
        }
    };

    const handleViewHistory = () => {
        navigate('/paymenthistory201');
    };

    return (
        <div className='bank-container'>
            <h3>
                Report Rent Payment 201
                <AppMenu201 />
            </h3>
            <Space className='space' direction="vertical" size="middle">
                <Card className='card' title="Bank for Rent Payment">
                    <p className='scb'>
                        <img src="https://i.ibb.co/7yzngyM/scb-bank-logo.png" alt="Bank Logo" className='logo-image' />
                        &nbsp; Siam Commercial Bank
                    </p>
                    <p className='scb'>
                        Account Name: Thanakorn Danprateung
                    </p>
                    <p className='bum'>
                        Account Number: 403-992701-1
                        &nbsp;<Tooltip title="Copy account number">
                            <Button
                                shape="circle"
                                icon={<CopyOutlined />}
                                onClick={() => copyToClipboard('4039927011')}
                                className='copy-button'
                            />
                        </Tooltip>
                    </p>
                </Card>
                <Button
                    icon={<HistoryOutlined />}
                    onClick={handleViewHistory}
                    className='history-button'
                    aria-label="View payment history"
                >
                    Payment History
                </Button>
                <Card className='card' title="Amount to Pay">
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
                        aria-label="Select an image file to upload"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                    />
                    <Button
                        icon={<UploadOutlined />}
                        onClick={handleAttachImageClick}
                        className='upload-button'
                        aria-label="Attach an image"
                    >
                        Attach Image
                    </Button>
                    <pre />
                    {selectedImage && (
                        <div className='image-preview'>
                            <img src={selectedImage} alt="Selected" className='image-preview-img' />
                            <Button
                                icon={<DeleteOutlined />}
                                onClick={handleRemoveImage}
                                className='remove-image-button'
                                aria-label="Remove attached image"
                            >
                                Remove Image
                            </Button>
                        </div>
                    )}
                    <Button
                        icon={<CheckOutlined />}
                        onClick={handleSubmitProof}
                        className='submit-button'
                        aria-label="Submit proof of payment"
                    >
                        Submit Proof of Payment
                    </Button>
                </Card>
            </Space>
        </div>
    );
};

export default BankTransferForm201;
