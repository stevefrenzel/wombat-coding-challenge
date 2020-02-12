import React from 'react';

// UTILS
import ProgressBar from './ProgressBar';
import Typography from './Typography';

// MATERIAL UI - CORE
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(0, 2, 0, 2),
    backgroundColor: 'lightgrey',
    margin: 0
  }
}));

const Resources = ({ title, usedValue, maxValue, unit, progessValue }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      className={classes.container}
    >
      <Grid item xs={2}>
        <Typography content={title} variant='subtitle1' />
      </Grid>
      <Grid item xs={10}>
        <Typography
          content={`${usedValue} ${unit} / ${maxValue} ${unit}`}
          variant='caption'
        />
      </Grid>
      <Grid item xs={2}>
        <Typography content={`${progessValue}%`} variant='caption' />
      </Grid>
      <Grid item xs={10}>
        <ProgressBar value={progessValue} variant='determinate' />
      </Grid>
    </Grid>
  );
};

export default Resources;
