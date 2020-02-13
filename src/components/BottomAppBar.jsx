import React from 'react';

// MATERIAL UI - CORE
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

// MATERIAL UI - ICONS
import AccountBalanceWalletSharpIcon from '@material-ui/icons/AccountBalanceWalletSharp';
import ExploreSharpIcon from '@material-ui/icons/ExploreSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';

// COMPONENTS
import IconButton from './utils/IconButton';
import Typography from './utils/Typography';

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
    textAlign: 'center',
    cursor: 'pointer'
  }
}));

const BottomAppBar = ({ handleClick }) => {
  const classes = useStyles();

  return (
    <AppBar position='fixed' className={classes.appBar} color='secondary'>
      <Toolbar className={classes.toolbar}>
        <div className={classes.icon} onClick={handleClick}>
          <IconButton icon={<SettingsSharpIcon />} />
          <Typography variant='subtitle2' content='Settings' />
        </div>
        <div className={classes.icon} onClick={handleClick}>
          <IconButton icon={<AccountBalanceWalletSharpIcon />} />
          <Typography variant='subtitle2' content='Wallet' />
        </div>
        <div className={classes.icon} onClick={handleClick}>
          <IconButton icon={<HomeSharpIcon />} />
          <Typography variant='subtitle2' content='Home' />
        </div>
        <div className={classes.icon} onClick={handleClick}>
          <IconButton icon={<ExploreSharpIcon />} />
          <Typography variant='subtitle2' content='Explorer' />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default BottomAppBar;
