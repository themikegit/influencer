import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Context } from "../Context";
import { Plus, Archive } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import ModalForm from "./ModalForm";

export default function Navigation() {
	const { handleShow, archUser, darkMode, setdarkMode, setDark } = useContext(
		Context
	);
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
				<Nav className="mr-auto">
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
          style= {{color:"white"}}
						type="switch"
						onChange={() => setDark(!darkMode)}
						checked={darkMode}
						id="dark-switch"
						label="Dark mode"
					/>
				</Nav>
			</Navbar>
			<ModalForm />
		</>
	);
}
