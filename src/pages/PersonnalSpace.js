import React from "react";
import { useStore } from "../store/index";

export default function Login() {
	const { state, dispatch } = useStore();

	const handleKey = (e) => {
		dispatch({ type: "setName", payload: e.target.value });
	};

	return (
		<div className="personnal-space">
			<h1>Votre espace</h1>
			<input type="text" onKeyUp={handleKey} />
		</div>
	);
}
