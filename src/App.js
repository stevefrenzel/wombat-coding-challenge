import React, { useEffect, useState } from 'react';

// COMPONENTS
import BottomAppBar from './components/BottomAppBar';
import Resources from './components/Resources';
// import DataFeedback from './components/DataFeedback';

// MATERIAL UI - CORE
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
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
    <>
      <CssBaseline />
      <Resources userInfo={userInfo} />
      <BottomAppBar />
    </>
  );
};

export default App;
