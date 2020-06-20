import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { ExclamationCircle, CircleFill, TypeH3 } from "react-bootstrap-icons";
import { Context } from "../Context";
import Toggle from "./Toggle";
export default function TableList() {
	const { DeleteUser, data, archiveUser } = useContext(Context);
	return (
		<>
			<Toggle />
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>
							{" "}
							<ExclamationCircle />{" "}
						</th>
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
					{data.map((t) => (
						<tr>
							<td>
								{" "}
								<CircleFill
									style={
										t.status === "declined"
											? { fill: "red", width: "10px" }
											: t.status === "accepted"
											? { fill: "green", width: "10px" }
											: { fill: "yellow", width: "10px" }
									}
								/>{" "}
							</td>{" "}
							<td>{t.name}</td>{" "}
							<td>
								{" "}
								<a href={t.profileLink} target="_blank">
									{" "}
									go to Link{" "}
								</a>{" "}
							</td>{" "}
							<td>{t.interest}</td>
							<td>{t.folowersNo}</td>
							<td>{t.country}</td>
							<td>{t.dataAdded}</td>
							<td>{t.note}</td>
							<td>
								<Button
									style={{ marginRight: "10px" }}
									variant="outline-info"
									size="sm"
									onClick={() => {
										archiveUser(t.id);
									}}
								>
									Archive
								</Button>
								<Button
									variant="outline-warning"
									size="sm"
									onClick={() => {
										DeleteUser(t.id);
									}}
								>
									Delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
}
