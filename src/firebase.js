import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
let firebaseConfig = {
	apiKey: process.env.REACT_APP_API,
	authDomain: process.env.REACT_APP_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE,
	projectId: process.env.REACT_APP_ID,
	storageBucket: process.env.REACT_APP_STORAGE,
	messagingSenderId: process.env.REACT_APP_MSG,
	appId: process.env.REACT_APP_APP_ID,
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore(app);

export default firebase;
