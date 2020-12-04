import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import PersonnalSpace from "./pages/PersonnalSpace";

export default function App() {
	return (
		<Router>
			<div>
				<div>
					<h2>Menu</h2>
					<Link to="/">Login</Link>
					<Link to="/personnal-space">Espace personnel</Link>
				</div>
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
					<Route exact path="/personnal-space">
						<PersonnalSpace />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
