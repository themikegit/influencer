import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import { Context } from "../Context";

export default function Toggle() {
	const { check, setCheck } = useContext(Context);
	return (
		<Form.Check
    style = {{margin: "10px"}}
			onChange={console.log(Form.Check)}
			type="switch"
			onChange={() => setCheck(!check)}
			checked={check}
			id="custom-switch"
			label="Show only accepted"
		/>
	);
}
