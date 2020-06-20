import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { Context } from "../Context";
export default function Archive() {
	const { archUser } = useContext(Context);
	console.log("archUser", archUser);
	return (
		<>
			<Table striped bordered hover variant="light">
				<thead>
					<tr>
						<th>Name</th>
						<th>Profile Link</th>
						<th>Interest</th>
						<th>Folowers NO</th>
						<th>Country</th>
						<th>Data Added</th>
						<th>Note</th>
					</tr>
				</thead>
				<tbody>
					{archUser.map((t) => (
						<tr>
							<td>{t.name}</td> <td>{t.profileLink}</td> <td>{t.interest}</td>
							<td>{t.folowersNo}</td>
							<td>{t.country}</td>
							<td>{t.dataAdded}</td>
							<td>{t.note}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
}
