import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAwXrrlgHgN8NpKTYSwalorUv2tXLEUcbg',
	authDomain: 'e-comm-db-f39eb.firebaseapp.com',
	databaseURL: 'https://e-comm-db-f39eb.firebaseio.com',
	projectId: 'e-comm-db-f39eb',
	storageBucket: 'e-comm-db-f39eb.appspot.com',
	messagingSenderId: '235691121836',
	appId: '1:235691121836:web:fcc3c9704440b84ddd9309',
	measurementId: 'G-LE3LCC05NS'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
