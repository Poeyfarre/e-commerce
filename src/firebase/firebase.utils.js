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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
