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
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(0, 0, 7, 0)
  },
  gridItem: {
    margin: theme.spacing(2)
  },
  heading: {
    marginTop: theme.spacing(1)
  }
}));

const App = () => {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState([]);

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
    <Grid
      container
      justify='center'
      align='center'
      className={classes.container}
    >
      <Grid item xs={12} sm={6} className={classes.gridItem}>
        {userInfo ? (
          <Actions userInfo={userInfo} />
        ) : (
          <Skeleton
            variant='rect'
            width='auto'
            height='200px'
            animation='wave'
          />
        )}
      </Grid>
      <Grid item xs={12} sm={6} className={classes.gridItem}>
        {userInfo ? (
          <Resources userInfo={userInfo} />
        ) : (
          <Skeleton
            variant='rect'
            width='auto'
            height='200px'
            animation='wave'
          />
        )}
      </Grid>
      {userInfo ? <BottomAppBar /> : null}
    </Grid>
  );
};

export default App;
