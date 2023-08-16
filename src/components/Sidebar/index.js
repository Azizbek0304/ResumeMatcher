import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Collapse,
} from '@mui/material';
import {
  Home as HomeIcon,
  Contacts as ContactsIcon,
  Dashboard as DashboardIcon,
  MailOutline as MailOutlineIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleCollapse = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? 250 : 70,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: open ? 250 : 70,
          boxSizing: 'border-box',
        },
      }}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <Collapse in={open}>
            <ListItemText primary="Home" />
          </Collapse>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactsIcon />
          </ListItemIcon>
          <Collapse in={open}>
            <ListItemText primary="Contact" />
          </Collapse>
        </ListItem>
        <Divider />
        <ListItem button onClick={handleCollapse}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <Collapse in={open}>
            <ListItemText primary="General" />
          </Collapse>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open}>
          <List sx={{ pl: 3 }}>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Analytics" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <MailOutlineIcon />
          </ListItemIcon>
          <Collapse in={open}>
            <ListItemText primary="Email" />
          </Collapse>
        </ListItem>
      </List>
      <IconButton onClick={handleCollapse}>
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
    </Drawer>
  );
};

export default Sidebar;
