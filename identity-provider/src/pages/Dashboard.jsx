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
import { renderMatches } from 'react-router-dom';


function VolunteerOrg(props) {
  return (
    <div className="volunteer-org">
      <p>Organization Name: {props.companyName}</p>
      <button type="button" onClick={() => props.onEditInfo(props.companyName)}>View Info</button>
      <button type="button" className="unlink" onClick={() => props.onUnlink(props.companyName)}>Unlink</button>
    </div>
  );
}

function DashboardNoOrganizations() {
    const voulenteerButton = () => {
        console.log('This button will link to our relying parties website');
    };

    return (
        <>
            <h1>You're not currently connected to any organizations.</h1>
            <p>
                Search for volunteer opportunities{' '}
                <button type="submit" onClick={voulenteerButton}>
                    Here
                </button>
            </p>
        </>
    );
}

function DashboardOrganizations() {
    const [openViewInfo, setOpenViewInfo] = React.useState(false);
    const [openUnlinkConfirm, setOpenUnlinkConfirm] = React.useState(false);
    const [currentOrganization, setCurrentOrganization] = React.useState(null);
    const [linkedOrganzations, setLinkedOrganzations] = React.useState([
      
      
      {"company-name": "Red Cross"}, 
      {"company-name": "Red Cross2"},
      {"company-name": "Red Cross3"}, 
      {"company-name": "Red Cross4"}, 
      {"company-name": "Red Cross5"}
      
    
    ]);
    const editInfoButton = (organization) => {
        setCurrentOrganization(organization);
        setOpenViewInfo(true);
    };

    const unlinkButton = (organization) => {
        setCurrentOrganization(organization);
        setOpenUnlinkConfirm(true);
    };

    const handleCloseViewInfo = () => {
        setOpenViewInfo(false);
        //setCurrentOrganization(null);
    };

    const handleCloseUnlinkCancel = () => {
      setOpenUnlinkConfirm(false);
      //setCurrentOrganization(null);
  };

    const handleCloseUnlinkConfirm = () => {
        setOpenUnlinkConfirm(false);
        setCurrentOrganization(null);
    };

    return (
        <>
            <h1>Your Volunteer Organizations</h1>
            <h2>Select an account to sign in</h2>
            {linkedOrganzations.map(element => {
             return(<VolunteerOrg
  
             companyName={element['company-name']}
             onEditInfo={editInfoButton}
             onUnlink={unlinkButton}
           />)
            })}

            {/* <VolunteerOrg
  
        companyName="Red Cross"
        onEditInfo={editInfoButton}
        onUnlink={unlinkButton}
      />

      <VolunteerOrg
        companyName="St. Vincent de Paul"
        onEditInfo={editInfoButton}
        onUnlink={unlinkButton}
      /> */}

            <Dialog
                open={openViewInfo}
                onClose={handleCloseViewInfo}
                aria-labelledby="view-info-title"
                aria-describedby="view-info-description"
            >
                <DialogTitle id="view-info-title">
                    {"Your Information for " + currentOrganization}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="view-info-description">
                        <p>You are currently sharing this information with {currentOrganization}:</p>
                        <ul>
                            <li>Username: johndoe@gmail.com</li>
                            <li>Name: John Doe</li>
                            <li>Address: 123 Main St</li>
                        </ul>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseViewInfo}>Ok</Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openUnlinkConfirm}
                onClose={handleCloseUnlinkConfirm}
                aria-labelledby="unlink-confirm-title"
                aria-describedby="unlink-confirm-description"
            >
                <DialogTitle id="unlink-confirm-title">
                    {"Are you sure you would like to unlink from " + currentOrganization + "?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="unlink-confirm-description">
                        This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
          <Button onClick={handleCloseUnlinkCancel}>Cancel</Button>
          <Button onClick={handleCloseUnlinkConfirm} autoFocus>
            Confirm
          </Button>
        </DialogActions>
            </Dialog>
        </>
    );
}

export default function Dashboard() {
    const hasOrganizations = true;

    return (
        <>
            <header className="header">
                <h1>Welcome, John Doe</h1>
                <h2>Dashboard</h2>
            </header>
            {hasOrganizations ? <DashboardOrganizations /> : <DashboardNoOrganizations />}
            <footer>
                <div>Dashboard</div>
                <div>Settings</div>
                <div>Connect</div>
            </footer>
        </>
    );
}