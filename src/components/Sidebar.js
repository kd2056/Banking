import React from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LinkIcon from '@mui/icons-material/Link';
import DescriptionIcon from '@mui/icons-material/Description';
import BankIcon from '@mui/icons-material/AccountBalance';

const Sidebar = ({ activeSection, setActiveSection, collapsed, handleCollapseToggle }) => {
  const drawerClasses = `transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'} md:block hidden`;

  return (
    <Drawer
      variant="persistent"
      open={true}
      className={`h-full flex-shrink-0 ${drawerClasses} z-10`}
      classes={{
        paper: drawerClasses,
      }}
    >
      <div className="flex justify-between items-center px-4 py-2">
        <IconButton onClick={handleCollapseToggle} className="mt-4">
          <ArrowBackIcon className="text-black" />
        </IconButton>
      </div>
      <List>
        <ListItem button selected={activeSection === 'Dashboard'} onClick={() => setActiveSection('Dashboard')}>
          <ListItemIcon><DashboardIcon className="text-black" /></ListItemIcon>
          {!collapsed && <ListItemText primary="My Dashboard" />}
        </ListItem>
        <ListItem button selected={activeSection === 'TOTM links'} onClick={() => setActiveSection('TOTM links')}>
          <ListItemIcon><LinkIcon className="text-black" /></ListItemIcon>
          {!collapsed && <ListItemText primary="TOTM links" />}
        </ListItem>
        <ListItem button selected={activeSection === 'Daily Summary'} onClick={() => setActiveSection('Daily Summary')}>
          <ListItemIcon><DescriptionIcon className="text-black" /></ListItemIcon>
          {!collapsed && <ListItemText primary="Daily Summary" />}
        </ListItem>
        <ListItem button selected={activeSection === 'Bank Details'} onClick={() => setActiveSection('Bank Details')}>
          <ListItemIcon><BankIcon className="text-black" /></ListItemIcon>
          {!collapsed && <ListItemText primary="Bank Details" />}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
