import firebase from 'firebase';
import 'firebase/firestore';

import config from './config.js';
import { decode, encode } from 'base-64'

// Fix atob not found
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

// Fix firestore crypto
global.crypto = require("@firebase/firestore");
global.crypto.getRandomValues = byteArray => { 
  for (let i = 0; i < byteArray.length; i++) { 
    byteArray[i] = Math.floor(256 * Math.random()); 
  } 
}

// Initialize Firebase
firebase.initializeApp(config);
const database = firebase.firestore()

export { database }
export default firebase;