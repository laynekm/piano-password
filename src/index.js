import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/storage';

/*
  Initializes Firebase connection and renders App component to DOM.
*/

firebase.initializeApp({
  apiKey: 'AIzaSyDxageXWYZEzEjXy74jRXtestQPSwdK9D4',
  authDomain: 'piano-password.firebaseapp.com',
  databaseURL: 'https://piano-password.firebaseio.com',
  projectId: 'piano-password',
  storageBucket: 'piano-password.appspot.com',
  messagingSenderId: '463337157416',
  appId: '1:463337157416:web:1cc0a39fa4b6a43be5161d',
});

// Hide right click menu
document.oncontextmenu = () => {
  return false;
};

ReactDOM.render(<App />, document.getElementById('root'));
