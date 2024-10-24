import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        mobile: '',
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/user/signup', formData);
            
            if (response.data.success) {
                localStorage.setItem('userName', formData.username);
            }

            navigate('/booking-overview')

        } catch (error) {
            console.error('Error during sign up:', error);
            alert('SignUp was Unsuccessful. Try Again')
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <div className='background-image'></div>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange} 
                        placeholder="Username" 
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        placeholder="Password" 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="Email" 
                        required 
                    />
                    <input 
                        type="text" 
                        name="mobile" 
                        value={formData.mobile} 
                        onChange={handleChange} 
                        placeholder="Mobile" 
                        required 
                    />
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already registered? <a href="/login">Log In</a></p>
            </div>
        </div>
    );
};

export default SignUp;
