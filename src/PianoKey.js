import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    whiteKey: {
      height: 250,
      width: 60,
      border: '1px solid black',
      position: 'relative',
      transition: '0.3s',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      '&:hover': {
        backgroundColor: '#1E88E5',
      },
    },
    blackKey: {
      height: 175,
      width: 40,
      zIndex: 2,
      backgroundColor: 'black',
      position: 'relative',
      cursor: 'pointer',
      color: 'white',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      '&:hover': {
        backgroundColor: '#1E88E5',
      },
    },
  })
);

export const PianoKey = props => {
  const classes = useStyles();
  const { value, variant, offset, text, updatePassword } = props;

  return (
    <div
      className={variant === 'white' ? classes.whiteKey : classes.blackKey}
      style={{ right: offset }}
      onClick={() => updatePassword(value)}>
      {text}
    </div>
  );
};
