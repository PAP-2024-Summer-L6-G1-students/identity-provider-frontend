import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';

export default function ChangePassword() {
    return (
        <>
            <h1>Change Your Password</h1>
            <h5>Your password should be at least 8 characters long and should include a combination of numbers, letters, and special characters (!@#$)</h5>

            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <FormControl variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">
                        Current Password
                    </InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <TextField
                    id="input-with-icon-textfield"
                    label="TextField"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="filled"
                />
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="With sx" variant="outlined"  />
                </Box>
            </Box>
        </>
    );
}
