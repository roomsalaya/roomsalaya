import React, { createContext, useState, useContext, ReactNode } from 'react';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

interface Payment {
    key: string;
    item: string;
    detail: React.ReactNode;
    status: string;
}

interface PaymentContextType {
    payments: Payment[];
    updatePaymentStatus: (key: string, currentStatus: string) => Promise<void>;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [payments, setPayments] = useState<Payment[]>([]);

    // Fetch data from Firestore
    const fetchPayments = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "paymentProofs"));
            const fetchedData = querySnapshot.docs.map((doc) => {
                const data = doc.data();
                return {
                    key: doc.id,
                    item: data.invoice,
                    detail: (
                        <>
                            {data.imageUrl ? (
                                <img src={data.imageUrl} alt="Proof" style={{ maxWidth: '200px' }} />
                            ) : (
                                'ไม่พบภาพ'
                            )}
                        </>
                    ),
                    status: data.status
                };
            });
            setPayments(fetchedData);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    // Update status in Firestore
    const updatePaymentStatus = async (key: string, currentStatus: string) => {
        const newStatus = currentStatus === 'pending' ? 'approved' : 'pending';
        const docRef = doc(db, "paymentProofs", key);
        
        try {
            await updateDoc(docRef, { status: newStatus });
            fetchPayments(); // Refresh payments data
        } catch (error) {
            console.error('Error updating status: ', error);
            throw error; // Re-throw to be caught in component
        }
    };

    return (
        <PaymentContext.Provider value={{ payments, updatePaymentStatus }}>
            {children}
        </PaymentContext.Provider>
    );
};

export const usePaymentContext = () => {
    const context = useContext(PaymentContext);
    if (context === undefined) {
        throw new Error('usePaymentContext must be used within a PaymentProvider');
    }
    return context;
};
