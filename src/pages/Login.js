import React, { useState, useEffect } from "react";

import { useStore } from "store/index";
import { Redirect, useHistory } from "react-router-dom";

export default function Login() {
	const { state, dispatch } = useStore();
	const history = useHistory();

	const [identifier, setIdentifier] = useState("");
	const [password, setPassword] = useState("");
	const [messageLogin, setMessageLogin] = useState("");
	const [isLogged, setLogged] = useState(false);

	function loginController(e) {
		setIdentifier(e.target.value);
	}
	function passwordController(e) {
		setPassword(e.target.value);
	}
	function keyController(e) {
		if (e.key === "Enter") submit();
	}

	function redirectToPersonnalSpace() {
		console.log(state);
		history.push("/personnal-space");
	}

	function submit() {
		dispatch({
			type: "login",
			payload: {
				identifier,
				password,
				redirectToPersonnalSpace,
			},
		});
	}

	return (
		<div className="login-page">
			<h2>Connectez-vous</h2>
			<div className="login-input">
				<input
					type="text"
					placeholder="login"
					value={identifier}
					onChange={loginController}
				/>
			</div>
			<div className="password-input">
				<input
					type="password"
					placeholder="password"
					value={password}
					onChange={passwordController}
					onKeyUp={keyController}
				/>
			</div>
			<button onClick={submit}>Joyeux cadeaux !</button>
			{messageLogin ? messageLogin : ""}
		</div>
	);
}
