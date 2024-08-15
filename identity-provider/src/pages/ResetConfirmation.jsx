import './ResetConfirmation.css'
import check from '/check.png'
import { useNavigate } from 'react-router-dom';

export default function resetConfirmation() {
    
    const navigate = useNavigate();
    const handleLoginRedirect = () => {
        navigate('/login');
    }

    return(
        <div id="reset-confirmation-page">
            <img id="check-img"src={check}></img>
            <h1 id="success-text">Password Changed!</h1>
            <p id="success-subtext">Your password has been changed successfully!</p>
            <button onClick={handleLoginRedirect}id="login-redirect-button">Back to Login</button>
        </div>
    )
}
