import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import { Link as RouterLink } from 'react-router-dom';

const Link2 = React.forwardRef((props, ref) => (
    <RouterLink to="#pageOne" />
  ));

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHome = () => {
    // setAnchorEl(null);
    alert("hello");
    // <Redirect to='#pageOne' />
    

  };

  return (
    <div>
      {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button> */}
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
              <MenuIcon />
        </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <List>

        {/* <MenuItem to="#pageOne" href="#pageOne">Profile</MenuItem> */}
        <MenuItem href="#pageOne"  >Profile</MenuItem>
        <Button href="#pageOne" >
                Link
            </Button>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </List>
      </Menu>
    </div>
  );
}
