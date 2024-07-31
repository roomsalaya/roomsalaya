import React, { useEffect, useState } from 'react';
import { collection, addDoc, updateDoc, doc, getDocs, deleteDoc } from 'firebase/firestore';
import { db, auth, storage } from '../firebaseConfig'; // ปรับเส้นทางตามความจำเป็น
import Modal from 'react-modal';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { DownloadOutlined } from '@ant-design/icons';

interface Invoice {
    id?: string;
    month: string;
    name: string;
    room: string;
    rent: string;
    electricity: string;
    water: string;
    total: string;
    status: boolean; // true สำหรับจ่ายแล้ว, false สำหรับยังไม่จ่าย
    createdAt?: { seconds: number }; // ฟิลด์ Timestamp จาก Firestore
    fileURL?: string; // URL ของไฟล์
}

const HouseInfo227 = () => {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [form, setForm] = useState<Invoice>({
        month: '',
        name: '',
        room: '',
        rent: '',
        electricity: '',
        water: '',
        total: '',
        status: false, // ค่าเริ่มต้นเป็นยังไม่จ่าย
    });
    const [editingId, setEditingId] = useState<string | null>(null);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [file, setFile] = useState<File | null>(null);

    // ดึงข้อมูลใบแจ้งหนี้จาก Firestore
    const fetchInvoices = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "invoices227")); // ใช้ชื่อ collection ที่ต่างกัน
            const invoicesData: Invoice[] = [];
            querySnapshot.forEach((doc) => {
                invoicesData.push({ id: doc.id, ...doc.data() } as Invoice);
            });
            // เรียงใบแจ้งหนี้ตาม createdAt เพื่อแสดงใบใหม่ด้านล่างใบเก่า
            invoicesData.sort((a, b) => (a.createdAt?.seconds || 0) - (b.createdAt?.seconds || 0));
            setInvoices(invoicesData);
        } catch (e) {
            console.error("เกิดข้อผิดพลาดในการดึงข้อมูลใบแจ้งหนี้: ", e);
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
            total: name === 'rent' || name === 'electricity' || name === 'water'
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
        return (rent + electricity + water).toFixed(2);
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
                console.error("ไม่มีผู้ใช้งานที่ผ่านการยืนยัน");
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
                // แก้ไขใบแจ้งหนี้ที่มีอยู่
                const invoiceRef = doc(db, "invoices227", editingId); // ใช้ชื่อ collection ที่ต่างกัน
                await updateDoc(invoiceRef, invoiceData);
                await fetchInvoices();
                setEditingId(null);
            } else {
                // เพิ่มใบแจ้งหนี้ใหม่
                await addDoc(collection(db, "invoices227"), invoiceData); // ใช้ชื่อ collection ที่ต่างกัน
                await fetchInvoices();
            }

            setForm({
                month: '',
                name: '',
                room: '',
                rent: '',
                electricity: '',
                water: '',
                total: '',
                status: false,
            });
            setFile(null); // Clear file input
            setModalIsOpen(false); // ปิด modal หลังจาก submit
        } catch (e) {
            console.error("เกิดข้อผิดพลาดในการเพิ่ม/แก้ไขเอกสาร: ", e);
        }
    };

    const handleEdit = (invoice: Invoice) => {
        setForm(invoice);
        setEditingId(invoice.id || null);
        setModalIsOpen(true); // เปิด modal เมื่อแก้ไข
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
            total: '',
            status: false,
        });
        setFile(null); // Clear file input
        setModalIsOpen(false); // ปิด modal เมื่อยกเลิก
    };

    const toggleStatus = async (invoice: Invoice) => {
        try {
            const invoiceRef = doc(db, "invoices227", invoice.id!); // ใช้ชื่อ collection ที่ต่างกัน
            await updateDoc(invoiceRef, { status: !invoice.status });
            fetchInvoices(); // รีเฟรชรายการใบแจ้งหนี้
        } catch (e) {
            console.error("เกิดข้อผิดพลาดในการอัปเดตสถานะ: ", e);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteDoc(doc(db, "invoices227", id)); // ใช้ชื่อ collection ที่ต่างกัน
            fetchInvoices(); // รีเฟรชรายการใบแจ้งหนี้หลังจากลบ
        } catch (e) {
            console.error("เกิดข้อผิดพลาดในการลบเอกสาร: ", e);
        }
    };

    return (
        <div className='house-info-container'>
            <h2>รายการแจ้งหนี้ห้อง 227</h2>
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
                    <button type='submit'>{editingId ? 'บันทึกการเปลี่ยนแปลง' : 'เพิ่มใบแจ้งหนี้'}</button>
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
                        <th>รวม</th>
                        <th>สถานะ</th>
                        <th>ไฟล์ PDF</th> {/* Add new column for file */}
                        <th>การกระทำ</th>
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
                            <td className={invoice.status ? 'paid-status' : 'unpaid-status'}>
                                {invoice.status ? 'อนุมัติชำระ' : 'รออนุมัติชำระ'}
                            </td>
                            <td>
                                <td>
                                    {invoice.fileURL ? (
                                        <a href={invoice.fileURL} target="_blank" rel="noopener noreferrer" className='download-link'>
                                            <DownloadOutlined /> PDF
                                        </a>
                                    ) : '-'}
                                </td>

                            </td>
                            <td>
                                <button className='edit-button' onClick={() => handleEdit(invoice)}>แก้ไข</button>
                                <button className='toggle-status-button' onClick={() => toggleStatus(invoice)}>
                                    {invoice.status ? 'ยกเลิกอนุมัติ' : 'อนุมัติ'}
                                </button>
                                <button className='delete-button' onClick={() => handleDelete(invoice.id!)}>
                                    ลบ
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HouseInfo227;
