import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import './Login.css'; // Import CSS file

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            if (email === 'admin@salaya.com') {
                navigate('/admin'); // Redirect to AdminPage for admin users
            } else {
                navigate('/userpage201'); // Redirect to UserPage for regular users
            }
        } catch (err) {
            setError('Login failed');
        }
    };

    return (
        <div className="login-container">
            <iframe
                src="https://giphy.com/embed/QBieGCRF9TNyZRcs4S"
                width="50"
                height="50"
                className="giphy-embed"
                title="img"
                allowFullScreen>
            </iframe>
            <h2>เข้าสู่ระบบแอดมิน</h2>
            {error && <p>{error}</p>}
            <input
                type="email"
                placeholder="กรอกอีเมล"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="กรอกรหัสผ่าน"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
