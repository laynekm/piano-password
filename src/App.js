import React, { useState } from 'react';
import { Piano } from './Piano';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      paddingTop: 50,
    },
  })
);

const App = () => {
  const classes = useStyles();
  const [hasStarted, setHasStarted] = useState(true);

  return (
    <div className={classes.root}>
      {!hasStarted && (
        <React.Fragment>
          <h1>Piano Password</h1>
          <Button variant='contained' onClick={() => setHasStarted(true)}>
            Begin session
          </Button>
        </React.Fragment>
      )}
      {hasStarted && <Piano />}
    </div>
  );
};

export default App;
