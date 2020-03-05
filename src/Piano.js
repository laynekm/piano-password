import React, { useState } from 'react';
import { PianoKey } from './PianoKey';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    piano: {
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
      width: 500,
      height: 250,
      left: 200,
      paddingTop: 25,
    },
    password: {
      top: 500,
    },
  })
);

export const Piano = () => {
  const classes = useStyles();
  const [password, setPassword] = useState([]);

  const updatePassword = number => {
    setPassword([...password, number]);
  };

  const blackKeyOffset = 15;
  const whiteKeyOffset = 32;

  return (
    <div className={classes.root}>
      <div className={password}>Password: {password.join(' ')}</div>
      <div className={classes.piano}>
        <PianoKey
          value={1}
          variant='white'
          text='C'
          updatePassword={updatePassword}
        />
        <PianoKey
          value={2}
          variant='black'
          offset={blackKeyOffset}
          text='C#'
          updatePassword={updatePassword}
        />
        <PianoKey
          value={3}
          variant='white'
          offset={whiteKeyOffset}
          text='D'
          updatePassword={updatePassword}
        />
        <PianoKey
          value={4}
          variant='black'
          offset={blackKeyOffset + whiteKeyOffset}
          text='D#'
          updatePassword={updatePassword}
        />
        <PianoKey
          value={5}
          variant='white'
          offset={whiteKeyOffset * 2}
          text='E'
          updatePassword={updatePassword}
        />
        <PianoKey
          value={6}
          variant='white'
          offset={whiteKeyOffset * 2}
          text='F'
          updatePassword={updatePassword}
        />
        <PianoKey
          value={7}
          variant='black'
          offset={blackKeyOffset + whiteKeyOffset * 2}
          text='F#'
          updatePassword={updatePassword}
        />
        <PianoKey
          value={8}
          variant='white'
          offset={whiteKeyOffset * 3}
          text='G'
          updatePassword={updatePassword}
        />
        <PianoKey
          value={9}
          variant='black'
          offset={blackKeyOffset + whiteKeyOffset * 3}
          text='G#'
          updatePassword={updatePassword}
        />
        <PianoKey
          value={10}
          variant='white'
          offset={whiteKeyOffset * 4}
          text='A'
          updatePassword={updatePassword}
        />
        <PianoKey
          value={11}
          variant='black'
          offset={blackKeyOffset + whiteKeyOffset * 4}
          text='A#'
          updatePassword={updatePassword}
        />
        <PianoKey
          value={12}
          variant='white'
          offset={whiteKeyOffset * 5}
          text='B'
          updatePassword={updatePassword}
        />
      </div>
    </div>
  );
};
