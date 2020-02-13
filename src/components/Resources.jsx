import React from 'react';

// MATERIAL UI - CORE
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

// UTILS
import DataFeedback from './utils/DataFeedback';
import Typography from './utils/Typography';

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

  const calculatePercentage = (x, y) => {
    let number = (x / y) * 100;
    return Number(number.toFixed());
  };

  // const decimalConverter = x => {
  //   return Number(x.toFixed());
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
            stakedValue={total_resources.net_weight}
            title='NET'
            usedValue={net_limit.used}
            maxValue={net_limit.available}
            unit='KB'
            progressBarColor='secondary'
            progessValue={calculatePercentage(
              net_limit.used,
              net_limit.available
            )}
          />
        </Grid>
        <Grid item xs={12} className={classes.dataFeedback}>
          <DataFeedback
            showStaked
            stakedValue={total_resources.cpu_weight}
            title='CPU'
            usedValue={cpu_limit.used}
            maxValue={cpu_limit.available}
            unit='ms'
            progressBarColor='secondary'
            progessValue={calculatePercentage(
              cpu_limit.used,
              cpu_limit.available
            )}
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
