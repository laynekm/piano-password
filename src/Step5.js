import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import { storage } from 'firebase';
import { createCsv } from './utils';
const moment = require('moment');

/*
  Component representing Step 5, the final step.
  Submits log data to Firebase and displays a circular progress indicator.
  Once submitted, thanks the user for participating.
*/

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      height: '100vh',
      width: '100vw',
      paddingTop: 50,
    },
    loading: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    circularProgess: {
      margin: 25,
    },
  })
);

export const Step5 = props => {
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const { logs } = props;

  // Print logs for debugging purposes
  console.log(logs);

  // Send data to Firebase
  if (loading) {
    storage()
      .ref()
      .child(`logs/${moment().format()}.csv`)
      .put(createCsv(logs))
      .then(() => {
        setLoading(false);
      });
  }

  return (
    <div className={classes.root}>
      {loading ? (
        <div className={classes.loading}>
          Submitting results...
          <div className={classes.circularProgess}>
            <CircularProgress />
          </div>
        </div>
      ) : (
        'Thank you for participating!'
      )}
    </div>
  );
};
