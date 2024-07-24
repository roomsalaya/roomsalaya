import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';

// Lazy load components
const AdminPage = lazy(() => import('./components/AdminPage'));
const UserPage201 = lazy(() => import('./components/UserPage201'));
const Login = lazy(() => import('./components/Login'));
const Home = lazy(() => import('./components/Home'));
const HouseInfo201 = lazy(() => import('./components/HouseInfo201'));
const Room201 = lazy(() => import('./components/Room201'));
const LoginUser = lazy(() => import('./components/LoginUser'));
const BankTransferForm201 = lazy(() => import('./components/BankTransferForm201'));
const PaymentHistory201 = lazy(() => import('./components/PaymentHistory201'));
const Allowpayment201 = lazy(() => import('./components/Allowpayment201'));
const Allowpayment = lazy(() => import('./components/Allowpayment'));
const HouseInfo202 = lazy(() => import('./components/HouseInfo202'));
const Room202 = lazy(() => import('./components/Room202'));
const PaymentHistory202 = lazy(() => import('./components/PaymentHistory202'));
const Allowpayment202 = lazy(() => import('./components/Allowpayment202'));
const UserPage202 = lazy(() => import('./components/UserPage202'));
const BankTransferForm202 = lazy(() => import('./components/BankTransferForm202'));

const App: React.FC = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/loginuser" element={<LoginUser />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin" element={user?.email === 'admin@salaya.com' ? <AdminPage /> : <Navigate to="/login" />} />
                    <Route path='/UserPage201' element={<UserPage201 />} />
                    <Route path='/UserPage202' element={<UserPage202 />} />
                    <Route path="/houseinfo201" element={user ? <HouseInfo201 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo202" element={<HouseInfo202 />} />
                    <Route path="/room201" element={user ? <Room201 /> : <Navigate to="/login" />} />
                    <Route path="/room202" element={user ? <Room202 /> : <Navigate to="/login" />} />
                    <Route path="/" element={<Home />} />
                    <Route path='/bank201' element={<BankTransferForm201 />} />
                    <Route path='/bank202' element={<BankTransferForm202 />} />
                    <Route path='/paymenthistory201' element={<PaymentHistory201 />} />
                    <Route path='/paymenthistory202' element={<PaymentHistory202 />} />
                    <Route path='/allowpayment201' element={<Allowpayment201 />} />
                    <Route path='/allowpayment202' element={<Allowpayment202 />} />
                    <Route path='/allowpayment' element={<Allowpayment />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
