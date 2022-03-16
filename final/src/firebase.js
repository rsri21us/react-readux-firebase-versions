import * as firebase from "firebase";
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCSSq7B8m-l3oN_5w1Ax8Ur7HwypsZ2jig",
    authDomain: "react-diaryapp.firebaseapp.com",
    databaseURL: "https://react-diaryapp.firebaseio.com",
    projectId: "react-diaryapp",
    storageBucket: "react-diaryapp.appspot.com",
    messagingSenderId: "1020272813390"
};
firebase.initializeApp(config);

export const database = firebase.database().ref("/notes");

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
