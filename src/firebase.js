import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAFRoA-Ip9jOMj3WHW4qUEyr7BqkCsXXkA",
  authDomain: "reactjs-disneyplus-clone-92f2b.firebaseapp.com",
  projectId: "reactjs-disneyplus-clone-92f2b",
  storageBucket: "reactjs-disneyplus-clone-92f2b.appspot.com",
  messagingSenderId: "782975895246",
  appId: "1:782975895246:web:6f58c9f9847c67ad1c729f",
  measurementId: "G-0964M979JS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider};
export default db;
