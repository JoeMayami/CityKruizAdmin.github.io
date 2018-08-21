var firebase = require("firebase");

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAS4CLiXz-8RouEW9rpBG6-7LRKYFwNcdo",
    authDomain: "citykruizadmin.firebaseapp.com",
    databaseURL: "https://citykruizadmin.firebaseio.com",
    projectId: "citykruizadmin",
    storageBucket: "citykruizadmin.appspot.com",
    messagingSenderId: "309785868717"
  };
  firebase.initializeApp(config);

var mAuth = firebase.auth();
var mStorage = firebase.storage();
var mDatabase = firebase.database();
var mFirestore = firebase.firestore();
var mMessaging = firebase.messaging();
var mFunctions = firebase.functions();