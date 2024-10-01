// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpMDT8wbwQc94q0qyRpz_Krl5lxnAa34s",
  authDomain: "netflix-clone-d2a40.firebaseapp.com",
  projectId: "netflix-clone-d2a40",
  storageBucket: "netflix-clone-d2a40.appspot.com",
  messagingSenderId: "1027186254910",
  appId: "1:1027186254910:web:a637b21307881d6b405d6f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "user"), {
      uid: user.id,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
  }
};
