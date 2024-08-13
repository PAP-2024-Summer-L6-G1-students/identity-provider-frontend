import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ValidationTextFields() {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const validateEmail = () => {
    if (email !== "valid@example.com") { // Implement valid email logic here
      setError(true)
    } else {
      setError(false)
    }
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '41ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {!error ? (
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          onBlur={validateEmail} // Validate email on blur
        />
      ) : (
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue={email}
          helperText="Email is not associated with this account"
          onChange={handleEmailChange}
          onBlur={validateEmail} // Validate email on blur
        />
      )}
    </Box>
  );
}
