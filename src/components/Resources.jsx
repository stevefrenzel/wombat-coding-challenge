import React from 'react';

// UTILS
import DataFeedback from './utils/DataFeedback';
import Typography from './utils/Typography';

// MATERIAL UI - CORE
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2)
  },
  divider: {
    marginBottom: theme.spacing(2)
  },
  dataFeedback: {
    marginBottom: theme.spacing(2)
  }
}));

const Resources = ({ userInfo }) => {
  const classes = useStyles();
  const {
    cpu_limit,
    net_limit,
    total_resources,
    ram_usage,
    ram_quota
  } = userInfo;

  const calculatePercentage = (firstValue, secondValue) => {
    let number = (firstValue / secondValue) * 100;
    return Number(number.toFixed());
  };

  // const decimalConverter = value => {
  //   return Number(value.toFixed(2));
  // };

  return (
    <Paper>
      <Grid
        container
        justify='center'
        alignItems='center'
        className={classes.container}
      >
        <Grid item>
          <Typography content='Resources' variant='h6' />
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={12} className={classes.dataFeedback}>
          <DataFeedback
            showStaked
            stakedValue={total_resources}
            title='NET'
            usedValue={0}
            maxValue={100}
            unit='KB'
            progressBarColor='secondary'
            progessValue={50}
          />
        </Grid>
        <Grid item xs={12} className={classes.dataFeedback}>
          <DataFeedback
            showStaked
            stakedValue={total_resources}
            title='CPU'
            usedValue={5}
            maxValue={100}
            unit='ms'
            progressBarColor='secondary'
            progessValue={18}
          />
        </Grid>
        <Grid item xs={12}>
          <DataFeedback
            title='RAM'
            usedValue={ram_usage}
            maxValue={ram_quota}
            unit='KB'
            progressBarColor='secondary'
            progessValue={calculatePercentage(ram_usage, ram_quota)}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Resources;
