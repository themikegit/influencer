import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Context } from "../Context";
import { Plus, Archive } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import ModalForm from "./ModalForm";
import firebase from "firebase/app";
import Button from "react-bootstrap/Button";
import ModalLog from "./ModalLog";

export default function Navigation({ history }) {
	/// LOG OUT USER!!!
	const logout = async () => {
		await firebase
			.auth()
			.signOut()
			.then(() => {
				window.location.reload();
			});
	};
	const {
		handleShow,
		archUser,
		darkMode,
		setdarkMode,
		setDark,
		userlog,
		handleShowmod,
	} = useContext(Context);
	const initLetter = String(userlog);
	return (
		<>
			<Navbar
				bg={darkMode ? "dark" : "primary"}
				variant={darkMode ? "dark" : "light"}
			>
				<Navbar.Brand>
					<Link style={{ color: "white", textDecoration: "none" }} to="/">
						{" "}
						InstaTable{" "}
					</Link>
				</Navbar.Brand>
				<Nav style={{ alignItems: "center" }} className="mr-auto">
					<Nav.Link
						style={{ color: "white", textDecoration: "none" }}
						onClick={() => handleShow()}
					>
						{" "}
						<Plus /> Add new
					</Nav.Link>
					<Nav.Link>
						<Link
							style={{
								color: "white",
								textDecoration: "none",
							}}
							to="/archive"
						>
							<Archive /> Archived({archUser.length})
						</Link>
					</Nav.Link>
					<Form.Check
						style={{ color: "white" }}
						type="switch"
						onChange={() => setDark(!darkMode)}
						checked={darkMode}
						id="dark-switch"
						label="Dark mode"
					/>
				</Nav>
				{userlog ? (
					<Button variant="light" onClick={() => logout()}>
						{" "}
						Logout{" "}
					</Button>
				) : null}

				{userlog ? null : (
					<Button onClick={() => handleShowmod()} variant="light">
						Login
					</Button>
				)}
				{userlog ? (
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							fontSize: "0.6em",
							marginLeft: "10px",
							fontWeight: "500",
							color: "white",
							backgroundColor: "#FE5B4E",
							borderRadius: "50px",
							height: "50px",
							width: "50px",
						}}
					>
						{" "}
						<h3 style={{ margin: "0" }}>
							{" "}
							{initLetter.substring(0, 1).toUpperCase()}{" "}
						</h3>{" "}
					</div>
				) : null}
			</Navbar>
			<ModalForm />
			<ModalLog />
		</>
	);
}
