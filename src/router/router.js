import React, { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Login from "pages/Login";
import PersonnalSpace from "pages/PersonnalSpace";
import { useStore } from "store/index";

export default function App() {
	const { state, dispatch } = useStore();

	function CheckAuthUser({ children }) {
		console.log("state :", state);
		if (state.user.isLogged) {
			return <div className="is-authenticated-user">{children}</div>;
		} else {
			return <Login />;
		}
	}

	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/">
						<CheckAuthUser>
							<PersonnalSpace />
						</CheckAuthUser>
					</Route>
					<Route exact path="/personnal-space">
						<CheckAuthUser>
							<PersonnalSpace />
						</CheckAuthUser>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
