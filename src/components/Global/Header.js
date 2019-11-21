import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import SimpleMenu from '../pages/Menu';

class Header extends Component {

  render(){


    // const [open, setOpen] = React.useState(false);
    // const anchorRef = React.useRef(null);
  
    // function handleToggle() {
    //   setOpen(prevOpen => !prevOpen);
    // }
  
    // function handleClose(event) {
    //   if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //     return;
    //   }
  
    //   setOpen(false);
    // }

    return (
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <SimpleMenu />
            <Typography variant="h6" color="inherit">
              Easton Yang
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default (Header)