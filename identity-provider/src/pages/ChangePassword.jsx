import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';

import './ChangePassword.css'
export default function ChangePassword() {
    return (
        <>
            <div class='password-box'>
                <h1 class="text">Change Your Password</h1>
                <p class="text">Your password should be at least 8 characters long and should include a combination of numbers, letters, and special characters (!@#$)</p>

                <Box sx={{ '& > :not(style)': { m: 1 } }}>

                    <h3 class="text">Current Password</h3>
                  
                        <Box class= "passwords" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="current-password" label="Current Password" variant="outlined" />
                        </Box>
                 
                    <h3 id="new-pass">New Password</h3>

                    <Box class= "passwords" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="new-password" label="New Password" variant="outlined" />
                    </Box>

                    <h3 class="text">Confirm Password</h3>

                    <Box class= "passwords" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="confirm-password" label="Confirm Password" variant="outlined" />
                    </Box>

                </Box>
                <Button id = "change-btn" variant="contained" color = "secondary" disableElevation>
                   Change Password
                </Button>
            </div>
        </>
    );
}
