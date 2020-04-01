import React from 'react';
import { PianoKey } from './PianoKey';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Undo from '@material-ui/icons/Undo';
import { Button } from '@material-ui/core';
import { sounds } from './sounds';

/*
  Component represnting the piano interface.
  Renders all the PianoKey components and the undo/enter buttons.
*/

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
      top: 40,
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

  const playSound = note => {
    const sound = sounds[note.replace('#', 's')];
    sound.cloneNode(true).play();
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.piano}>
          <PianoKey
            value={0}
            variant='white'
            note='C'
            updatePassword={handleSetInputs}
            playSound={playSound}
            index={index}
          />
          <PianoKey
            value={1}
            variant='black'
            offset={blackKeyOffset}
            note='C#'
            updatePassword={handleSetInputs}
            playSound={playSound}
            index={index}
          />
          <PianoKey
            value={2}
            variant='white'
            offset={whiteKeyOffset}
            note='D'
            updatePassword={handleSetInputs}
            playSound={playSound}
            index={index}
          />
          <PianoKey
            value={3}
            variant='black'
            offset={blackKeyOffset + whiteKeyOffset}
            note='D#'
            updatePassword={handleSetInputs}
            playSound={playSound}
            index={index}
          />
          <PianoKey
            value={4}
            variant='white'
            offset={whiteKeyOffset * 2}
            note='E'
            updatePassword={handleSetInputs}
            playSound={playSound}
            index={index}
          />
          <PianoKey
            value={5}
            variant='white'
            offset={whiteKeyOffset * 2}
            note='F'
            updatePassword={handleSetInputs}
            playSound={playSound}
            index={index}
          />
          <PianoKey
            value={6}
            variant='black'
            offset={blackKeyOffset + whiteKeyOffset * 2}
            note='F#'
            updatePassword={handleSetInputs}
            playSound={playSound}
            index={index}
          />
          <PianoKey
            value={7}
            variant='white'
            offset={whiteKeyOffset * 3}
            note='G'
            updatePassword={handleSetInputs}
            playSound={playSound}
            index={index}
          />
          <PianoKey
            value={8}
            variant='black'
            offset={blackKeyOffset + whiteKeyOffset * 3}
            note='G#'
            updatePassword={handleSetInputs}
            playSound={playSound}
            index={index}
          />
          <PianoKey
            value={9}
            variant='white'
            offset={whiteKeyOffset * 4}
            note='A'
            updatePassword={handleSetInputs}
            playSound={playSound}
            index={index}
          />
          <PianoKey
            value={10}
            variant='black'
            offset={blackKeyOffset + whiteKeyOffset * 4}
            note='A#'
            updatePassword={handleSetInputs}
            playSound={playSound}
            index={index}
          />
          <PianoKey
            value={11}
            variant='white'
            offset={whiteKeyOffset * 5}
            note='B'
            updatePassword={handleSetInputs}
            playSound={playSound}
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
