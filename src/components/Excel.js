import React, { useContext } from "react";
import { Context } from "../Context";
import ReactExport from "react-export-excel";

export default function Excel() {
	const { data } = useContext(Context);
	const ExcelFile = ReactExport.ExcelFile;
	const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
	const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

	const dataSet1 = data;

	return (
		<ExcelFile>
			<ExcelSheet data={dataSet1} name="Employees">
				<ExcelColumn label="Name" value="name" />
				<ExcelColumn label="Profile Link" value="profileLink" />
				<ExcelColumn label="Interest" value="interest" />
				<ExcelColumn label="Followers Number" value="folowersNo" />
				<ExcelColumn label="Country" value="country" />
				<ExcelColumn label="Data added" value="dataAdded" />
				<ExcelColumn label="Note" value="note" />
				<ExcelColumn label="Status" value="status" />
				{/* <ExcelColumn
					label="Marital Status"
					value={(col) => (col.is_married ? "Married" : "Single")}
				/> */}
			</ExcelSheet>
		</ExcelFile>
	);
}
