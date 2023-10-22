import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJiIWJ-5MQe62C5w0MtMmcGsCKV2OE_gY",
  authDomain: "nwitter-recap.firebaseapp.com",
  projectId: "nwitter-recap",
  storageBucket: "nwitter-recap.appspot.com",
  messagingSenderId: "960320995811",
  appId: "1:960320995811:web:ab42e7bf2db2033b6d20d6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
