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
    marginBottom: theme.spacing(1)
  },
  buttonGroup: {
    marginTop: theme.spacing(2)
  },
  margin: {
    margin: theme.spacing(1)
  },
  button: {
    width: '110px'
  }
}));

const Actions = ({ userInfo, handleClick }) => {
  const classes = useStyles();
  const { core_liquid_balance } = userInfo;

  const stringToNumber = string => {
    let numbersOnly = string.replace(/\D/g, '');
    return Number(numbersOnly);
  };

  console.log(core_liquid_balance);

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
          <Typography
            content={`${stringToNumber(core_liquid_balance)} EOS`}
            variant='body1'
          />
          <Typography content={`USD`} variant='body2' />
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
