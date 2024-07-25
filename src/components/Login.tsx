import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import './Login.css';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'; // Import icons from Ant Design

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
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

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
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
                onKeyDown={handleKeyDown}
            />
            <div className="password-input-container">
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="กรอกรหัสผ่าน"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <span onClick={toggleShowPassword} className="password-toggle-icon">
                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                </span>
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
