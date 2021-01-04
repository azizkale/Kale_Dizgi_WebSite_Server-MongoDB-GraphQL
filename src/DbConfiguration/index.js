const firebase = require("firebase");
const dotenv = require("dotenv");

dotenv.config();
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "kaledizgi.firebaseapp.com",
  databaseURL: "https://kaledizgi.firebaseio.com",
  projectId: "kaledizgi",
  storageBucket: "kaledizgi.appspot.com",
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

module.exports = db;
