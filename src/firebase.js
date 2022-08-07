import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAgru7IOuzV8Z-viJpncfyja--x9tBWawc",
    authDomain: "disney-plus-clone-by-sachin.firebaseapp.com",
    projectId: "disney-plus-clone-by-sachin",
    storageBucket: "disney-plus-clone-by-sachin.appspot.com",
    messagingSenderId: "573805178272",
    appId: "1:573805178272:web:6cca7ecdf63aa6c92788c5",
    measurementId: "G-7TGZEL7NK1"
  };

  // const firebaseApp = initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore();
  // const auth = firebase.auth();
  // const provider = new firebase.auth.GoogleAuthProvider();
  // const storage = firebase.storage();

  // export { auth, provider, storage }
  // export default db;


  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const storage = getStorage(firebaseApp);

  export { auth, provider, storage }
  export default db;