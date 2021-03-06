import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

/*
  Component representing Step 3.
  Tells the user that they will now be tested.
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
    button: {
      marginTop: 20,
    },
  })
);

export const Step3 = props => {
  const classes = useStyles();
  const { nextStep } = props;

  return (
    <div className={classes.root}>
      You will now be prompted to enter the passwords again in random order. You
      will have three attempts for each one.
      <br />
      <Button
        className={classes.button}
        variant='contained'
        onClick={() => nextStep()}>
        Let's do this!
      </Button>
    </div>
  );
};
