import React from 'react';

// MATERIAL UI - CORE
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

// MATERIAL UI - ICONS
import SendSharpIcon from '@material-ui/icons/SendSharp';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import CallReceivedSharpIcon from '@material-ui/icons/CallReceivedSharp';

// UTILS
import Button from './utils/Button';
import Typography from './utils/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2)
  },
  divider: {
    marginBottom: theme.spacing(1)
  },
  buttonGroup: {
    marginTop: theme.spacing(2)
  }
}));

const Actions = ({ userInfo, handleClick }) => {
  const classes = useStyles();
  const { core_liquid_balance } = userInfo;

  const convertEosToUsd = string => {
    let noLetters = string.replace(/[^0-9.,]+/, '');
    let decimalNumber = Number(noLetters);
    let usDollar = decimalNumber * 5.26;
    return usDollar.toFixed(2);
  };

  return (
    <Paper>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.container}
      >
        <Grid item>
          <Typography content='Current Balance' variant='h6' />
          <Divider className={classes.divider} />
        </Grid>
        <Grid item>
          <Typography content={core_liquid_balance} variant='body1' />
          <Typography
            content={`≈ ${convertEosToUsd(core_liquid_balance)} $`}
            variant='body2'
          />
        </Grid>
        <Grid item xs={12} className={classes.buttonGroup}>
          <Button
            content='buy'
            startIcon={<ShoppingCartSharpIcon />}
            onClick={handleClick}
            size='small'
          />
          <Button
            content='send'
            startIcon={<SendSharpIcon />}
            onClick={handleClick}
            size='small'
          />
          <Button
            content='receive'
            startIcon={<CallReceivedSharpIcon />}
            onClick={handleClick}
            size='small'
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Actions;
