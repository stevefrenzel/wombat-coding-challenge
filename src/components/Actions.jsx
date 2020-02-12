import React from 'react';

// UTILS
import Button from './utils/Button';
import Typography from './utils/Typography';

// MATERIAL UI - CORE
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// MATERIAL UI - ICONS
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import CallReceivedSharpIcon from '@material-ui/icons/CallReceivedSharp';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(1)
  },
  buttonGroup: {
    marginTop: theme.spacing(2)
  },
  marginRight: {
    marginRight: theme.spacing(1)
  },
  button: {
    width: '90px'
  }
}));

const handleClick = () => {
  console.log('BUTTON CLICKED!');
};

const Actions = ({ userInfo }) => {
  const classes = useStyles();
  const { core_liquid_balance } = userInfo;

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
          <Typography content='Current Balance' variant='h5' />
          <Divider className={classes.divider} />
        </Grid>
        <Grid item>
          <Typography content={core_liquid_balance} variant='h6' />
          <Typography content='USD' variant='subtitle1' />
        </Grid>
        <Grid item className={classes.buttonGroup}>
          <Button
            content='buy'
            variant='contained'
            size='small'
            startIcon={<ShoppingCartSharpIcon />}
            onClick={handleClick}
            className={`${classes.button} ${classes.marginRight}`}
          />
          <Button
            content='send'
            variant='contained'
            size='small'
            startIcon={<SendSharpIcon />}
            onClick={handleClick}
            className={`${classes.button} ${classes.marginRight}`}
          />
          <Button
            content='receive'
            variant='contained'
            size='small'
            className={classes.button}
            startIcon={<CallReceivedSharpIcon />}
            onClick={handleClick}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Actions;

// DISPLAY THIS DATA:

// the EOS token balance √
// the value in USD
