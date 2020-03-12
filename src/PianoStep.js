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

export const PianoStep = props => {
  const classes = useStyles();
  const [attempts, setAttempts] = useState(0);
  const [passwordStep, setPasswordStep] = useState(0);
  const [startTime, setStartTime] = useState('');
  const [sleeping, setSleeping] = useState(false);
  const {
    testStep,
    nextStep,
    passwords,
    inputs,
    handleSetInputs,
    handleUndo,
    clearInput,
    addLog,
  } = props;

  const addPasswordLog = () => {
    addLog({
      trial: passwordStep + 1,
      attempt: attempts + 1,
      startTime: startTime,
      endTime: moment().format(),
      expected: passwords[passwordStep].value.join(' '),
      actual: inputs[passwordStep].join(' '),
    });

    setStartTime('');
  };

  if (!startTime) {
    setStartTime(moment().format());
  }

  const handleSubmit = () => {
    setSleeping(true);

    // If input password is equal to expected password
    if (arraysEqual(passwords[passwordStep].value, inputs[passwordStep])) {
      flash(colors.correct);

      // If this was the last password, go to the next step
      if (passwordStep + 1 > 2) {
        sleep(500).then(() => {
          setSleeping(false);
          clearInput(passwordStep);
          nextStep();
        });
      }
      // Else, go to the next password
      else {
        sleep(500).then(() => {
          setSleeping(false);
          setPasswordStep(passwordStep + 1);
          clearInput(passwordStep);
          setAttempts(0);
        });
      }
    }
    // Else, input password is not equal to expected password
    else {
      flash(colors.incorrect);

      // Participant has as many attempts as they want if they are not being tested
      if (!testStep) {
        sleep(500).then(() => {
          setSleeping(false);
          clearInput(passwordStep);
        });
      }
      // If this was the third attempt
      else if (attempts + 1 > 2) {
        sleep(500).then(() => {
          setSleeping(false);
          // If this was the last password (password 3), go to the next step
          if (passwordStep + 1 > 2) nextStep();
          // Else, go to the next password
          else {
            setPasswordStep(passwordStep + 1);
            setAttempts(0);
          }
        });
      }
      // Else, give them another attempt
      else {
        sleep(500).then(() => {
          setSleeping(false);
          clearInput(passwordStep);
          setAttempts(attempts + 1);
        });
      }
    }

    testStep && addPasswordLog();
  };

  return (
    <div className={classes.root}>
      {testStep ? (
        <h3>
          {passwords[passwordStep].type} password - Attempts: {attempts}/3
        </h3>
      ) : (
        <h3>
          {passwords[passwordStep].type} password:{' '}
          {convertPassword(passwords[passwordStep].value)}
        </h3>
      )}
      <h3>Your input: {convertPassword(inputs[passwordStep])} </h3>
      <Piano
        handleSetInputs={sleeping ? () => {} : handleSetInputs}
        handleSubmit={handleSubmit}
        handleUndo={handleUndo}
        canSubmit={
          inputs[passwordStep].length ===
            passwords[passwordStep].value.length && !sleeping
        }
        index={passwordStep}
      />
    </div>
  );
};
