import React from 'react';

// MATERIAL UI - CORE
import Grid from '@material-ui/core/Grid';

// UTILS
import ProgressBar from './ProgressBar';
import Typography from './Typography';

const Resources = ({
  title,
  usedValue,
  maxValue,
  unit,
  progessValue,
  progressBarColor,
  stakedValue,
  showStaked
}) => {
  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item xs={2}>
        <Typography content={title} variant='subtitle2' />
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
        <ProgressBar
          value={progessValue}
          color={progressBarColor}
          variant='determinate'
        />
        {showStaked ? (
          <Typography content={stakedValue} variant='caption' />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Resources;
