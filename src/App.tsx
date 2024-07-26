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
import UserPage207 from './components/UserPage207';
import HouseInfo207 from './components/HouseInfo207';
import Room207 from './components/Room207';
import BankTransferForm207 from './components/BankTransferForm207';
import PaymentHistory207 from './components/PaymentHistory207';
import Allowpayment207 from './components/Allowpayment207';
import Allowpayment208 from './components/Allowpayment208';
import Allowpayment309 from './components/Allowpayment309';
import Allowpayment310 from './components/Allowpayment310';
import Allowpayment311 from './components/Allowpayment311';
import Allowpayment312 from './components/Allowpayment312';
import Allowpayment313 from './components/Allowpayment313';
import Allowpayment314 from './components/Allowpayment314';
import Allowpayment315 from './components/Allowpayment315';
import Allowpayment316 from './components/Allowpayment316';
import Allowpayment225 from './components/Allowpayment225';
import Allowpayment226 from './components/Allowpayment226';
import Allowpayment227 from './components/Allowpayment227';
import Allowpayment228 from './components/Allowpayment228';
import Allowpayment329 from './components/Allowpayment329';
import Allowpayment330 from './components/Allowpayment330';
import Allowpayment331 from './components/Allowpayment331';
import Allowpayment332 from './components/Allowpayment332';
import BankTransferForm208 from './components/BankTransferForm208';
import BankTransferForm309 from './components/BankTransferForm309';
import BankTransferForm310 from './components/BankTransferForm310';
import BankTransferForm311 from './components/BankTransferForm311';
import BankTransferForm312 from './components/BankTransferForm312';
import BankTransferForm313 from './components/BankTransferForm313';
import BankTransferForm314 from './components/BankTransferForm314';
import BankTransferForm315 from './components/BankTransferForm315';
import BankTransferForm316 from './components/BankTransferForm316';
import BankTransferForm225 from './components/BankTransferForm225';
import BankTransferForm226 from './components/BankTransferForm226';
import BankTransferForm227 from './components/BankTransferForm227';
import BankTransferForm228 from './components/BankTransferForm228';
import BankTransferForm329 from './components/BankTransferForm329';
import BankTransferForm330 from './components/BankTransferForm330';
import BankTransferForm331 from './components/BankTransferForm331';
import BankTransferForm332 from './components/BankTransferForm332';
import UserPage208 from './components/UserPage208';
import UserPage309 from './components/UserPage309';
import UserPage310 from './components/UserPage310';
import UserPage311 from './components/UserPage311';
import UserPage312 from './components/UserPage312';
import UserPage313 from './components/UserPage313';
import UserPage314 from './components/UserPage314';
import UserPage315 from './components/UserPage315';
import UserPage316 from './components/UserPage316';
import UserPage225 from './components/UserPage225';
import UserPage226 from './components/UserPage226';
import UserPage227 from './components/UserPage227';
import UserPage228 from './components/UserPage228';
import UserPage329 from './components/UserPage329';
import UserPage330 from './components/UserPage330';
import UserPage331 from './components/UserPage331';
import UserPage332 from './components/UserPage332';
import HouseInfo208 from './components/HouseInfo208';
import HouseInfo309 from './components/HouseInfo309';
import HouseInfo310 from './components/HouseInfo310';
import HouseInfo311 from './components/HouseInfo311';
import HouseInfo312 from './components/HouseInfo312';
import HouseInfo313 from './components/HouseInfo313';
import HouseInfo314 from './components/HouseInfo314';
import HouseInfo315 from './components/HouseInfo315';
import HouseInfo316 from './components/HouseInfo316';
import HouseInfo225 from './components/HouseInfo225';
import HouseInfo226 from './components/HouseInfo226';
import HouseInfo227 from './components/HouseInfo227';
import HouseInfo228 from './components/HouseInfo228';
import HouseInfo329 from './components/HouseInfo329';
import HouseInfo330 from './components/HouseInfo330';
import HouseInfo331 from './components/HouseInfo331';
import HouseInfo332 from './components/HouseInfo332';
import Room208 from './components/Room208';
import Room309 from './components/Room309';
import Room310 from './components/Room310';
import Room311 from './components/Room311';
import Room312 from './components/Room312';
import Room313 from './components/Room313';
import Room314 from './components/Room314';
import Room315 from './components/Room315';
import Room316 from './components/Room316';
import Room225 from './components/Room225';
import Room226 from './components/Room226';
import Room227 from './components/Room227';
import Room228 from './components/Room228';
import Room329 from './components/Room329';
import Room330 from './components/Room330';
import Room331 from './components/Room331';
import Room332 from './components/Room332';
import PaymentHistory208 from './components/PaymentHistory208';
import PaymentHistory309 from './components/PaymentHistory309';
import PaymentHistory310 from './components/PaymentHistory310';
import PaymentHistory311 from './components/PaymentHistory311';
import PaymentHistory312 from './components/PaymentHistory312';
import PaymentHistory313 from './components/PaymentHistory313';
import PaymentHistory314 from './components/PaymentHistory314';
import PaymentHistory315 from './components/PaymentHistory315';
import PaymentHistory316 from './components/PaymentHistory316';
import PaymentHistory225 from './components/PaymentHistory225';
import PaymentHistory226 from './components/PaymentHistory226';
import PaymentHistory227 from './components/PaymentHistory227';
import PaymentHistory228 from './components/PaymentHistory228';
import PaymentHistory329 from './components/PaymentHistory329';
import PaymentHistory330 from './components/PaymentHistory330';
import PaymentHistory331 from './components/PaymentHistory331';
import PaymentHistory332 from './components/PaymentHistory332';
import UserPage200 from './components/UserPage200';
import HouseInfo200 from './components/HouseInfo200';
import Room200 from './components/Room200';
import BankTransferForm200 from './components/BankTransferForm200';
import PaymentHistory200 from './components/PaymentHistory200';
import Allowpayment200 from './components/Allowpayment200';

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
                    <Route path='/UserPage207' element={<UserPage207 />} />
                    <Route path='/UserPage208' element={<UserPage208 />} />
                    <Route path='/UserPage309' element={<UserPage309 />} />
                    <Route path='/UserPage310' element={<UserPage310 />} />
                    <Route path='/UserPage311' element={<UserPage311 />} />
                    <Route path='/UserPage312' element={<UserPage312 />} />
                    <Route path='/UserPage313' element={<UserPage313 />} />
                    <Route path='/UserPage314' element={<UserPage314 />} />
                    <Route path='/UserPage315' element={<UserPage315 />} />
                    <Route path='/UserPage316' element={<UserPage316 />} />
                    <Route path='/UserPage225' element={<UserPage225 />} />
                    <Route path='/UserPage226' element={<UserPage226 />} />
                    <Route path='/UserPage227' element={<UserPage227 />} />
                    <Route path='/UserPage228' element={<UserPage228 />} />
                    <Route path='/UserPage329' element={<UserPage329 />} />
                    <Route path='/UserPage330' element={<UserPage330 />} />
                    <Route path='/UserPage331' element={<UserPage331 />} />
                    <Route path='/UserPage332' element={<UserPage332 />} />
                    <Route path='/UserPage200' element={<UserPage200 />} />

                    
                    <Route path="/houseinfo201" element={user ? <HouseInfo201 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo202" element={user ? <HouseInfo202 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo204" element={user ? <HouseInfo204 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo205" element={user ? <HouseInfo205 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo206" element={user ? <HouseInfo206 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo207" element={user ? <HouseInfo207 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo208" element={user ? <HouseInfo208 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo309" element={user ? <HouseInfo309 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo310" element={user ? <HouseInfo310 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo311" element={user ? <HouseInfo311 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo312" element={user ? <HouseInfo312 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo313" element={user ? <HouseInfo313 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo314" element={user ? <HouseInfo314 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo315" element={user ? <HouseInfo315 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo316" element={user ? <HouseInfo316 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo225" element={user ? <HouseInfo225 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo226" element={user ? <HouseInfo226 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo227" element={user ? <HouseInfo227 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo228" element={user ? <HouseInfo228 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo329" element={user ? <HouseInfo329 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo330" element={user ? <HouseInfo330 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo331" element={user ? <HouseInfo331 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo332" element={user ? <HouseInfo332 /> : <Navigate to="/login" />} />
                    <Route path="/houseinfo200" element={user ? <HouseInfo200 /> : <Navigate to="/login" />} />
                    
                    
                    <Route path="/room201" element={user ? <Room201 /> : <Navigate to="/login" />} />
                    <Route path="/room202" element={user ? <Room202 /> : <Navigate to="/login" />} />
                    <Route path="/room204" element={user ? <Room204 /> : <Navigate to="/login" />} />
                    <Route path="/room205" element={user ? <Room205 /> : <Navigate to="/login" />} />
                    <Route path="/room206" element={user ? <Room206 /> : <Navigate to="/login" />} />
                    <Route path="/room207" element={user ? <Room207 /> : <Navigate to="/login" />} />
                    <Route path="/room208" element={user ? <Room208 /> : <Navigate to="/login" />} />
                    <Route path="/room309" element={user ? <Room309 /> : <Navigate to="/login" />} />
                    <Route path="/room310" element={user ? <Room310 /> : <Navigate to="/login" />} />
                    <Route path="/room311" element={user ? <Room311 /> : <Navigate to="/login" />} />
                    <Route path="/room312" element={user ? <Room312 /> : <Navigate to="/login" />} />
                    <Route path="/room313" element={user ? <Room313 /> : <Navigate to="/login" />} />
                    <Route path="/room314" element={user ? <Room314 /> : <Navigate to="/login" />} />
                    <Route path="/room315" element={user ? <Room315 /> : <Navigate to="/login" />} />
                    <Route path="/room316" element={user ? <Room316 /> : <Navigate to="/login" />} />
                    <Route path="/room225" element={user ? <Room225 /> : <Navigate to="/login" />} />
                    <Route path="/room226" element={user ? <Room226 /> : <Navigate to="/login" />} />
                    <Route path="/room227" element={user ? <Room227 /> : <Navigate to="/login" />} />
                    <Route path="/room228" element={user ? <Room228 /> : <Navigate to="/login" />} />
                    <Route path="/room329" element={user ? <Room329 /> : <Navigate to="/login" />} />
                    <Route path="/room330" element={user ? <Room330 /> : <Navigate to="/login" />} />
                    <Route path="/room331" element={user ? <Room331 /> : <Navigate to="/login" />} />
                    <Route path="/room332" element={user ? <Room332 /> : <Navigate to="/login" />} />
                    <Route path="/room200" element={user ? <Room200 /> : <Navigate to="/login" />} />
                    
                    <Route path="/" element={<Home />} />

                    <Route path='/bank201' element={<BankTransferForm201 />} />
                    <Route path='/bank202' element={<BankTransferForm202 />} />
                    <Route path='/bank204' element={<BankTransferForm204 />} />
                    <Route path='/bank205' element={<BankTransferForm205 />} />
                    <Route path='/bank206' element={<BankTransferForm206 />} />
                    <Route path='/bank207' element={<BankTransferForm207 />} />
                    <Route path='/bank208' element={<BankTransferForm208 />} />
                    <Route path='/bank309' element={<BankTransferForm309 />} />
                    <Route path='/bank310' element={<BankTransferForm310 />} />
                    <Route path='/bank311' element={<BankTransferForm311 />} />
                    <Route path='/bank312' element={<BankTransferForm312 />} />
                    <Route path='/bank313' element={<BankTransferForm313 />} />
                    <Route path='/bank314' element={<BankTransferForm314 />} />
                    <Route path='/bank315' element={<BankTransferForm315 />} />
                    <Route path='/bank316' element={<BankTransferForm316 />} />
                    <Route path='/bank225' element={<BankTransferForm225 />} />
                    <Route path='/bank226' element={<BankTransferForm226 />} />
                    <Route path='/bank227' element={<BankTransferForm227 />} />
                    <Route path='/bank228' element={<BankTransferForm228 />} />
                    <Route path='/bank329' element={<BankTransferForm329 />} />
                    <Route path='/bank330' element={<BankTransferForm330 />} />
                    <Route path='/bank331' element={<BankTransferForm331 />} />
                    <Route path='/bank332' element={<BankTransferForm332 />} />
                    <Route path='/bank200' element={<BankTransferForm200 />} />

                    <Route path='/paymenthistory201' element={<PaymentHistory201 />} />
                    <Route path='/paymenthistory202' element={<PaymentHistory202 />} />
                    <Route path='/paymenthistory204' element={<PaymentHistory204 />} />
                    <Route path='/paymenthistory205' element={<PaymentHistory205 />} />
                    <Route path='/paymenthistory206' element={<PaymentHistory206 />} />
                    <Route path='/paymenthistory207' element={<PaymentHistory207 />} />
                    <Route path='/paymenthistory208' element={<PaymentHistory208 />} />
                    <Route path='/paymenthistory309' element={<PaymentHistory309 />} />
                    <Route path='/paymenthistory310' element={<PaymentHistory310 />} />
                    <Route path='/paymenthistory311' element={<PaymentHistory311 />} />
                    <Route path='/paymenthistory312' element={<PaymentHistory312 />} />
                    <Route path='/paymenthistory313' element={<PaymentHistory313 />} />
                    <Route path='/paymenthistory314' element={<PaymentHistory314 />} />
                    <Route path='/paymenthistory315' element={<PaymentHistory315 />} />
                    <Route path='/paymenthistory316' element={<PaymentHistory316 />} />
                    <Route path='/paymenthistory225' element={<PaymentHistory225 />} />
                    <Route path='/paymenthistory226' element={<PaymentHistory226 />} />
                    <Route path='/paymenthistory227' element={<PaymentHistory227 />} />
                    <Route path='/paymenthistory228' element={<PaymentHistory228 />} />
                    <Route path='/paymenthistory329' element={<PaymentHistory329 />} />
                    <Route path='/paymenthistory330' element={<PaymentHistory330 />} />
                    <Route path='/paymenthistory331' element={<PaymentHistory331 />} />
                    <Route path='/paymenthistory332' element={<PaymentHistory332 />} />
                    <Route path='/paymenthistory200' element={<PaymentHistory200 />} />
                    
                    <Route path='/allowpayment201' element={<Allowpayment201 />} />
                    <Route path='/allowpayment202' element={<Allowpayment202 />} />
                    <Route path='/allowpayment204' element={<Allowpayment204 />} />
                    <Route path='/allowpayment205' element={<Allowpayment205 />} />
                    <Route path='/allowpayment206' element={<Allowpayment206 />} />
                    <Route path='/allowpayment207' element={<Allowpayment207 />} />
                    <Route path='/allowpayment208' element={<Allowpayment208 />} />
                    <Route path='/allowpayment309' element={<Allowpayment309 />} />
                    <Route path='/allowpayment310' element={<Allowpayment310 />} />
                    <Route path='/allowpayment311' element={<Allowpayment311 />} />
                    <Route path='/allowpayment312' element={<Allowpayment312 />} />
                    <Route path='/allowpayment313' element={<Allowpayment313 />} />
                    <Route path='/allowpayment314' element={<Allowpayment314 />} />
                    <Route path='/allowpayment315' element={<Allowpayment315 />} />
                    <Route path='/allowpayment316' element={<Allowpayment316 />} />
                    <Route path='/allowpayment225' element={<Allowpayment225 />} />
                    <Route path='/allowpayment226' element={<Allowpayment226 />} />
                    <Route path='/allowpayment227' element={<Allowpayment227 />} />
                    <Route path='/allowpayment228' element={<Allowpayment228 />} />
                    <Route path='/allowpayment329' element={<Allowpayment329 />} />
                    <Route path='/allowpayment330' element={<Allowpayment330 />} />
                    <Route path='/allowpayment331' element={<Allowpayment331 />} />
                    <Route path='/allowpayment332' element={<Allowpayment332 />} />
                    <Route path='/allowpayment200' element={<Allowpayment200 />} />
                    
                    <Route path='/allowpayment' element={<Allowpayment />} />
                    
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
