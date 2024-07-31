import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Adjust the path as needed
import './Room201.css';
import AppMenu311 from './AppMenu311';
import { CheckCircleOutlined, ClockCircleOutlined, DownloadOutlined } from '@ant-design/icons';

interface Invoice {
    id?: string;
    month: string;
    name: string;
    room: string;
    rent: string;
    electricity: string;
    water: string;
    total: string;
    status: boolean;
    createdAt?: { seconds: number };
    fileURL?: string; // Add fileURL for PDF download
}

const Room311: React.FC = () => {
    const [invoices, setInvoices] = useState<Invoice[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "invoices311"));
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

    return (
        <div className='room-info-container'>
            <h3>
                ประวัติชำระหนี้ ห้อง 311
                <div className='app-menu-container'>
                    <AppMenu311 />
                </div>
            </h3>
            <div className='menu-container'>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>เดือน</th>
                        <th>ชื่อ-นามสกุล</th>
                        <th>ห้อง</th>
                        <th>ค่าเช่า</th>
                        <th>ค่าไฟ</th>
                        <th>ค่าน้ำ</th>
                        <th>รวม</th>
                        <th>สถานะ</th>
                        <th>ไฟล์ PDF</th> {/* Add PDF column header */}
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice) => (
                        <tr key={invoice.id}>
                            <td>{invoice.month}</td>
                            <td>{invoice.name}</td>
                            <td>{invoice.room}</td>
                            <td>{invoice.rent}</td>
                            <td>{invoice.electricity}</td>
                            <td>{invoice.water}</td>
                            <td>{invoice.total}</td>
                            <td>
                                <button
                                    className={`status-button ${invoice.status ? 'status-paid' : 'status-unpaid'}`}
                                    disabled
                                >
                                    {invoice.status ? (
                                        <>
                                            <CheckCircleOutlined /> ชำระแล้ว
                                        </>
                                    ) : (
                                        <>
                                            <ClockCircleOutlined /> รอชำระ
                                        </>
                                    )}
                                </button>
                            </td>
                            <td>
                                {invoice.fileURL ? (
                                    <a href={invoice.fileURL} target="_blank" rel="noopener noreferrer" className='download-link'>
                                        <DownloadOutlined /> PDF
                                    </a>
                                ) : '-'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Room311;
