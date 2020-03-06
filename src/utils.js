import { degreeToKey, noteNames, colors } from './globals';

export const generatePassword = numNotes => {
  let key = Math.floor(Math.random() * 12);

  let notes = [];

  for (let i = 0; i < numNotes; i++) {
    let degree = Math.floor(Math.random() * 5);
    notes.push((degreeToKey[degree] + key) % 12);
  }

  return notes;
};

export const convertPassword = password => {
  let converted = [];
  for (let n in password) converted.push(convertNote(password[n]));
  return converted.join(' ');
};

export const convertNote = note => {
  return noteNames[note];
};

export const arraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

export const flash = color => {
  document.bgColor = color;
  sleep(500).then(() => {
    document.bgColor = colors.default;
  });
};

export const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
