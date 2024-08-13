import './EnterCodeFromEmail.css'
import mailImage from '/mail.png'




export default function enterCode() {

    const ResendEmailLink = () => {
        console.log("This button will send the user an email to the one that they provided")
        //<> 
        //<h1>Enter Your Code</h1>
        //<p>We sent our code to johndoe@example.com</p>
        //{/* This will have to be able to change depending on the user input email */}
        //<p>Didn't recieve the email?</p>
        //<button type = "submit" onClick = {ResendEmailLink}>Click to resend</button>
        //{/* <img></> */}
    
        {/* Enter code text boxes here */}
    
        {/* If code was incorrect: */}
        //<p>The code was incorrect. Please try again.</p>
    
        {/* If the code is correct, it will redirect you to the dashboard page */}
        
        //</>
    }
    return (
        <div id="enter-code-page">
            <div id="titles-div">
                <header id="header-text">Enter your code</header>
                <h1 id="header-subtext">We sent a confirmation code to your email</h1>
            </div>
            <div id="image-div">
                <img id="mail-image" src={mailImage}></img>
            </div>
            <div id="code-div">
                <input class="box" type="text" maxlength="1" size="1" pattern="[0-9]"></input>
                <input class="box" type="text" maxlength="1" size="1" pattern="[0-9]"></input>
                <input class="box" type="text" maxlength="1" size="1" pattern="[0-9]"></input>
                <input class="box" type="text" maxlength="1" size="1" pattern="[0-9]"></input>
            </div>
            <p id="incorrect-code-text">The code you entered is incorrect. Please try again</p>
            <div id="buttons-div">
                <button id="sign-in-button">Sign In</button>
                <button id="resend-code-button">Resend Code</button>
            </div>
        </div>
    )
}