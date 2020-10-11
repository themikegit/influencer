import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Route } from "react-router-dom";
import history from "./history";
import { CntProvider } from "./Context";
import Navigation from "./components/Navigation";
import Archive from "./components/Archive";
import TableList from "./components/TableList";
import Login from "./components/Login";
import Excel from "./components/Excel";

function App() {
	return (
		<div>
			<CntProvider>
				<Router history={history}>
					<Navigation />
					<Route exact path="/login" component={Login} />
					<Route exact path="/archive" component={Archive} />
					<Route exact path="/" component={TableList} />
					<Excel />
				</Router>
			</CntProvider>
		</div>
	);
}

export default App;
