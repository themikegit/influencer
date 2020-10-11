import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import { Context } from "../Context";

export default function Login() {
	const { submitLogin, loginval, setloginval } = useContext(Context);

	return (
		<Form onSubmit={(e) => submitLogin(e)}>
			<Form.Group controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control
					onChange={(e) => setloginval({ ...loginval, email: e.target.value })}
					type="email"
					placeholder="Enter email"
				/>
				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control
					onChange={(e) =>
						setloginval({ ...loginval, password: e.target.value })
					}
					type="password"
					placeholder="Password"
				/>
			</Form.Group>
		</Form>
	);
}
