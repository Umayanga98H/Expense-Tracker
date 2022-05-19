import firebase from 'firebase/compat/app';

const config={
    apiKey: "AIzaSyBzv8HYGW0qBU3IoFjZOU5Ojl3KOmEUaTg",
    authDomain: "react-expense-856bc.firebaseapp.com",
    projectId: "react-expense-856bc",
    storageBucket: "react-expense-856bc.appspot.com",
    messagingSenderId: "531980097359",
    appId: "1:531980097359:web:589819d34d9a215952573a",
    measurementId: "G-PR8Q5YQ5C7"

}

const fire=firebase.initializeApp(config);
export default fire;