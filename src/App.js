import React from 'react';

// COMPONENTS
import BottomAppBar from './components/BottomAppBar';
import Resources from './components/Resources';
import DataFeedback from './components/DataFeedback';

// MATERIAL UI - CORE
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  return (
    <>
      <CssBaseline />
      <DataFeedback />
      <BottomAppBar />
    </>
  );
};

export default App;
