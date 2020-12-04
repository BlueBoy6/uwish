import React, { useEffect } from "react";
import { useStore } from "../store/index";
import { api } from "../logic/api/api";

export default function Login() {
	const { state, dispatch } = useStore();

	const handleKey = (e) => {
		dispatch({ type: "setName", payload: e.target.value });
	};

	// api("get", "/groups").then(()=>);

	useEffect(() => {
		(async function anyNameFunction() {
			const result = await api("get", "/groups");
			console.log(result);
		})();
	}, []);

	return (
		<div className="personnal-space">
			<h1>Votre espace {state.user.name}</h1>
			<input type="text" onKeyUp={handleKey} />
		</div>
	);
}
