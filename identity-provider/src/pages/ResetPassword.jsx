import './ResetPassword.css'
import ValidationTextFields from '../components/ResetPasswordTextFields'
import ResetPasswordTextFields from '../components/ResetPasswordTextFields'

export default function resetPassword() {
    return(
        <div id="reset-password-page">
            <div id="title-div">
                <header id="title">Reset your password</header>
                <h1 id="subtitle">Your password should be at least 8 characters and<br></br> should include a combination of numbers, letters,<br></br>and special characters (!$@%)</h1>
            </div>
            <div id="fields-div">
                <p id="new-password">New Password</p>
                <ResetPasswordTextFields/>
            </div>
            <button id="reset-button">Reset Password</button>

        </div>
    )
}