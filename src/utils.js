import { degreeToKey, noteNames, colors } from './globals';
import { parse } from 'json2csv';

/*
  Miscellaneous utility functions used throughout the app.
*/

// Returns an array of randomized notes (as integers) of length numNotes.
export const generatePassword = numNotes => {
  let key = Math.floor(Math.random() * 12);

  let notes = [];

  for (let i = 0; i < numNotes; i++) {
    let degree = Math.floor(Math.random() * 5);
    notes.push((degreeToKey[degree] + key) % 12);
  }

  return notes;
};

// Converts an integer password into a note password.
export const convertPassword = password => {
  let converted = [];
  for (let n in password) converted.push(convertNote(password[n]));
  return converted.join(' ');
};

// Converts an individual integer to a note.
export const convertNote = note => {
  return noteNames[note];
};

// Determines whether two arrays are equal.
export const arraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// Shuffles an array into a random order.
export const shuffleArray = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

// Changes the background colour for 500 ms.
export const flash = color => {
  document.bgColor = color;
  sleep(500).then(() => {
    document.bgColor = colors.default;
  });
};

// Sleeps for ms time.
export const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Converts JSON to CSV format.
export const createCsv = data => {
  return new Blob([parse(data)], { type: 'text/csv;charset=utf-8;' });
};
