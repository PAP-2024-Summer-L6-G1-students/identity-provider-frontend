import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function ResetPasswordTextFields() {
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);

  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [confirmError, setConfirmError] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validateNewPassword = () => {
    const passwordRequirements = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!$@%])[A-Za-z\d!$@%]{8,}$/;
    if (!passwordRequirements.test(password)) { 
      setError(true);
    } else {
      setError(false);
    }
  };

  const validateEqualPasswords = () => {
    if (confirmPassword !== password) {
      setConfirmError(true);
    } else {
      setConfirmError(false);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiFormControl-root': { m: 1, marginLeft: '32px', width: '41ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl variant="outlined" error={error}>
        <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          onBlur={validateNewPassword}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="New Password"
        />
        {error && <FormHelperText>Password does not meet the requirements</FormHelperText>}
      </FormControl>

      <Typography
        variant="body1"
        sx={{ fontWeight: '600', fontSize: '20px', ml: 4, mb: 1, mt: 3, color: 'black' }}
      >
        Confirm Password
      </Typography>

      <FormControl variant="outlined" error={confirmError}>
        <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-confirm-password"
          type={showPassword ? 'text' : 'password'}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          onBlur={validateEqualPasswords}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Confirm Password"
        />
        {confirmError && <FormHelperText>Passwords do not match</FormHelperText>}
      </FormControl>
    </Box>
  );
}