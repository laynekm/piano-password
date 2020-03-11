import React, { useState } from 'react';
import { Piano } from './Piano';
import { colors } from './globals';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { convertPassword, arraysEqual, flash, sleep } from './utils';
const moment = require('moment');

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
  const [startTime, setStartTime] = useState('');
  const [sleeping, setSleeping] = useState(false);
  const {
    nextParentStep,
    passwords,
    inputs,
    handleSetInputs,
    clearInput,
    addLog,
  } = props;

  const addPasswordLog = () => {
    addLog({
      trial: step,
      attempt: attempts + 1,
      startTime: startTime,
      endTime: moment().format(),
      expected: passwords[step].value.join(' '),
      actual: inputs[step].join(' '),
    });

    setStartTime('');
  };

  if (!startTime) {
    setStartTime(moment().format());
  }

  // If input password has reached 4 characters
  if (inputs[step].length === passwords[step].value.length && !sleeping) {
    setSleeping(true);
    clearInput(step);

    // If input password is equal to expected password (CORRECT)
    if (arraysEqual(passwords[step].value, inputs[step])) {
      flash(colors.correct);

      // If this was the last password, go to the next step (Step5)
      if (step + 1 > 2) {
        sleep(500).then(() => {
          setSleeping(false);
          nextParentStep();
        });
      }
      // Else, go to the next password
      else {
        sleep(500).then(() => {
          setSleeping(false);
          setStep(step + 1);
          setAttempts(0);
        });
      }
    }
    // Else, input password is not equal to expected password (INCORRECT)
    else {
      flash(colors.incorrect);
      // If this was the third attempt
      if (attempts + 1 > 2) {
        sleep(500).then(() => {
          setSleeping(false);
          // If this was the last password (password 3), go to the next step (Step5)
          if (step + 1 > 2) nextParentStep();
          // Else, go to the next password
          else {
            setStep(step + 1);
            setAttempts(0);
          }
        });
      }
      // Else, give them another attempt
      else {
        sleep(500).then(() => {
          setSleeping(false);
          setAttempts(attempts + 1);
        });
      }
    }

    addPasswordLog();
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
