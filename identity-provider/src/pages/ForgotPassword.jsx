import './ForgotPassword.css'
import forgotPasswordImage from '/forgot-password-image.png'
import ValidationTextFields from '../components/ValidationTextFields'

export default function forgotPassword() {

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
                <ValidationTextFields/>
            </div>
            <div id="redirect-button-divs">
                <button id="confirm-button">Send Email</button>
            </div>
            
        </div>
    )
}