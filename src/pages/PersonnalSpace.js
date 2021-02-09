import React, { useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useStore } from "../store/index";
import { api } from "../logic/api/api";

export default function Login() {
	const { state, dispatch } = useStore();
	const history = useHistory();
	const handleKey = (e) => {
		dispatch({ type: "setName", payload: e.target.value });
	};

	const disconnect = async () => {
		dispatch({ type: "logout" });
		history.push("/login");
	};

	useEffect(() => {
		(async function anyNameFunction() {
			const result = await api("get", "/groups");
			console.log(result);
		})();
	}, []);

	return (
		<div className="personnal-space">
			<h1>Votre espace {state.user.userName}</h1>
			<button onClick={disconnect}>Déconnexion 😔</button>
			<input type="text" onKeyUp={handleKey} />
		</div>
	);
}
