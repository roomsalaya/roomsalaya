import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import HouseInfo204 from './components/HouseInfo204';
import BankTransferForm204 from './components/BankTransferForm204';
import Room204 from './components/Room204';
import UserPage204 from './components/UserPage204';
import UserPage205 from './components/UserPage205';
import Room205 from './components/Room205';
import BankTransferForm205 from './components/BankTransferForm205';
import PaymentHistory204 from './components/PaymentHistory204';
import PaymentHistory205 from './components/PaymentHistory205';
import Allowpayment204 from './components/Allowpayment204';
import Allowpayment205 from './components/Allowpayment205';
import HouseInfo205 from './components/HouseInfo205';
import UserPage206 from './components/UserPage206';
import HouseInfo206 from './components/HouseInfo206';
import Room206 from './components/Room206';
import BankTransferForm206 from './components/BankTransferForm206';
import PaymentHistory206 from './components/PaymentHistory206';
import Allowpayment206 from './components/Allowpayment206';

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
        <BrowserRouter basename="/roomsalaya">
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/loginuser" element={<LoginUser />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin" element={user?.email === 'admin@salaya.com' ? <AdminPage /> : <Navigate to="/login" />} />
                    
                    <Route path='/UserPage201' element={<UserPage201 />} />
                    <Route path='/UserPage202' element={<UserPage202 />} />
                    <Route path='/UserPage204' element={<UserPage204 />} />
                    <Route path='/UserPage205' element={<UserPage205 />} />
                    <Route path='/UserPage206' element={<UserPage206 />} />
                    
                    <Route path="/houseinfo201" element={user ? <HouseInfo201 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo202" element={user ? <HouseInfo202 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo204" element={user ? <HouseInfo204 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo205" element={user ? <HouseInfo205 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo206" element={user ? <HouseInfo206 /> : <Navigate to="/login" />} />
                    
                    <Route path="/room201" element={user ? <Room201 /> : <Navigate to="/login" />} />
                    <Route path="/room202" element={user ? <Room202 /> : <Navigate to="/login" />} />
                    <Route path="/room204" element={user ? <Room204 /> : <Navigate to="/login" />} />
                    <Route path="/room205" element={user ? <Room205 /> : <Navigate to="/login" />} />
                    <Route path="/room206" element={user ? <Room206 /> : <Navigate to="/login" />} />
                    
                    <Route path="/" element={<Home />} />

                    <Route path='/bank201' element={<BankTransferForm201 />} />
                    <Route path='/bank202' element={<BankTransferForm202 />} />
                    <Route path='/bank204' element={<BankTransferForm204 />} />
                    <Route path='/bank205' element={<BankTransferForm205 />} />
                    <Route path='/bank206' element={<BankTransferForm206 />} />

                    <Route path='/paymenthistory201' element={<PaymentHistory201 />} />
                    <Route path='/paymenthistory202' element={<PaymentHistory202 />} />
                    <Route path='/paymenthistory204' element={<PaymentHistory204 />} />
                    <Route path='/paymenthistory205' element={<PaymentHistory205 />} />
                    <Route path='/paymenthistory206' element={<PaymentHistory206 />} />
                    
                    <Route path='/allowpayment201' element={<Allowpayment201 />} />
                    <Route path='/allowpayment202' element={<Allowpayment202 />} />
                    <Route path='/allowpayment204' element={<Allowpayment204 />} />
                    <Route path='/allowpayment205' element={<Allowpayment205 />} />
                    <Route path='/allowpayment206' element={<Allowpayment206 />} />
                    
                    <Route path='/allowpayment' element={<Allowpayment />} />
                    
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
