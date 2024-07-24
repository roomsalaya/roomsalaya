import React, { useState } from 'react';
import { auth } from '../firebaseConfig'; // Adjust the path as needed
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './LoginUser.css';

const LoginUser: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const userEmail = userCredential.user.email;

            if (userEmail === '201@salaya.com') {
                navigate('/UserPage201'); // Navigate to UserPage
            } else if (userEmail === '202@salaya.com') {
                navigate('/UserPage202');
            } else if (userEmail === '204@salaya.com') {
                navigate('/userpage204');
            } else {
                setError('Unauthorized access.');
                return;
            }
        } catch (error) {
            setError('Failed to login. Please check your email and password.');
        }
    };

    return (
        <div className="login-container">
            <iframe
                src="https://giphy.com/embed/vtOV8OFqUmwDhLC3hb"
                width="50"
                height="50"
                className="giphy-embed"
                title="img"
                allowFullScreen>
            </iframe>
            <h2>เข้าสู่ระบบผู้เช่า</h2>
            <form onSubmit={handleLogin}>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='กรอกอีเมล'
                    required
                />
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='กรอกรหัสผ่าน'
                    required
                />
                {error && <p>{error}</p>}
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default LoginUser;
