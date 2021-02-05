import React, { useState } from "react";
import { loginConnect } from "../logic/login";
import { useStore } from "../store/index";
import { Redirect, useHistory } from "react-router-dom";

export default function Login() {
	const { dispatch } = useStore();
	const history = useHistory();
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

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
		console.log("submit");
		try {
			const connection = await loginConnect(login, password);
			dispatch({ type: "login", payload: connection.data });
			history.push("/personnal-space");
			return <Redirect to="/personnal-space" />;
		} catch (err) {
			console.error("identifiant ou mot de passe incorrect", err);
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
		</div>
	);
}
