import { useState } from 'react'
import { useNavigate } from 'react-router-dom'; 
import './Landing.css'
import landingImage from '/landing-image.png'
import {Link} from 'react-router-dom';


export default function Landing() {
    const [count, setCount] = useState(0)
    const navigate = useNavigate()

    const createAccount = () => {
        console.log("You're being directed to create your account")
        navigate('/create-account');
    }

    return (
        <div id="landing-page">
            <div id="landing-page-header">
                <h1 id="lp-header-text">Welcome to SSO</h1>
                <h2 id="hero-text">One login for all your volunteer organizations</h2>
                <p id="hero-subtext">Simplify access, enhance security, and manage your organizations effortlessly with our Single Sign-On (SSO)</p>
            </div>
            <div id="image-div">
                <img id="landing-image" src={landingImage}></img>
            </div>
            <div id="create-account-div">
                <button id="create-account-button" onClick={createAccount}>Create an account</button>
            </div>
            <div id="create-account-subtext-div">
                <p id="create-account-subtext">Already have an account?</p>
                
                <p><Link to="/login" id="log-in-text">Log In</Link></p>
            </div>
        </div>
        
    )
}