import { initializeApp } from "firebase/app";
// import { getFireStore } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyASQQVe7GWA6rXia_qsC81bEPBI393iBtg",
    authDomain: "todo-react-crud.firebaseapp.com",
    projectId: "todo-react-crud",
    storageBucket: "todo-react-crud.appspot.com",
    messagingSenderId: "843819485898",
    appId: "1:843819485898:web:7a3b0b9d6f0f5ff268c233"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };