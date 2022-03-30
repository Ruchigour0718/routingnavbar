import { AppBar, Box, Typography, Toolbar, Button } from "@mui/material";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Audacious Technology
            </Typography>
            <Button component={NavLink} to='/'style={ ({isActive}) => { return { backgroundColor: isActive ? '#6d1b7b': ' ' }}} sx={{color:'white'}}>Home</Button>
            <Button component={NavLink} to='contact' style={({isActive}) =>{return{backgroundColor: isActive ? '#6d1b7b' : ' '}}} sx={{color:'white'}}>Contact</Button>
            <Button component={NavLink} to='loginreg' style={({isActive}) =>{return{backgroundColor: isActive ? '#6d1b7b' : ' '}}} sx={{color:'white'}}>Login/Registration</Button>

            

          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
