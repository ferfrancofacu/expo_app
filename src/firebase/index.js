import * as firebase from 'firebase';
import 'firebase/firestore';

import config from './config.js';
import { decode, encode } from 'base-64'

// Fix atob not found
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

// Initialize Firebase
if(firebase){
  firebase.initializeApp(config);
}
const database = firebase.firestore()

export { database }
export default firebase;