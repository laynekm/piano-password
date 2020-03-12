import React from 'react';
import { PianoKey } from './PianoKey';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Undo from '@material-ui/icons/Undo';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 340,
      height: 250,
    },
    piano: {
      display: 'flex',
      flexDirection: 'row',
      width: 500,
      height: 250,
      paddingTop: 25,
    },
    password: {
      top: 500,
    },
    bottom: {
      position: 'relative',
      top: 30,
      width: 340,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    undo: {
      cursor: 'pointer',
    },
  })
);

export const Piano = props => {
  const classes = useStyles();
  const { handleSetInputs, handleSubmit, handleUndo, canSubmit, index } = props;

  const blackKeyOffset = 15;
  const whiteKeyOffset = 32;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.piano}>
          <PianoKey
            value={0}
            variant='white'
            text='C'
            updatePassword={handleSetInputs}
            index={index}
          />
          <PianoKey
            value={1}
            variant='black'
            offset={blackKeyOffset}
            text='C#'
            updatePassword={handleSetInputs}
            index={index}
          />
          <PianoKey
            value={2}
            variant='white'
            offset={whiteKeyOffset}
            text='D'
            updatePassword={handleSetInputs}
            index={index}
          />
          <PianoKey
            value={3}
            variant='black'
            offset={blackKeyOffset + whiteKeyOffset}
            text='D#'
            updatePassword={handleSetInputs}
            index={index}
          />
          <PianoKey
            value={4}
            variant='white'
            offset={whiteKeyOffset * 2}
            text='E'
            updatePassword={handleSetInputs}
            index={index}
          />
          <PianoKey
            value={5}
            variant='white'
            offset={whiteKeyOffset * 2}
            text='F'
            updatePassword={handleSetInputs}
            index={index}
          />
          <PianoKey
            value={6}
            variant='black'
            offset={blackKeyOffset + whiteKeyOffset * 2}
            text='F#'
            updatePassword={handleSetInputs}
            index={index}
          />
          <PianoKey
            value={7}
            variant='white'
            offset={whiteKeyOffset * 3}
            text='G'
            updatePassword={handleSetInputs}
            index={index}
          />
          <PianoKey
            value={8}
            variant='black'
            offset={blackKeyOffset + whiteKeyOffset * 3}
            text='G#'
            updatePassword={handleSetInputs}
            index={index}
          />
          <PianoKey
            value={9}
            variant='white'
            offset={whiteKeyOffset * 4}
            text='A'
            updatePassword={handleSetInputs}
            index={index}
          />
          <PianoKey
            value={10}
            variant='black'
            offset={blackKeyOffset + whiteKeyOffset * 4}
            text='A#'
            updatePassword={handleSetInputs}
            index={index}
          />
          <PianoKey
            value={11}
            variant='white'
            offset={whiteKeyOffset * 5}
            text='B'
            updatePassword={handleSetInputs}
            index={index}
          />
        </div>
      </div>
      <div className={classes.bottom}>
        <Undo
          onClick={() => handleUndo(index)}
          fontSize='large'
          style={{ cursor: 'pointer' }}
        />
        <Button
          variant='contained'
          disabled={!canSubmit}
          onClick={() => handleSubmit()}>
          Enter
        </Button>
      </div>
    </React.Fragment>
  );
};
