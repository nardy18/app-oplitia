import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        // Simulate authentication process
        if (email === 'test@example.com' && password === 'password') {
            // Redirect to dashboard upon success
            history.push('/dashboard');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;