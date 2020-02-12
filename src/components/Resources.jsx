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
  const { cpu_limit, net_limit, ram_usage, ram_quota } = userInfo;

  // DISPLAY THIS DATA:
  // the staked resources for CPU and NET as well as the current consumption
  // the RAM consumption √

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
            usedValue={50}
            maxValue={1000}
            unit='KB'
            progressBarColor='secondary'
            progessValue={44}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Resources;
