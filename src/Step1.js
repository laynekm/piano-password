import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { passwordLength } from './globals';

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

export const Step1 = props => {
  const classes = useStyles();
  const { nextStep } = props;

  return (
    <div className={classes.root}>
      <h1>Piano Password</h1>
      {`You will be given 3 passwords. Each consists of ${passwordLength} notes.`}
      <br />
      First, you will be shown each password and prompted to input them.
      <br />
      Then, you will be prompted to input each password again in random order.
      You will have three attempts for each one.
      <br />
      The purpose of this test is to determine the memorability of passwords
      using this scheme.
      <br />
      <Button
        className={classes.button}
        variant='contained'
        onClick={() => nextStep()}>
        Begin test
      </Button>
    </div>
  );
};
