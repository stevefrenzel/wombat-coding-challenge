import React from 'react';

// COMPONENTS
import IconButton from '../utils/IconButton';
import Typography from '../utils/Typography';

// MATERIAL UI - CORE
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

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
          <IconButton icon={<SettingsSharpIcon />} />
          <Typography variant='subtitle2' content='Settings' />
        </div>
        <div className={classes.icon}>
          <IconButton icon={<AccountBalanceWalletSharpIcon />} />
          <Typography variant='subtitle2' content='Wallet' />
        </div>
        <div className={classes.icon}>
          <IconButton icon={<HomeSharpIcon />} />
          <Typography variant='subtitle2' content='Home' />
        </div>
        <div className={classes.icon}>
          <IconButton icon={<ExploreSharpIcon />} />
          <Typography variant='subtitle2' content='Explorer' />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default BottomAppBar;
