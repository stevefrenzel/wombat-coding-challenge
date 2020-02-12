import React, { useEffect, useState } from 'react';

// COMPONENTS
import Actions from './components/Actions';
import Resources from './components/Resources';

// UTILS
import BottomAppBar from './components/utils/BottomAppBar';

// MATERIAL UI - CORE
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  gridItem: {
    margin: theme.spacing(2)
  }
}));

const App = () => {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState([]);

  const bodyData = {
    account_name: 'genialwombat'
  };

  useEffect(() => {
    async function fetchData() {
      await fetch('https://api.main.alohaeos.com:443/v1/chain/get_account', {
        method: 'post',
        body: JSON.stringify(bodyData)
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          setUserInfo(data);
        });
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('USER INFO: ', userInfo);

  return (
    <Grid container justify='center'>
      <Grid item xs={12} className={classes.gridItem}>
        <Actions userInfo={userInfo} />
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <Resources userInfo={userInfo} />
      </Grid>
      <BottomAppBar />
    </Grid>
  );
};

export default App;
