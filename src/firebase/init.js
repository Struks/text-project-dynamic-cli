import firebase from 'firebase/app';
import 'firebase/firestore';
require('firebase/auth')


var config = {
    apiKey: "AIzaSyCq69GZeRuQNxoC8HvyczIKUtJvsnnlirI",
    authDomain: "test-project-cli-b7928.firebaseapp.com",
    databaseURL: "https://test-project-cli-b7928.firebaseio.com",
    projectId: "test-project-cli-b7928",
    storageBucket: "test-project-cli-b7928.appspot.com",
    messagingSenderId: "603590460569"
  };
  firebase.initializeApp(config);
  export default firebase.firestore()