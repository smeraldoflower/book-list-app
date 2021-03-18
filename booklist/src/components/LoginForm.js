import React, { useContext, useState } from 'react';
// import { AuthContext } from '../contexts/AuthContext';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // setLoginStatus(true);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text' placeholder="email address" required
                value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type='text' placeholder="password" required
                value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <input type='submit' value="LOGIN" />
            <input type='submit' value="SIGNUP" />
        </form>
    );
}

export default LoginForm;