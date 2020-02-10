import React from 'react';

// MATERIAL UI - CORE
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// MATERIAL UI - ICONS

// const useStyles = makeStyles(theme => ({}));

const Resources = ({ userInfo }) => {
  // const classes = useStyles();

  // DISPLAY THIS DATA:
  // the EOS token balance √
  // the value in USD
  // the staked resources for CPU and NET as well as the current consumption
  // the RAM consumption √

  return (
    <>
      <Typography>EOS token balance: {userInfo.core_liquid_balance}</Typography>
      <Typography>EOS token balance in USD: ?</Typography>
      <Typography>RAM usage: {userInfo.ram_usage}</Typography>
    </>
  );
};

export default Resources;
