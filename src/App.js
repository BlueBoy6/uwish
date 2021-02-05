import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import PersonnalSpace from "./pages/PersonnalSpace";
import { useStore } from "./store/index";

export default function App() {
	const { state } = useStore();
	const isAuthenticatedUser = () =>
		state.user.jwt !== null && state.user.jwt.length > 10;
	return (
		<Router>
			<div>
				<div>
					<h2>Menu</h2>
				</div>
				<Switch>
					<Route exact path="/">
						{isAuthenticatedUser() ? (
							<Redirect to="/personnal-space" />
						) : (
							<Redirect to="/login" />
						)}
					</Route>
					<Route exact path="/login">
						{isAuthenticatedUser() ? (
							<Redirect to="/personnal-space" />
						) : (
							<Login />
						)}
					</Route>
					<Route exact path="/personnal-space">
						{isAuthenticatedUser() ? (
							<PersonnalSpace />
						) : (
							<Redirect to="/login" />
						)}
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
