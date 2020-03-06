import React, { useState } from 'react';
import { Piano } from './Piano';
import { colors } from './globals';
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

export const Step4 = props => {
  const classes = useStyles();
  const [attempts, setAttempts] = useState(0);
  const [step, setStep] = useState(0);
  const {
    nextParentStep,
    passwords,
    inputs,
    handleSetInputs,
    clearInput,
  } = props;

  if (inputs[step].length === passwords[step].value.length) {
    if (arraysEqual(passwords[step].value, inputs[step])) {
      flash(colors.correct);
      if (step + 1 > 2) {
        sleep(500).then(() => {
          nextParentStep();
        });
      } else {
        sleep(500).then(() => {
          setStep(step + 1);
          setAttempts(0);
        });
      }
    } else {
      flash(colors.incorrect);
      if (attempts + 1 > 2) {
        sleep(500).then(() => {
          if (step + 1 > 2) nextParentStep();
          else {
            setStep(step + 1);
            setAttempts(0);
          }
        });
      } else {
        sleep(500).then(() => {
          clearInput(step);
          setAttempts(attempts + 1);
        });
      }
    }
  }

  return (
    <div className={classes.root}>
      <h3>
        {passwords[step].type} password - Attempts: {attempts}/3
      </h3>
      <h3>Your input: {convertPassword(inputs[step])} </h3>
      <Piano handleSetInputs={handleSetInputs} index={step} />
    </div>
  );
};
