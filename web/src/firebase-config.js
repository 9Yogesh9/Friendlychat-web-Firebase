/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

const config = {
  apiKey: "AIzaSyDs8I0tHY6YoA2bpspzw6q58bOCRClaj6w",
  authDomain: "friendlychat-d493b.firebaseapp.com",
  projectId: "friendlychat-d493b",
  storageBucket: "friendlychat-d493b.appspot.com",
  messagingSenderId: "428447411374",
  appId: "1:428447411374:web:2285d657d07cf1ff1f113f"
};

// const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  
// };

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}