import React, { useState } from "react";
import { loginConnect } from "infra/login";
import { useStore } from "store/index";
import { Redirect, useHistory } from "react-router-dom";

export default function Login() {
	const { dispatch } = useStore();
	const history = useHistory();

	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [messageLogin, setMessageLogin] = useState("");

	function loginController(e) {
		setLogin(e.target.value);
	}
	function passwordController(e) {
		setPassword(e.target.value);
	}
	function keyController(e) {
		if (e.key === "Enter") submit();
	}

	async function submit() {
		const connection = await loginConnect(login, password);
		if (connection.success) {
			dispatch({ type: "login", payload: connection.response });
			dispatch({ type: "setGroups", payload: connection.response.user.groups });
			history.push("/personnal-space");
		} else {
			setMessageLogin(connection.message);
		}
	}

	return (
		<div className="login-page">
			<h1>Uwish</h1>
			<h2>Connectez-vous</h2>
			<div className="login-input">
				<input
					type="text"
					placeholder="login"
					value={login}
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
