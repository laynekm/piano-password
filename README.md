## Piano Password

Part of Project 2 for COMP 3008.

Developed using the React framework, which essentially divides the app into components which encapsulate a portion of the UI and functionality. The app is hosted on Firebase Hosting and logs are stored in Firebase Storage.

Link: https://piano-password.web.app

Launch steps (requires npm)
1. Install Node modules (run "npm install" in root directory)
2. Launch app (run "npm start" in root directory)
3. Visit localhost in browser (http://localhost:3000/)

### List of files (in src)
- index.js - Initializes Firebase connection and renders App component to DOM.
- index.css - Sets the default styling.
- App.js - Component that renders the current step and handles state for the generated passwords and user input.
- Step1.js - Component that provides a brief overview of the app and its purpose.
- Step3.js - Component that tells the user they will now be tested.
- Step5.js - Component that submits data to Firebase and thanks the participant.
- PianoStep - Component that renders steps that require the Piano component (steps 2 and 4) and handles password entry logic (ie.  valid/invalid cases).
- Piano - Component that renders all PianoKeys and the undo/enter buttons.
- PianoKey - Component representing a single piano key.
- globals.js - Global values used throughout the app.
- sounds.js - Sounds used by the piano keys.
- utils.js - Miscellaneous utility functions used throughout the app.

See package.json for a list of Node modules that are used.
