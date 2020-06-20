import React, { useContext } from "react";
import { Context } from "../Context";
import Modal from "react-bootstrap/Modal";
import NewPerson from "./NewPerson";

export default function ModalForm() {
	const { show, handleClose } = useContext(Context);
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<NewPerson />
				</Modal.Body>
			</Modal>
		</>
	);
}
