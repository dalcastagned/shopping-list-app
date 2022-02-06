import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAnlAtqY24ZaKZRthkoRSEY3ImXLIdAhPA",
  authDomain: "shopping-list-8b745.firebaseapp.com",
  projectId: "shopping-list-8b745",
  storageBucket: "shopping-list-8b745.appspot.com",
  messagingSenderId: "750053184650",
  appId: "1:750053184650:web:a12dddec9a924b13874973"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore()

export default database