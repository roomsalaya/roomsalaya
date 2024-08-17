import React, { useEffect, useState } from 'react';
import { collection, addDoc, updateDoc, doc, getDocs, deleteDoc } from 'firebase/firestore';
import { db, auth, storage } from '../firebaseConfig'; // Adjust the path as needed
import Modal from 'react-modal';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { DownloadOutlined } from '@ant-design/icons';
import './HouseInfo201.css';

interface Invoice {
    id?: string;
    month: string;
    name: string;
    room: string;
    rent: string;
    electricity: string;
    water: string;
    fine: string;
    total: string;
    status: boolean; // true for paid, false for unpaid
    createdAt?: { seconds: number }; // Timestamp field from Firestore
    fileURL?: string; // URL of the file
}

const HouseInfo226 = () => {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [form, setForm] = useState<Invoice>({
        month: '',
        name: '',
        room: '',
        rent: '',
        electricity: '',
        water: '',
        fine: '',
        total: '',
        status: false, // Default status is unpaid
    });
    const [editingId, setEditingId] = useState<string | null>(null);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [file, setFile] = useState<File | null>(null);

    // Fetch invoices from Firestore
    const fetchInvoices = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "invoices226"));
            const invoicesData: Invoice[] = [];
            querySnapshot.forEach((doc) => {
                invoicesData.push({ id: doc.id, ...doc.data() } as Invoice);
            });
            // Sort invoices by createdAt
            invoicesData.sort((a, b) => (a.createdAt?.seconds || 0) - (b.createdAt?.seconds || 0));
            setInvoices(invoicesData);
        } catch (e) {
            console.error("Error fetching invoices: ", e);
        }
    };

    useEffect(() => {
        fetchInvoices();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
            total: ['rent', 'electricity', 'water', 'fine'].includes(name)
                ? calculateTotal({ ...form, [name]: value })
                : form.total,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const calculateTotal = (form: Invoice) => {
        const rent = parseFloat(form.rent) || 0;
        const electricity = parseFloat(form.electricity) || 0;
        const water = parseFloat(form.water) || 0;
        const fine = parseFloat(form.fine) || 0; // Include fine in total
        const total = rent + electricity + water + fine;
        return Math.round(total).toString(); // Convert to integer and then to string
    };

    const handleFileUpload = async () => {
        if (file) {
            const fileRef = ref(storage, `invoices/${file.name}`);
            await uploadBytes(fileRef, file);
            const fileURL = await getDownloadURL(fileRef);
            return fileURL;
        }
        return null;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const user = auth.currentUser;
            if (!user) {
                console.error("No authenticated user");
                return;
            }

            const fileURL = await handleFileUpload(); // Upload file and get URL

            const invoiceData = {
                ...form,
                email: user.email,
                createdAt: new Date(),
                fileURL, // Include file URL
            };

            if (editingId) {
                // Edit existing invoice
                const invoiceRef = doc(db, "invoices226", editingId);
                await updateDoc(invoiceRef, invoiceData);
                await fetchInvoices();
                setEditingId(null);
            } else {
                // Add new invoice
                await addDoc(collection(db, "invoices226"), invoiceData);
                await fetchInvoices();
            }

            setForm({
                month: '',
                name: '',
                room: '',
                rent: '',
                electricity: '',
                water: '',
                fine: '',
                total: '',
                status: false,
            });
            setFile(null); // Clear file input
            setModalIsOpen(false); // Close modal after submit
        } catch (e) {
            console.error("Error adding/updating document: ", e);
        }
    };

    const handleEdit = (invoice: Invoice) => {
        setForm(invoice);
        setEditingId(invoice.id || null);
        setModalIsOpen(true); // Open modal when editing
    };

    const handleCancel = () => {
        setEditingId(null);
        setForm({
            month: '',
            name: '',
            room: '',
            rent: '',
            electricity: '',
            water: '',
            fine: '',
            total: '',
            status: false,
        });
        setFile(null); // Clear file input
        setModalIsOpen(false); // Close modal when canceling
    };

    const toggleStatus = async (invoice: Invoice) => {
        try {
            const invoiceRef = doc(db, "invoices226", invoice.id!);
            await updateDoc(invoiceRef, { status: !invoice.status });
            fetchInvoices(); // Refresh invoice list
        } catch (e) {
            console.error("Error updating status: ", e);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteDoc(doc(db, "invoices226", id));
            fetchInvoices(); // Refresh invoice list after deletion
        } catch (e) {
            console.error("Error deleting document: ", e);
        }
    };

    return (
        <div className='house-info-container'>
            <h2>รายการแจ้งหนี้ห้อง 226</h2>
            <button className='add-invoice-button' onClick={() => setModalIsOpen(true)}>เพิ่มใบแจ้งหนี้</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCancel}
                contentLabel="Invoice Form"
                className='invoice-modal'
                overlayClassName='invoice-modal-overlay'
            >
                <h2>{editingId ? 'แก้ไขใบแจ้งหนี้' : 'เพิ่มใบแจ้งหนี้'}</h2>
                <form onSubmit={handleSubmit} className='invoice-form'>
                    <label htmlFor='month'>เดือน:</label>
                    <input
                        type='text'
                        id='month'
                        name='month'
                        value={form.month}
                        onChange={handleChange}
                        placeholder='เดือน'
                        required
                    />
                    <label htmlFor='name'>ชื่อ:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder='ชื่อ'
                        required
                    />
                    <label htmlFor='room'>ห้อง:</label>
                    <input
                        type='text'
                        id='room'
                        name='room'
                        value={form.room}
                        onChange={handleChange}
                        placeholder='ห้อง'
                        required
                    />
                    <label htmlFor='rent'>ค่าเช่า:</label>
                    <input
                        type='number'
                        id='rent'
                        name='rent'
                        value={form.rent}
                        onChange={handleChange}
                        placeholder='ค่าเช่า'
                        required
                    />
                    <label htmlFor='electricity'>ค่าไฟ:</label>
                    <input
                        type='number'
                        id='electricity'
                        name='electricity'
                        value={form.electricity}
                        onChange={handleChange}
                        placeholder='ค่าไฟ'
                        required
                    />
                    <label htmlFor='water'>ค่าน้ำ:</label>
                    <input
                        type='number'
                        id='water'
                        name='water'
                        value={form.water}
                        onChange={handleChange}
                        placeholder='ค่าน้ำ'
                        required
                    />
                    <label htmlFor='fine'>ค่าปรับ:</label>
                    <input
                        type='number'
                        id='fine'
                        name='fine'
                        value={form.fine}
                        onChange={handleChange}
                        placeholder='ค่าปรับ'
                    />
                    <label htmlFor='total'>รวม:</label>
                    <input
                        type='number'
                        id='total'
                        name='total'
                        value={form.total}
                        onChange={handleChange}
                        placeholder='รวม'
                        required
                        readOnly
                    />
                    <label htmlFor='file'>ไฟล์:</label>
                    <input
                        type='file'
                        id='file'
                        onChange={handleFileChange}
                    />
                    <button type='submit'>{editingId ? 'บันทึกการแก้ไข' : 'เพิ่มใบแจ้งหนี้'}</button>
                    <button type='button' onClick={handleCancel}>ยกเลิก</button>
                </form>
            </Modal>
            <table>
                <thead>
                    <tr>
                        <th>เดือน</th>
                        <th>ชื่อ</th>
                        <th>ห้อง</th>
                        <th>ค่าเช่า</th>
                        <th>ค่าไฟ</th>
                        <th>ค่าน้ำ</th>
                        <th>ค่าปรับ</th>
                        <th>รวม</th>
                        <th>สถานะ</th>
                        <th>ไฟล์</th>
                        <th>ดำเนินการ</th>
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
                            <td>{invoice.fine}</td>
                            <td>{invoice.total}</td>
                            <td>{invoice.status ? 'จ่ายแล้ว' : 'ยังไม่จ่าย'}</td>
                            <td>
                                {invoice.fileURL ? (
                                    <a href={invoice.fileURL} target="_blank" rel="noopener noreferrer" className='download-link'>
                                        <DownloadOutlined /> PDF
                                    </a>
                                ) : '-'}
                            </td>
                            <td>
                                <button className='edit-button' onClick={() => handleEdit(invoice)}>แก้ไข</button>
                                <button className='toggle-status-button' onClick={() => toggleStatus(invoice)}>
                                    {invoice.status ? 'ยังไม่จ่าย' : 'จ่ายแล้ว'}
                                </button>
                                <button className='delete-button' onClick={() => handleDelete(invoice.id!)}>ลบ</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HouseInfo226;
