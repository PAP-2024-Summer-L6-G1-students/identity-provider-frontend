import './ShareInfo.css'
import * as React from 'react';
import Button from '@mui/material/Button';

export default function ShareInfo() {
    return (
        <>
            <div id='Shareinfo'>
                <h1 id='text'>Would you like to share this information with a organization</h1>
                <ul>
                    <li>Name</li>
                    <li> Birthdate </li>
                    <li> Address </li>
                    <li> Phone Number</li>
                    <li> Availability </li>
                </ul>
                <Button id='confirm' variant="contained" disableElevation color='secondary'>
                    Confirm
                </Button>
            </div>
        </>
    )

}