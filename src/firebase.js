import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASWwtz2AsmSxm5ISARqjqLa23TeIaQbo0",
  authDomain: "react-js-disney-clone.firebaseapp.com",
  projectId: "react-js-disney-clone",
  storageBucket: "react-js-disney-clone.appspot.com",
  messagingSenderId: "180242692880",
  appId: "1:180242692880:web:e22887fef18e13f4100395",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
