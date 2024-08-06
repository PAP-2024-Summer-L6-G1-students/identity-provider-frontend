export default function forgotPassword() {

    const ForgotPassword = () => {
        console.log("This button will take you back to the login page. Users can press this button after they enter their email to resend their password. ")
}
    const SendEmail = () => {
        console.log("This button will send a password reset email to the one the user provided above.")
    }
    return (
        <>
        <h1>Forgot Password?</h1>
        <p>Forgot your password? No problem. </p>
        <p>Just enter your email and we'll send you instructions to reset it. </p>
        {/* <img></> */}

        <h2>Enter your email address</h2>
        <input type="text" id="email"/>

        
        <button type = "submit" onClick = {SendEmail}>Send Email</button>
        <button type = "submit" onClick = {ForgotPassword}>Back to Login Page</button>
        </>
    )
}