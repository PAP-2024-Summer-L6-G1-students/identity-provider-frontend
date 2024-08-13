import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AttributionIcon from '@mui/icons-material/Attribution';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import {Link} from 'react-router-dom';
import './Footer.css';
import { Paper } from '@mui/material';

export default function Footer() {
    const [value, setValue] = React.useState(0);

    return (
        <footer id='page-footer'>
            <Paper sx={{ display: 'flex', justifyContent: 'center', position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: "rgba(144, 66, 223, 1)", borderBottomRightRadius: "120px", borderBottomLeftRadius: "120px" }}>
                <Box sx={{ width: 500, backgroundColor: "rgba(144, 66, 223, 1)" }}>
                    <BottomNavigation
                        style={{ backgroundColor: 'rgba(144, 66, 223, 1)' }}
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction component={Link} to='/dashboard' label="Dashboard" icon={<HomeIcon />} />
                        <BottomNavigationAction component={Link} to='/settings' label="Settings" icon={<AttributionIcon />} />
                        <BottomNavigationAction component={Link} to='/connect' label="Connect" icon={<EditCalendarIcon />} />
                    </BottomNavigation>
                </Box>
            </Paper>
        </footer>
    );


}