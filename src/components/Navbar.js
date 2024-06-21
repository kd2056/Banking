import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static" className="!bg-white !shadow-none">
        <Toolbar className="flex justify-between h-12">
          <Typography variant="h6" className="text-black">
            Logo
          </Typography>
          <Box className="flex space-x-4 hidden md:flex">
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
            <IconButton edge="end" className="md:hidden" onClick={toggleDrawer(true)}>
              <MenuIcon className="text-black" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List className="w-64 bg-white">
          {['Home', 'Services', 'Blog', 'Offers', 'About Us'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
