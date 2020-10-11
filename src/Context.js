import React, { useState, createContext, useEffect } from "react";
import { db } from "./firebase";
import firebase from "firebase/app";
import "firebase/auth";
export const Context = createContext();

export const CntProvider = (props) => {
	///USER INFORMATIONS
	const [userlog, setuserlog] = useState();
	useEffect(() => {
		firebase.auth().onAuthStateChanged(function (user) {
			setuserlog(user.email);
			if (user) {
				console.log("user is loged");
			} else {
				console.log("no user loged");
			}
		});
	}, []);
	//SHOW ONLY ACCEPTED CHECKBOX "FILTER"
	const [check, setCheck] = useState(false);
	//GET DATA FROM FRIBASE PRIMARY COLLECTION!!!
	const [data, setData] = useState([]);
	useEffect(() => {
		const unsubcribe = firebase
			.firestore()
			.collection("potentialColab")
			.onSnapshot((snapshot) => {
				const tempData = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				const filtered = tempData.filter((t) => t.status === "accepted");
				check ? setData(filtered) : setData(tempData);
			});
		return () => unsubcribe();
	}, [check]);
	//GET DATA FROM FRIBASE ARCHIVED COLLECTION!!!
	const [archUser, setArchUser] = useState([]);
	useEffect(() => {
		const unsubcribe = firebase
			.firestore()
			.collection("archivedUsers")
			.onSnapshot((snapshot) => {
				const archData = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setArchUser(archData);
			});
		return () => unsubcribe();
	}, []);
	// DELTE USER FUNCTION
	const DeleteUser = (id) => {
		db.collection("potentialColab")
			.doc(id)
			.delete()
			.then(function () {
				console.log("Document successfully deleted!");
			})
			.catch(function (error) {
				console.error("Error removing document: ", error);
			});
	};
	//ARCHIVE USER
	const archiveUser = (id) => {
		const archived = data.filter((t) => t.id === id);

		firebase
			.firestore()
			.collection("archivedUsers")
			.add(...archived)
			.then(() => {
				console.log("done!");
			});

		db.collection("potentialColab")
			.doc(id)
			.delete()
			.then(function () {
				console.log("Document successfully transfered!");
			})
			.catch(function (error) {
				console.error("Error removing document: ", error);
			});
	};
	///UPDATE STATUS
	const [updateRecord, setupdateRecord] = useState();
	const updateUser = (id, val) => {
		setupdateRecord({ ...updateRecord, status: val });
		console.log("object", id, val);
		const updateDoc = db.collection("potentialColab").doc(id);
		return updateDoc
			.update({
				status: val,
			})
			.catch(function (error) {
				console.error("Error updating document: ", error);
			});
	};

	//SHOW HIDE MODAL FOR ADD NEW PERSON
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	//DARK MODE
	const [darkMode, setdarkMode] = useState(false);
	const setDark = () => {
		setdarkMode(!darkMode);
	};

	//showhide modal and login

	const [showmod, setShowmod] = useState(false);

	const handleClosemod = () => setShowmod(false);
	const handleShowmod = () => {
		setShowmod(true);
		console.log("hello");
	};
	const [loginval, setloginval] = useState({
		email: "",
		password: "",
	});

	const submitLogin = async () => {
		await firebase
			.auth()
			.signInWithEmailAndPassword(loginval.email, loginval.password)
			.then(
				() => {
					handleClosemod();
					window.location.reload();
				},
				(err) => {
					console.log("Error logging in: ", err);
				}
			);
	};
	return (
		<Context.Provider
			value={{
				data,
				handleShow,
				show,
				DeleteUser,
				setShow,
				handleClose,
				check,
				setCheck,
				archiveUser,
				archUser,
				setDark,
				darkMode,
				setdarkMode,
				updateUser,
				userlog,
				handleClosemod,
				handleShowmod,
				submitLogin,
				showmod,
				loginval,
				setloginval,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};
