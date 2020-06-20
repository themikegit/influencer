import React, { useState, createContext, useEffect } from "react";
import firebase from "./firebase";
import { db } from "./firebase";

export const Context = createContext();

export const CntProvider = (props) => {
	//GET DATA FROM FRIBASE!!!
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
				setData(tempData);
			});
		return () => unsubcribe();
	}, []);
	console.log("data from cont", data);
	// delete user
	const DeleteUser = (id) => {
		console.log("id", id);
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
	//SHOW HIDE MODAL FOR ADD NEW PERSON
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Context.Provider
			value={{
				data,
				handleShow,
				show,
				DeleteUser,
				setShow,
				handleClose,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};
