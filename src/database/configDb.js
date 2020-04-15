import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyC5ynGiP4EovMUnqzi-AsWYLQCv0KwJhPk",
    authDomain: "tags-f2202.firebaseapp.com",
    databaseURL: "https://tags-f2202.firebaseio.com",
    projectId: "tags-f2202",
    storageBucket: "tags-f2202.appspot.com",
    messagingSenderId: "767223915321",
    appId: "1:767223915321:web:8945c05de507ba584a7ee8",
    measurementId: "G-6QJ6H82G36"
};


firebase.initializeApp(config);

let provider = new firebase.auth.GoogleAuthProvider();
let signInWithGoogle = () =>
{
    return firebase.auth().signInWithPopup(provider).then(function (result)
    {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function (error)
    {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}


export default signInWithGoogle;
export const signOutFromGoogle = () =>
{
    firebase.auth().signOut().then(function ()
    {
        // Sign-out successful.
    }).catch(function (error)
    {
        // An error happened.
    });
};

export const auth = firebase.auth()

export const db = firebase.firestore()