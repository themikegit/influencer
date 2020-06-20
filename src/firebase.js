import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
let firebaseConfig = {
	apiKey: "AIzaSyBot6QmX6WpYoK9aeDIYvPjioZFOGzQsfA",
	authDomain: "websitebrief-5c999.firebaseapp.com",
	databaseURL: "https://websitebrief-5c999.firebaseio.com",
	projectId: "websitebrief-5c999",
	storageBucket: "websitebrief-5c999.appspot.com",
	messagingSenderId: "1079494919652",
	appId: "1:1079494919652:web:ca63b455d9e6a4344573f1",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore(app);

export default firebase;
