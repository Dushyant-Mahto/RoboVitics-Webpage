import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD3oiE_b1hUbWRTnrfDkeHuieyRDHrlBds",
  authDomain: "robovitics-b9e70.firebaseapp.com",
  projectId: "robovitics-b9e70",
  storageBucket: "robovitics-b9e70.appspot.com",
  messagingSenderId: "292682478005",
  appId: "1:292682478005:web:0c80bf8515b0e67375a9fc",
  measurementId: "G-JBW09NMZ5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
}

const login = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.signInWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
}

// const saveData = () => {
//     const email = document.getElementById('email').value
//     const password = document.getElementById('password').value

//     db.collection('users')
//     .add({
//         email: email,
//         password: password
//     })
//     .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error) => {
//         console.error("Error adding document: ", error);
//     });
// }

// const readData = () => {
//     db.collection('users')
//     .get()
//     .then((data) => {
//         console.log(data.docs.map((item) => {
//             return {...item.data(), id: item.id}
//         }))
//     })
// }

// const updateData = () => {
//     db.collection('users').doc('6caYOiNxwviOJFIQ4Uag')
//     .update({
//         email: 'ashishisagoodboy1234@gmail.com',
//         password: '123456'
//     })
//     .then(() => {
//         alert('Data Updated')
//     })
// }

// const deleteData = () => {
//     db.collection('users').doc('6caYOiNxwviOJFIQ4Uag').delete()
//     .then(() => {
//         alert('Data Deleted')
//     })
//     .catch((err) =>{
//         console.log(err)
//     })
// }