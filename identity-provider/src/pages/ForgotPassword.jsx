import { useState } from 'react';
import './ForgotPassword.css'
import forgotPasswordImage from '/forgot-password-image.png'
import ValidationTextFields from '../components/ValidationTextFields'

export default function forgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    async function logInput(input) {
        try {
          const response = await fetch('https://localhost:3002/forgot-password', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }), 
            credentials: "include"
          });
      
          const result = await response.text();
          console.log(result); 
        } catch (error) {
          console.error('Error logging input:', error);
        }
    }


    return (
        <div id="forgot-password-page">
            <div id="title-div">
                <h1 id="title">Forgot Password?</h1>
                <p id="subtitle">Forgot your password? No problem. Just enter your<br></br> email and we’ll send you instructions to reset it.</p>
            </div>
            <div id="image-section">
                <img id="image" src={forgotPasswordImage}></img>
            </div>

            <h2 id="email-title">Enter your email address</h2>
            <div id="email-div">
                <ValidationTextFields value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div id="redirect-button-divs">
            <button onClick={() => logInput()} id="confirm-button">Send Email</button>
            
            </div>
            <p>Email sent successfully</p>
        </div>
    )
}