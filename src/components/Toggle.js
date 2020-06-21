import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import { Context } from "../Context";

export default function Toggle() {
	const { check, setCheck, darkMode } = useContext(Context);
	return (
		<Form.Check
			style={
				darkMode
					? { backgroundColor: "#424A4D", color: "white", padding: "1rem", paddingLeft: "3rem" }
					: { backgroundColor: "white", padding: "1rem", paddingLeft: "3rem", borderBottom: "1px solid #cfd3d4" }
			}
			type="switch"
			onChange={() => setCheck(!check)}
			checked={check}
			id="custom-switch"
			label="Show only accepted"
		/>
	);
}
