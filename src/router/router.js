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
import { getGroups } from "infra/groups";

export default function App() {
	const { state, dispatch } = useStore();
	const [isLoading, setLoading] = useState(false);

	useEffect(async function () {
		console.log("isLoading", isLoading);
		if (state.groups === null && state.user.jwt) {
			setLoading(true);
			const groups = await getGroups(state.user.jwt);
			if (groups.success) {
				dispatch({ type: "setGroups", payload: groups.response });
				setLoading(false);
			}
		}
	});

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
