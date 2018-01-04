import firebase from 'firebase';
import { firebaseConfig } from '../config/firebaseConfig.js';

export const firebaseDB = firebase.initializeApp(firebaseConfig).database();
