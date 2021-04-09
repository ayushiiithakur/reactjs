import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyBlJ3dDXPiXrX6g0abiUTddabBEYoeL87c",
    authDomain: "login-a7b6d.firebaseapp.com",
    projectId: "login-a7b6d",
    storageBucket: "login-a7b6d.appspot.com",
    messagingSenderId: "590683928007",
    appId: "1:590683928007:web:1045850dda7a85712395e2"
  };
 
 const fire= firebase.initializeApp(firebaseConfig);
 export default fire;
