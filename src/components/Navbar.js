import React from 'react';
//importing buttons from material ui 
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { Home, Build, Description, LocalOffer, Info, Search, Notifications, AccountCircle } from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position="static" color="default" className="shadow-none">
      <Toolbar>
        <Typography variant="h6" className="flex-grow">
          Logo
        </Typography>
        <Button color="inherit" startIcon={<Home />}>Home</Button>
        <Button color="inherit" startIcon={<Build />}>Services</Button> 
        <Button color="inherit" startIcon={<Description />}>Blog</Button>
        <Button color="inherit" startIcon={<LocalOffer />}>Offers</Button>
        <Button color="inherit" startIcon={<Info />}>About Us</Button>
        <IconButton color="inherit">
          <Search />
        </IconButton>
        <IconButton color="inherit">
          <Notifications />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
