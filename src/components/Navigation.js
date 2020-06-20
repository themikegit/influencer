import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Context } from "../Context";
import { Plus, Archive } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import ModalForm from "./ModalForm";

export default function Navigation() {
	const { handleShow, archUser } = useContext(Context);
	return (
		<>
			<Navbar bg="primary" variant="dark">
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
				</Nav>
			</Navbar>
			<ModalForm />
		</>
	);
}
