import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCuwOg_0gG5NxN1r_1jwWNyNu8Z_fyYni4",
  authDomain: "devdaybook-fb67d.firebaseapp.com",
  databaseURL: "https://devdaybook-fb67d.firebaseio.com",
  projectId: "devdaybook-fb67d",
  storageBucket: "",
  messagingSenderId: "729051049354",
  appId: "1:729051049354:web:5661b97fb4630d72"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const database = firebase.database()

export default firebase
