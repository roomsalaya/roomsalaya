import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Adjust the path as needed
import './Room201.css';
import AppMenu200 from './AppMenu200';
import { CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';

interface Invoice {
    id?: string; // Add id to the interface
    month: string;
    name: string;
    room: string;
    rent: string;
    electricity: string;
    water: string;
    total: string;
    status: boolean; // true for Paid, false for Unpaid
    createdAt?: { seconds: number }; // Add createdAt to handle timestamp
}

const Room200: React.FC = () => {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [pendingCount, setPendingCount] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "invoices200"));
                const invoicesData: Invoice[] = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data() as Invoice;
                    // Add document ID and timestamp to the invoice data
                    invoicesData.push({ id: doc.id, ...data });
                });
                // Sort invoices by createdAt in ascending order (newest at the bottom)
                invoicesData.sort((a, b) => (a.createdAt?.seconds || 0) - (b.createdAt?.seconds || 0));
                setInvoices(invoicesData);

                // Calculate the count of pending invoices
                const pending = invoicesData.filter(invoice => !invoice.status).length;
                setPendingCount(pending);
            } catch (e) {
                console.error("Error fetching invoices: ", e);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='room-info-container'>
            <h3>
                ประวัติชำระหนี้ ห้อง 200
                <div className='app-menu-container'>
                    <AppMenu200 />
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

export default Room200;
