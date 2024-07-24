import React, { useEffect, useState } from 'react';
import { collection, addDoc, updateDoc, doc, getDocs, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig'; // Adjust the path as needed
import Modal from 'react-modal';

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

const HouseInfo332 = () => {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [form, setForm] = useState<Invoice>({
        month: '',
        name: '',
        room: '',
        rent: '',
        electricity: '',
        water: '',
        total: '',
        status: false, // default to Unpaid
    });
    const [editingId, setEditingId] = useState<string | null>(null);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    // Fetch invoices from Firestore
    const fetchInvoices = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "invoices5")); // Use a different collection name
            const invoicesData: Invoice[] = [];
            querySnapshot.forEach((doc) => {
                invoicesData.push({ id: doc.id, ...doc.data() } as Invoice);
            });
            // Sort invoices by createdAt in ascending order to show newer invoices below older ones
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
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const user = auth.currentUser;
            if (!user) {
                console.error("No authenticated user");
                return;
            }

            const invoiceData = {
                ...form,
                email: user.email, // Use the authenticated user's email
                createdAt: new Date(), // Add current timestamp
            };

            if (editingId) {
                // Update existing invoice
                const invoiceRef = doc(db, "invoices332", editingId); // Use a different collection name
                await updateDoc(invoiceRef, invoiceData);
                // Refetch invoices after update
                await fetchInvoices();
                setEditingId(null);
            } else {
                // Add new invoice
                await addDoc(collection(db, "invoices332"), invoiceData); // Use a different collection name
                // Refetch invoices after addition
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
            setModalIsOpen(false); // Close the modal after submit
        } catch (e) {
            console.error("Error adding/updating document: ", e);
        }
    };

    const handleEdit = (invoice: Invoice) => {
        setForm(invoice);
        setEditingId(invoice.id || null);
        setModalIsOpen(true); // Open the modal when editing
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
        setModalIsOpen(false); // Close the modal on cancel
    };

    const toggleStatus = async (invoice: Invoice) => {
        try {
            const invoiceRef = doc(db, "invoices332", invoice.id!); // Use a different collection name
            await updateDoc(invoiceRef, { status: !invoice.status });
            fetchInvoices(); // Refresh the invoices list
        } catch (e) {
            console.error("Error updating status: ", e);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteDoc(doc(db, "invoices332", id)); // Use a different collection name
            fetchInvoices(); // Refresh the invoices list after deletion
        } catch (e) {
            console.error("Error deleting document: ", e);
        }
    };

    return (
        <div className='house-info-container'>
            <h2>รายการแจ้งหนี้ห้อง 332</h2>
            <button className='add-invoice-button' onClick={() => setModalIsOpen(true)}>Add Invoice</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCancel}
                contentLabel="Invoice Form"
                className='invoice-modal'
                overlayClassName='invoice-modal-overlay'
            >
                <h2>{editingId ? 'Edit Invoice' : 'Add Invoice'}</h2>
                <form onSubmit={handleSubmit} className='invoice-form'>
                    <input
                        type='text'
                        name='month'
                        value={form.month}
                        onChange={handleChange}
                        placeholder='เดือน'
                        required
                    />
                    <input
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder='ชื่อ'
                        required
                    />
                    <input
                        type='text'
                        name='room'
                        value={form.room}
                        onChange={handleChange}
                        placeholder='ห้อง'
                        required
                    />
                    <input
                        type='number'
                        name='rent'
                        value={form.rent}
                        onChange={handleChange}
                        placeholder='ค่าเช่า'
                        required
                    />
                    <input
                        type='number'
                        name='electricity'
                        value={form.electricity}
                        onChange={handleChange}
                        placeholder='ค่าไฟ'
                        required
                    />
                    <input
                        type='number'
                        name='water'
                        value={form.water}
                        onChange={handleChange}
                        placeholder='ค่าน้ำ'
                        required
                    />
                    <input
                        type='number'
                        name='total'
                        value={form.total}
                        onChange={handleChange}
                        placeholder='รวม'
                        required
                    />
                    <button type='submit'>{editingId ? 'Save Changes' : 'Add Invoice'}</button>
                    <button type='button' onClick={handleCancel}>Cancel</button>
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
                        <th>Actions</th>
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
                                <button className='edit-button' onClick={() => handleEdit(invoice)}>Edit</button>
                                <button 
                                    className={`toggle-status-button ${invoice.status ? 'paid-status' : 'unpaid-status'}`} 
                                    onClick={() => toggleStatus(invoice)}
                                >
                                    {invoice.status ? 'อนุมัติชำระ' : 'รออนุมัติชำระ'}
                                </button>
                                <button 
                                    className='delete-button' 
                                    onClick={() => handleDelete(invoice.id!)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HouseInfo332;
