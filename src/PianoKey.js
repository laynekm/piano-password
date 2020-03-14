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
      paddingBottom: 5,
      '&:hover': {
        backgroundColor: '#1E88E5',
      },
      '&::selection': {
        color: 'none',
        background: 'none',
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
      paddingBottom: 5,
      '&:hover': {
        backgroundColor: '#1E88E5',
      },
      '&::selection': {
        color: 'none',
        background: 'none',
      },
    },
  })
);

export const PianoKey = props => {
  const classes = useStyles();
  const {
    value,
    variant,
    offset,
    note,
    updatePassword,
    playSound,
    index,
  } = props;

  const onClick = () => {
    playSound(note);
    updatePassword(index, value);
  };

  return (
    <div
      className={variant === 'white' ? classes.whiteKey : classes.blackKey}
      style={{ right: offset }}
      onClick={() => onClick()}>
      {note}
    </div>
  );
};
