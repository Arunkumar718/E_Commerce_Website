import React, { useState } from 'react';

const LoginPage = ({ setPage, showMessage, setUserData }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleLogin = (e) => {
        e.preventDefault();

        // Hardcoded credentials
        const validEmail = "ak@gmail.com";
        const validPassword = "password123";

        if (formData.email === validEmail && formData.password === validPassword) {
            showMessage("Login successful!");
            setUserData({ email: validEmail, name: "Arunkumar" }); // mock user
            setPage("home");
        } else {
            showMessage("Invalid email or password.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="login-page">
            <h1 className="login-title">Login</h1>
            <div className="login-container">
                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
