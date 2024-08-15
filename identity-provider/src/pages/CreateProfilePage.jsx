// Needs navigation to redirect "Create Your Profile" button to the dashboard page 

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function ProfilePage() {


    const CreateProfile = () => {
        console.log("This button will store the user profile information and then redirect to the dashbaord using useNavigate from materialUI website")
    }
    return(
        <>
        <h1>Create Profile</h1>
        <p>Fill out the required fields so we can get to know you better</p>
        <h2>Name</h2>
       
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
       >
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        </Box>
       
        <h2>Phone Number</h2>

        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
       >
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
        </Box>

        <h2>Email</h2>

        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
       >
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        </Box>

        <h2>Address</h2>

        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
       >
        <TextField id="outlined-basic" label="Address" variant="outlined" />
        </Box>
        
        {/* <div id="redirect-button-divs"> */}
        <button type = "submit" id = "confirm-button" onClick = {CreateProfile}>Create Your Profile</button>
        {/* </div> */}
       
       
        </>


    )
}
