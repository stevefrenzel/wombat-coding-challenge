import React from 'react';

// UTILS
import DataFeedback from './utils/DataFeedback';

// MATERIAL UI - CORE
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100vw'
  },
  gridItem: {
    margin: 0,
    padding: 0,
    border: '1px solid black'
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
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <DataFeedback
            title='NET'
            usedValue={0}
            maxValue={100}
            unit='KB'
            progessValue={50}
          />
        </Grid>
        <Grid item xs={12}>
          <DataFeedback
            title='CPU'
            usedValue={5}
            maxValue={100}
            unit='ms'
            progessValue={18}
          />
        </Grid>
        <Grid item xs={12}>
          <DataFeedback
            title='RAM'
            usedValue={50}
            maxValue={1000}
            unit='KB'
            progessValue={44}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Resources;
