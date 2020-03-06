import React, { useState } from 'react';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { generatePassword } from './utils';

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

  const [step, setStep] = useState(1);
  const [passwords] = useState({
    0: generatePassword(4),
    1: generatePassword(4),
    2: generatePassword(4),
  });
  const [inputs, setInputs] = useState({ 0: [], 1: [], 2: [] });

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleSetInputs = (index, input) => {
    if (inputs[index].length < passwords[index].length) {
      setInputs({ ...inputs, [index]: [...inputs[index], input] });
    }
  };

  const clearInput = index => {
    setInputs({ ...inputs, [index]: [] });
  };

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
          />
        );
      case 3:
        return <Step3 nextStep={nextStep} />;
      default:
        return <div />;
    }
  };

  return <div className={classes.root}>{renderStep(step)}</div>;
};

export default App;
