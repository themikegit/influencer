import React, { useState, createContext, useEffect } from "react";
import firebase from "./firebase";
import { db } from "./firebase";

export const Context = createContext();

export const CntProvider = (props) => {
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
		const archived = data.filter((t) => t.id == id);

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
  const [updateRecord, setupdateRecord] = useState()
  const updateUser = (id, val) => {
    setupdateRecord({ ...updateRecord, status: val });
    console.log("object", id, val);
    const updateDoc = db.collection("potentialColab").doc(id);
    return updateDoc
     .update({
      status: val
     })
     .catch(function(error) {
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
        updateUser
			}}
		>
			{props.children}
		</Context.Provider>
	);
};
