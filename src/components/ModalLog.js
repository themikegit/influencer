import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { Context } from "../Context";
import "firebase/auth";
import Modal from "react-bootstrap/Modal";
import Login from "./Login";

export default function ModalLog() {
	const { showmod, handleClosemod, submitLogin } = useContext(Context);
	return (
		<Modal show={showmod}>
			<Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Login />
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={() => handleClosemod()}>
					Close
				</Button>
				<Button variant="primary" onClick={() => submitLogin()}>
					Login
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
