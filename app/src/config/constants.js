import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCCXshZQ1ZFUduwalIr-n4bcTprxk_NIlQ',
  authDomain: 'udaciouscms.firebaseapp.com',
  databaseURL: 'https://udaciouscms.firebaseio.com',
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
