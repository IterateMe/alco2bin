import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBR0P7VExOdqDwUFHnZrAl9nzYTNytxE3Y",
    authDomain: "alco2bin.firebaseapp.com",
    projectId: "alco2bin",
    storageBucket: "alco2bin.appspot.com",
    messagingSenderId: "436723380439",
    appId: "1:436723380439:web:c5e6b575ae6f934c8c0092"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
