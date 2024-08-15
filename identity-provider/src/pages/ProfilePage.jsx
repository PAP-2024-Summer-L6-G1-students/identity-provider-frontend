import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import './ProfilePage.css'


import { useNavigate } from 'react-router-dom'; 


export default function ProfilePage() {

// const [count, setCount] = useState(0)
const navigate = useNavigate()
    
        
const UpdateProfile = () => {
        console.log("This button will store the users data and display on the profile information");
}

const ChangePassword = () => {
        console.log("This button will redirect to the Change Your Password page")
        navigate('/ChangePassword')
}

const UseAuthApp = () => {
        console.log("This button will redirect to the Use an Authentication App page")
        navigate('')
}

const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <>
        <h2>Settings</h2>
        {/* Image Button, side by side to users name and email*/}
        {/* Placeholder image? */}

        {/* Users Name and Email */}
        <h1>User's name will display here depending on the name data that is stored after pressing 'update profile' button</h1>
        <p>User's email will display here depending on the email data that is stored after pressing 'update profile' button </p>
        {/* Email will need to be updated depending on the email data that is stored */}

        <h1>Basic Profile Information</h1>
        {/* Text boxes will be to the side of the category */}

        

{/* <form id="profile-page">
  <label htmlFor="name">Full Name:</label>
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


{/* <ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol> */}

<div id = 'profile-info'>
    <div>Full Name </div>
    <div>Email</div>
    <div>Phone Number</div>
    <div>Address</div>
    <div>Interests</div>
</div>

{/* <div style= 'display:flex'> */}


{/* Update Profile Button */}

<React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Update Profile
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
        //   onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
        //     event.preventDefault();
        //     const formData = new FormData(event.currentTarget);
        //     const formJson = Object.fromEntries((formData as any).entries());
        //     const email = formJson.email;
        //     console.log(email);
        //     handleClose();
        //   },
        }}
      >

        {/* Add event listener? */}
        <DialogTitle>Basic Profile Information</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
        //     required
            margin="dense"
            id="name"
            name="email"
            label="Full Name"
        //     type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
        //     type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Phone Number"
        //     type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Address"
        //     type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Interests"
        //     type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick = {UpdateProfile}>Submit</Button>
          {/* When this submit button is clicked on (with an onclick, event listener it will display the user info on the page) */}
        </DialogActions>
      </Dialog>
    </React.Fragment>


        <h1>Passwords and Security</h1>

        <button type = "submit" onClick = {ChangePassword}>Change Password</button>


        <br/>

        <h1>Multi-factor Authentication</h1>
        <button type = "submit" onClick = {UseAuthApp}>Use an Authentication App</button>
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