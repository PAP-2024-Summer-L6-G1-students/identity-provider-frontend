import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function ValidationTextFields(props) {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(false);

  

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const validateEmail = () => {
    if (props.value !== "valid@example.com") { // Implement valid email logic here
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
          value={props.value}
          onChange={props.onChange}
          onBlur={() => validateEmail(props.value)}
        />
      ) : (
        <TextField
          id="outlined-basic"
          value={props.value}
          variant="outlined"
          onChange={handleEmailChange}
          onBlur={() => validateEmail(props.value)} 
        />
        
      )}
    </Box>
  );
}
