import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CntProvider } from "./Context";
import Navigation from "./components/Navigation";
import Archive from "./components/Archive";
import TableList from "./components/TableList";

function App() {
	return (
		<div>
			<CntProvider>
				<Router>
					<Navigation />
					<Route exact path="/archive" component={Archive} />
					<Route exact path="/" component={TableList} />
				</Router>
			</CntProvider>
		</div>
	);
}

export default App;
