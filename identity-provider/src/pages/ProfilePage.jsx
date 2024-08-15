// 
export default function ProfilePage() {

        const UpdateProfile = () => {
                console.log("The inputs should stay on the page and text boxes should go away")
        }
    return (
        <>
        <h2>Settings</h2>
        {/* Image Button, side by side to users name and email*/}
        {/* Placeholder image? */}
        <button></button>

        {/* Users Name and Email */}
        <h1>John Doe</h1>
        <p>Email </p>
        {/* Email will need to be updated depending on the email data that is stored */}

        <h1>Basic Profile Information</h1>
        {/* Text boxes will be to the side of the category */}

<form id="profile-page">
  <label htmlFor="name">Name:</label>
  <input type="text" id="name"/>
  <br/>
  <label htmlFor="email">Email:</label>
  <input type="text" id="email"/>
  <br/>
  <label htmlFor="phonenumber">Phone Number:</label>
  <input type="text" id="phonenumber" />
  <br/>
  <label htmlFor="address">Address:</label>
  <input type="text" id="address"/>
  <br/>
  <label htmlFor="interests">Interests:</label>
  <input type="text" id="interests"/>
  <br/>
  {/* <input type="submit" value="Update Profile"/> */}
  </form>

  <button type = "submit" onClick = {UpdateProfile}>Update Profile</button>
  {/* I might want to keep these as inputs instead of buttons */}


{/* form action ='' at the top (although we don't even need the form label so idk how I would do that), and make a page that the user date will be stored in */}
{/* <p>If you click the "Submit" button, the form-data will be sent to a page called "".</p> */}

        {/* Update Profile Button */}
        <button></button>

        <h1>Passwords and Security</h1>

        {/* Change Username Button */}
        {/* Onclick */}

        {/* <input type="submit" value="Change Username"/> */}
        <button type = "submit">Change Username</button>

        <br/>

        {/* Change Password Button */}
        {/* Onclick */}
       
        {/* <input type="submit" value="Change Password"/> */}
        <button type = "submit">Change Password</button>


        <br/>

        <h1>Multi-factor Authentication</h1>
        <button type = "submit">Use an Authentication App</button>
        <script src="ProfilePageJS.js"></script>
        </>
        
)}

// 7/31 next steps:
// Adding an image circle that updates or just a circle that contains html that updates the letters according to the first name and last name
// Using the update profile button to connect to js so that it will update the info and store it somehow

// For Image Button:
// Add Onclick event 
// Will have to allow for our app to have access to user's photo gallery,
// OR they have to upload it to the app first which we could save and then they can change it 

// For Users Name and Email:
{/* Will have to update based on what information is stored in Basic Profile Information/Update Profile Button */}
// I think a form would work best

// Form
// input
// update feature
// text boxes
// text boxes show up when "update profile" button is clicked
// data is stored 


// For Basic Profile Information including Update Profile Button:
        {/* Data is saved */}

        
/* For "update profile" button: */
        {/* Add onclick event */}
        {/* Text boxes come up with the data still saved, but users are able to edit the boxes and the new input is saved and displayed */}
        {/* Text boxes then dissapear */}
        {/* Button will activate text boxes shown up, then when it is pressed again they will go away */}
        {/* Create two different buttons to make it easier? */}

// For Change Username or Change Password Buttons:
// Do we want to link pages 