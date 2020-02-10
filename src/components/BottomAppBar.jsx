import React from 'react';

// MATERIAL UI - CORE
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// MATERIAL UI - ICONS
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import AccountBalanceWalletSharpIcon from '@material-ui/icons/AccountBalanceWalletSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import ExploreSharpIcon from '@material-ui/icons/ExploreSharp';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  icon: {
    textAlign: 'center'
  }
}));

const BottomAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.icon}>
          <IconButton color='inherit' size='small'>
            <SettingsSharpIcon />
          </IconButton>
          <Typography variant='subtitle2'>Settings</Typography>
        </div>
        <div className={classes.icon}>
          <IconButton color='inherit' size='small'>
            <AccountBalanceWalletSharpIcon />
          </IconButton>
          <Typography variant='subtitle2'>Wallet</Typography>
        </div>
        <div className={classes.icon}>
          <IconButton color='inherit' size='small'>
            <HomeSharpIcon />
          </IconButton>
          <Typography variant='subtitle2'>Home</Typography>
        </div>
        <div className={classes.icon}>
          <IconButton color='inherit' size='small'>
            <ExploreSharpIcon />
          </IconButton>
          <Typography variant='subtitle2'>Explorer</Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default BottomAppBar;
