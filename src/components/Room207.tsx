import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Adjust the path as needed
import './Room201.css';
import { CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import AppMenu207 from './AppMenu207';

// Define the Invoice interface
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
    createdAt?: { seconds: number }; // Optional timestamp
}

const Room207: React.FC = () => {
    const [invoices, setInvoices] = useState<Invoice[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "invoices207"));
                const invoicesData: Invoice[] = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data() as Invoice;
                    // Add document ID and timestamp to the invoice data
                    invoicesData.push({ id: doc.id, ...data });
                });
                // Sort invoices by createdAt in ascending order (newest at the bottom)
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
            <h3>ประวัติชำระหนี้ ห้อง 207
                <AppMenu207 />
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Room207;
