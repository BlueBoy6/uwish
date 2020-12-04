import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import PersonnalSpace from "./pages/PersonnalSpace";
import { useStore } from "./store/index";

export default function App() {
	const { state } = useStore();
	return (
		<Router>
			<div>
				<div>
					<h2>Menu</h2>
				</div>
				<Switch>
					<Route exact path="/">
						{!!state.user.jwt ? (
							<Redirect to="/personnal-space" />
						) : (
							<Redirect to="/login" />
						)}
					</Route>
					<Route exact path="/login">
						{!!state.user.jwt ? <Redirect to="/personnal-space" /> : <Login />}
					</Route>
					<Route exact path="/personnal-space">
						{!!state.user.jwt ? <PersonnalSpace /> : <Redirect to="/login" />}
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
