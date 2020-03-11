import React, { useState } from 'react';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';
import { Step5 } from './Step5';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { generatePassword, shuffleArray } from './utils';
import { passwordTypes } from './globals';

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

const App = () => {
  const classes = useStyles();

  const [step, setStep] = useState(4);
  const [logs, setLogs] = useState([]);

  // Generate passwords
  const [passwords] = useState({
    0: { type: passwordTypes[0], value: generatePassword(4) },
    1: { type: passwordTypes[1], value: generatePassword(4) },
    2: { type: passwordTypes[2], value: generatePassword(4) },
  });

  // Shuffle passwords
  const passwordValues = Object.values(passwords);
  shuffleArray(passwordValues);
  const [shuffledPasswords] = useState({
    0: passwordValues[0],
    1: passwordValues[1],
    2: passwordValues[2],
  });

  // For debugging purposes
  // for (const password of Object.values(passwords)) {
  //   console.log(password.type + ': ' + convertPassword(password.value));
  // }

  const [inputs, setInputs] = useState({ 0: [], 1: [], 2: [] });

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleSetInputs = (index, input) => {
    if (inputs[index].length < passwords[index].value.length) {
      setInputs({
        ...inputs,
        [index]: [...inputs[index], input],
      });
    }
  };

  const clearInput = index => {
    setInputs({ ...inputs, [index]: [] });
  };

  const clearAllInputs = () => {
    setInputs({ 0: [], 1: [], 2: [] });
  };

  const addLog = newLog => {
    setLogs([...logs, newLog]);
  };

  console.log(logs);

  const renderStep = step => {
    switch (step) {
      case 1:
        return <Step1 nextStep={nextStep} />;
      case 2:
        return (
          <Step2
            nextParentStep={nextStep}
            passwords={passwords}
            inputs={inputs}
            handleSetInputs={handleSetInputs}
            clearInput={clearInput}
            clearAllInputs={clearAllInputs}
          />
        );
      case 3:
        return <Step3 nextStep={nextStep} />;
      case 4:
        return (
          <Step4
            nextParentStep={nextStep}
            passwords={shuffledPasswords}
            inputs={inputs}
            handleSetInputs={handleSetInputs}
            clearInput={clearInput}
            addLog={addLog}
          />
        );
      case 5:
        return <Step5 />;
      default:
        return <div />;
    }
  };

  return <div className={classes.root}>{renderStep(step)}</div>;
};

export default App;
