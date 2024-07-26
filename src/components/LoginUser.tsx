import React, { useState } from 'react';
import { auth } from '../firebaseConfig'; // Adjust the path as needed
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './LoginUser.css';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'; // Import icons from Ant Design

const LoginUser: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const userEmail = userCredential.user.email;

            switch (userEmail) {
                case '201@room.com':
                    navigate('/UserPage201');
                    break;
                case '202@room.com':
                    navigate('/UserPage202');
                    break;
                case '204@room.com':
                    navigate('/userpage204');
                    break;
                case '205@room.com':
                    navigate('/userpage205');
                    break;
                case '206@room.com':
                    navigate('/userpage206');
                    break;
                case '207@room.com':
                    navigate('/userpage207');
                    break;
                case '208@room.com':
                    navigate('/userpage208');
                    break;
                case '309@room.com':
                    navigate('/userpage309');
                    break;
                case '310@room.com':
                    navigate('/userpage310');
                    break;
                case '311@room.com':
                    navigate('/userpage311');
                    break;
                case '312@room.com':
                    navigate('/userpage312');
                    break;
                case '313@room.com':
                    navigate('/userpage313');
                    break;
                case '314@room.com':
                    navigate('/userpage314');
                    break;
                case '315@room.com':
                    navigate('/userpage315');
                    break;
                case '316@room.com':
                    navigate('/userpage316');
                    break;
                case '225@room.com':
                    navigate('/userpage225');
                    break;
                case '226@room.com':
                    navigate('/userpage226');
                    break;
                case '227@room.com':
                    navigate('/userpage227');
                    break;
                case '228@room.com':
                    navigate('/userpage228');
                    break;
                case '329@room.com':
                    navigate('/userpage329');
                    break;
                case '330@room.com':
                    navigate('/userpage330');
                    break;
                case '331@room.com':
                    navigate('/userpage331');
                    break;
                case '332@room.com':
                    navigate('/userpage332');
                    break;
                case '200@room.com':
                    navigate('/userpage200');
                    break;
                default:
                    setError('Unauthorized access.');
                    return;
            }
        } catch (error) {
            setError('Failed to login. Please check your email and password.');
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
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
                <div className="password-input-container">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='กรอกรหัสผ่าน'
                        required
                    />
                    <span onClick={toggleShowPassword} className="password-toggle-icon">
                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                    </span>
                </div>
                {error && <p>{error}</p>}
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default LoginUser;
