import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CntProvider } from "./Context";
import Navigation from "./components/Navigation";
import TableList from "./components/TableList";
import ModalForm from "./components/ModalForm";

function App() {
	return (
		<div>
			<CntProvider>
				<Navigation />
				<TableList />
				<ModalForm />
			</CntProvider>
		</div>
	);
}

export default App;
