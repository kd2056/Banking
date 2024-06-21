import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <AppBar position="static" className="!bg-white shadow-none">
      <Toolbar className="flex justify-between h-12">
        <Typography variant="h6" className="text-black">
          Logo
        </Typography>
        <Box className="flex space-x-4 flex-grow justify-center">
          <Typography className="text-black cursor-pointer">Home</Typography>
          <Typography className="text-black cursor-pointer">Services</Typography>
          <Typography className="text-black cursor-pointer">Blog</Typography>
          <Typography className="text-black cursor-pointer">Offers</Typography>
          <Typography className="text-black cursor-pointer">About Us</Typography>
        </Box>
        <Box className="flex space-x-4">
          <IconButton>
            <SearchIcon className="text-black" />
          </IconButton>
          <IconButton>
            <NotificationsIcon className="text-black" />
          </IconButton>
          <IconButton>
            <AccountCircle className="text-black" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
