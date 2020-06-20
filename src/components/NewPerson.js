import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import { Context } from "../Context";
import firebase from "../firebase";

export default function NewPerson() {
	const { handleClose } = useContext(Context);

	return (
		<div>
			<Formik
				initialValues={{
					name: "",
					profileLink: "",
					interest: "",
					folowersNo: "",
					country: "",
					dataAdded: "",
					status: "",
					note: "",
				}}
				onSubmit={(data) => {
					firebase
						.firestore()
						.collection("potentialColab")
						.add({
							...data,
						});
					handleClose();
				}}
			>
				{({ values, handleChange, handleSubmit }) => (
					<Form onSubmit={handleSubmit}>
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							name="name"
							value={values.name}
							onChange={handleChange}
							type="text"
						/>
						<Form.Label>Profile link</Form.Label>
						<Form.Control
							name="profileLink"
							value={values.profileLink}
							onChange={handleChange}
							type="text"
						/>
						<Form.Label>Interest</Form.Label>
						<Form.Control
							name="interest"
							value={values.interest}
							onChange={handleChange}
							type="text"
						/>
						<Form.Label>Folowers NO</Form.Label>
						<Form.Control
							name="folowersNo"
							value={values.folowersNo}
							onChange={handleChange}
							type="text"
						/>
						<Form.Label>Country</Form.Label>
						<Form.Control
							as="select"
							name="country"
							value={values.country}
							onChange={handleChange}
							type="text"
						>
							<option>NL</option>
							<option>BEL</option>
							<option>LUX</option>
							<option>POL</option>
						</Form.Control>
						<Form.Label>Data added</Form.Label>
						<Form.Control
							name="dataAdded"
							value={values.dataAdded}
							onChange={handleChange}
							type="text"
						/>
						<Form.Label>Note</Form.Label>
						<Form.Control
							name="note"
							value={values.note}
							onChange={handleChange}
							type="text"
						/>
						<Form.Label>Status</Form.Label>
						<Form.Control
							as="select"
							name="status"
							value={values.status}
							onChange={handleChange}
							type="text"
						>
							<option>waiting</option>
							<option>declined</option>
							<option>accepted</option>
						</Form.Control>
						<Button type="submit">sub</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
}
