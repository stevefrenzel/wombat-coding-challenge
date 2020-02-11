import React from 'react';

// MATERIAL UI - CORE
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// MATERIAL UI - ICONS

// const useStyles = makeStyles(theme => ({}));

const Resources = ({ userInfo }) => {
  // const classes = useStyles();

  const {
    core_liquid_balance,
    cpu_limit,
    net_limit,
    ram_usage,
    ram_quota
  } = userInfo;

  // DISPLAY THIS DATA:
  // the EOS token balance √
  // the value in USD
  // the staked resources for CPU and NET as well as the current consumption
  // the RAM consumption √

  return (
    <>
      <Typography>EOS token balance: {core_liquid_balance}</Typography>
      {/* <Typography>NET consumption: {cpu_limit}</Typography> */}
      {/* <Typography>NET consumption: {net_limit}</Typography> */}
      <Typography>RAM usage: {ram_usage}</Typography>
      <Typography>RAM quota: {ram_quota}</Typography>
    </>
  );
};

export default Resources;
