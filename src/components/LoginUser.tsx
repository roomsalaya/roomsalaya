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

            if (userEmail === '201@room.com') {
                navigate('/UserPage201'); // Navigate to UserPage
            } else if (userEmail === '202@room.com') {
                navigate('/UserPage202');
            } else if (userEmail === '204@room.com') {
                navigate('/userpage204');
            } else if (userEmail === '205@room.com') {
                navigate('/userpage205');
            } else if (userEmail === '206@room.com') {
                navigate('/userpage206');
            } else if (userEmail === '207@room.com') {
                navigate('/userpage207');
            } else if (userEmail === '208@room.com') {
                navigate('/userpage208');
            } else if (userEmail === '309@room.com') {
                navigate('/userpage309');
            } else if (userEmail === '310@room.com') {
                navigate('/userpage310');
            } else if (userEmail === '311@room.com') {
                navigate('/userpage311');
            } else if (userEmail === '312@room.com') {
                navigate('/userpage312');
            } else if (userEmail === '313@room.com') {
                navigate('/userpage313');
            } else if (userEmail === '314@room.com') {
                navigate('/userpage314');
            } else if (userEmail === '315@room.com') {
                navigate('/userpage315');
            } else if (userEmail === '316@room.com') {
                navigate('/userpage316');
            } else if (userEmail === '225@room.com') {
                navigate('/userpage225');
            } else if (userEmail === '226@room.com') {
                navigate('/userpage225');
            } else if (userEmail === '227@room.com') {
                navigate('/userpage225');
            } else if (userEmail === '228@room.com') {
                navigate('/userpage225');
            } else if (userEmail === '329@room.com') {
                navigate('/userpage225');
            } else if (userEmail === '330@room.com') {
                navigate('/userpage225');
            } else if (userEmail === '331@room.com') {
                navigate('/userpage225');
            } else if (userEmail === '332@room.com') {
                navigate('/userpage332');
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
