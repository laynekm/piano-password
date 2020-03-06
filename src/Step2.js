import React, { useState } from 'react';
import { Piano } from './Piano';
import { passwordTypes, colors } from './globals';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { convertPassword, arraysEqual, flash, sleep } from './utils';

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

export const Step2 = props => {
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const {
    nextParentStep,
    passwords,
    inputs,
    handleSetInputs,
    clearInput,
  } = props;

  if (inputs[step].length === passwords[step].length) {
    if (arraysEqual(passwords[step], inputs[step])) {
      flash(colors.correct);
      if (step + 1 > 2) {
        sleep(500).then(() => {
          nextParentStep();
        });
      } else {
        sleep(500).then(() => {
          setStep(step + 1);
        });
      }
    } else {
      flash(colors.incorrect);
      sleep(500).then(() => {
        clearInput(step);
      });
    }
  }

  return (
    <div className={classes.root}>
      <h3>
        {passwordTypes[step]} password: {convertPassword(passwords[step])}{' '}
      </h3>
      <h3>Your input: {convertPassword(inputs[step])} </h3>
      <Piano handleSetInputs={handleSetInputs} index={step} />
    </div>
  );
};
