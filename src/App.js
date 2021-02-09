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

	function CheckAuthUser({ children }) {
		if (state.user.jwt !== null && state.user.jwt.length > 110) {
			return <div className="is-authenticated-user">{children}</div>;
		} else {
			return <Login />;
		}
	}

	return (
		<Router>
			<div>
				<div>
					<h2>Menu</h2>
				</div>
				<Switch>
					<Route exact path="/">
						<CheckAuthUser>
							<PersonnalSpace />
						</CheckAuthUser>
					</Route>
					<Route exact path="/login">
						<CheckAuthUser>
							<Login />
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
