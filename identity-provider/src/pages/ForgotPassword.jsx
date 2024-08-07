import './ForgotPassword.css'
import forgotPasswordImage from '/forgot-password-image.png'
import ValidationTextFields from '../components/ValidationTextFields'

export default function forgotPassword() {

    const ForgotPassword = () => {
        console.log("This button will take you back to the login page. Users can press this button after they enter their email to resend their password. ")
}
    const SendEmail = () => {
        console.log("This button will send a password reset email to the one the user provided above. ")


    }
    return (
        <div id="forgot-password-page">
            <div id="title-div">
                <h1 id="title">Forgot Password?</h1>
                <p id="subtitle">Forgot your password? No problem. Just enter your<br></br> email and we’ll send you instructions to reset it.</p>
            </div>
            <div id="image-div">
                <img id="forgot-password-image"src={forgotPasswordImage}></img>
            </div>
            <h2 id="email-title">Enter your email address</h2>
            <div id="email-div">
                <ValidationTextFields/>
            </div>
            <div id="redirect-button-divs">
                <button id="confirm-button">Confirm</button>
            </div>
            
        </div>
    )
}