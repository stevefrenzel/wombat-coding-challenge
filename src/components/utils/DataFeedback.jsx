import React from 'react';

// UTILS
import ProgressBar from './ProgressBar';
import Typography from './Typography';

// MATERIAL UI - CORE
import Grid from '@material-ui/core/Grid';

const Resources = ({
  title,
  usedValue,
  maxValue,
  unit,
  progessValue,
  progressBarColor
}) => {
  return (
    <Grid container justify='center' alignItems='center'>
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
        <ProgressBar
          value={progessValue}
          color={progressBarColor}
          variant='determinate'
        />
      </Grid>
    </Grid>
  );
};

export default Resources;
