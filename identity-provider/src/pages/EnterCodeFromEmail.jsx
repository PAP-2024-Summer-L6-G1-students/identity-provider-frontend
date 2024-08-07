export default function enterCode() {

    const ResendEmailLink = () => {
        console.log("This button will send the user an email to the one that they provided")
    }
    return (
    <> 
    <h1>Enter Your Code</h1>
    <p>We sent our code to johndoe@example.com</p>
    {/* This will have to be able to change depending on the user input email */}
    <p>Didn't recieve the email?</p>
    <button type = "submit" onClick = {ResendEmailLink}>Click to resend</button>
    {/* <img></> */}

    {/* Enter code text boxes here */}

    {/* If code was incorrect: */}
    <p>The code was incorrect. Please try again.</p>

    {/* If the code is correct, it will redirect you to the dashboard page */}
    
    </>
    )
}