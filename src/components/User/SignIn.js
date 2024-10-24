import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);

      const response = await axios.post('http://localhost:8080/login', formData, {
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded', 
          },
          withCredentials: true
      });

      console.log(response.data);
      const { userName } = response.data;

      localStorage.setItem('userName', userName);
      console.log("User ID stored:", userName);

      navigate('/booking-overview')
  } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
          console.error("Error data:", error.response.data);
          console.error("Error status:", error.response.status);
      }
      alert('SignIn was Unsuccessful. Try Again')
  }
  };

  // useEffect(() => {
  //   const clearLocalStorageOnUnload = () => {
  //     localStorage.removeItem('userName');
  //   };
  
  //   window.addEventListener('beforeunload', clearLocalStorageOnUnload);
  
  //   return () => {
  //     window.removeEventListener('beforeunload', clearLocalStorageOnUnload);
  //   };
  // }, []);
  

  return (
    <div className="signup-container">
            <div className="signup-box">
                <div className='background-image'></div>
                <h2>Sign In</h2>
                <form onSubmit={handleLogin}>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder="Username" 
                        required
                    />
                   <input 
                         type="password" 
                         value={password} 
                         onChange={(e) => setPassword(e.target.value)} 
                         placeholder="Password" 
                         required
                   />
                   <a href="/login">Forgot Password?</a>
                   <button type='submit'>Sign In</button>
               </form>
               <p>Don't have an account? <a href="/register">Sign Up</a></p>
            </div>
         </div>   
  );
};

export default SignIn;
