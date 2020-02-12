import React, { useEffect, useState } from 'react';

// COMPONENTS
import Actions from './components/Actions';
import Resources from './components/Resources';
import Typography from './components/utils/Typography';

// UTILS
import BottomAppBar from './components/utils/BottomAppBar';

// MATERIAL UI - CORE
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  gridItem: {
    margin: theme.spacing(2)
  },
  heading: {
    marginTop: theme.spacing(2)
  }
}));

const App = () => {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState([]);
  const { account_name } = userInfo;

  useEffect(() => {
    async function fetchData() {
      await fetch('https://api.main.alohaeos.com:443/v1/chain/get_account', {
        method: 'post',
        body: JSON.stringify({
          account_name: 'genialwombat'
        })
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          setUserInfo(data);
        })
        .catch(error => {
          console.log('ERROR: ', error);
        });
    }
    fetchData();
  }, []);

  return (
    <Grid container justify='center' align='center'>
      <Grid item xs={12}>
        <Typography
          content={`Welcome, ${account_name}.`}
          variant='h5'
          className={classes.heading}
        />
      </Grid>
      <Grid item xs={12} sm={8} md={3} className={classes.gridItem}>
        <Actions userInfo={userInfo} />
      </Grid>
      <Grid item xs={12} sm={8} md={3} className={classes.gridItem}>
        <Resources userInfo={userInfo} />
      </Grid>
      <BottomAppBar />
    </Grid>
  );
};

export default App;
