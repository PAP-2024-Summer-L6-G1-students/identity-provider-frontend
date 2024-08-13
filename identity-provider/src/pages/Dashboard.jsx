// What we still need to do:
// Make the alerts pop up when the buttons are pressed
// Cancel and save, cancel and confirm buttons need to redirect
// Dashboard organizations and dashboard no organizations functions need to be showing up at the right time(will determine which page shows up for the user)
// I started the state variables but wasn't sure how to finish (will determine which page shows up for the user)
// Making sure that the Edit Info and Unlink buttons state the correct voulenteer organization in the <p> tag (for the 'Your Information' dialog) and <Dialog title>(for the 'unlink' dialog) that you clicked on form the "Your Volenteer Organizations" page 

// List of organizations and database/api calls:
// 1. Setup list of user's shared info to organizations
// 2. Once that is set up it can be implemented with the database and api is set up for that 

// Requests:
// 3. We only need one get request for the dashboard organizations (that show up) page to get all of the linked organizations
// 4. For the 'unlink' button we will need to do a patch request to update that list of organizations for that user once the confirm button is pressed.

// Dialog:
// 5. The confirm can be the same dialog section as we did for the DashboardOrganization function and will send that patch request
// 6. Piggybacking from #5: We need to create the alert box that shows the users information when the 'edit info' button is pressed as well as the cancel and save buttons
// 7. Piggybacking from #6, we need to create the confirmation unlink box once you press the 'unlink' button, as well as the cancel and confirm buttons  


// Questions:
// 1. How do we "update" a page in the background, such as the website detecting whether the user is connected to organizations or not: GET requests?
// 2. With that said, how does the software know what to display every time the user logs in? GET requests?
// 5. The "edit info" and "unlink" buttons as well as the organization info will have to dissapear from the dashboard when the user presses 'unlink'.
// Pop up alerts:
// The "Your Information" alert will contained stored data from the settings page(whatever info is updated from pressing the "update profile" button.)
// How to we show the dashbooard no organizations and the dashboard organizations page? Depends on what the if else statements say and what button the user presses?


// Imports from material ui page, should they be within the DashboardOrganizations function or here at the top?
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// ******************************************************

function DashboardNoOrganizations() {

    const voulenteerButton = () => {
        console.log('This button will link to our relying parties website')
    }
    return (
        <>
        <h1>You're not currently connected to any organizations.</h1>
        <p>Search for voulenteer oppertunities <button type = "submit" onClick = {voulenteerButton}> Here</button></p>
        
        </>
    )
}

function DashboardOrganizations() {

   // code copied from material ui: Will show the dialog component on the website
  //  Will need a seperate one for each dialog's title and description
  //  Will need another open, setOpen for the other dialog


   const [open, setOpen] = React.useState(false);
   const [dialogTitle] = React.useState('Hello World');
    //  open is the current state value( in dialog, open = {open}), setOpen is the function that updates the state and we are setting it to true 
  //  useState returns an array
 
  // open is set to false. What does false do though? Maybe we can change the true and false statements to something else?
  // if you were to call setOpen(true), it will change the value of open to true
  // so how does this carry over to what we have going on so far?


   const handleClickOpen = () => {
     setOpen(true);
   };
 
   const handleClose = () => {
     setOpen(false);
   };
 // *********************************************

//  We want dialog to show up for each button, so do we need to put the return inside the buttons or keep it in the function?
    const editInfoButton = () => {
        console.log('This button will bring up a typed out alert which shows your information and contains x butttons to delete info with a cancel and save button.')
    }

    const unlinkButton = () => {
        console.log('This button will bring up a typed alert which will ask you if you want to unlink from the organization the user pressed, with a cancel and confirm button.')
    }
    return (
        <>
        <h1>Your Volunteer Organizations</h1>
        <h2>Select an account to sign in </h2>
        <a href = 'https://www.redcross.org/'></a>
        <button type = 'submit' onClick = {editInfoButton}> View Info</button>
        {/* We need a patch request for the unlink button to update the list of organizations once the user presses 'confirm' */}
        <button type = 'submit' onClick = {unlinkButton}>Unlink</button>

        {/* This Dialog will come up after you click the "Edit Info" button. */}

        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby={dialogTitle}
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Your Information"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* Placeholder unordered list for the list of organizations: Will want to show what user's information is linked to those organizations*/}
            <p> You are currently sharing this information with ______</p>
          <ul>
             <li>Username</li>
             <li>Name</li>
             <li>Address</li>
             </ul>
             {/* ******************************************* */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* This Dialog will come up after you click the "Unlink" button. */}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you would like to unlink your account from ______?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
        </>

    )
}

export default function Dashboard() {

    const hasOrganizations = true;

    let renderedComponent = <></>;

    if (hasOrganizations) {
        renderedComponent = <DashboardOrganizations/>;
    } else {
        renderedComponent = <DashboardNoOrganizations/>;
    }

    return renderedComponent;

}

