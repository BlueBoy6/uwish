import React, { useState } from "react";
import { loginConnect } from "../logic/login";
import { useStore } from "../store/index";
import { Redirect } from "react-router-dom";

export default function Login() {
	const { state, dispatch } = useStore();

	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	function loginController(e) {
		setLogin(e.target.value);
	}
	function passwordController(e) {
		setPassword(e.target.value);
	}

	const submit = async () => {
		const connection = await loginConnect(login, password);
		dispatch({ type: "setUser", payload: connection.data });
		console.log("connection", connection);
		return <Redirect to="/personnal-space" />;
	};

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
				/>
			</div>
			<button onClick={submit}>Joyeux cadeaux !</button>
			{state.user.jwt ? <Redirect to="/personnal-space" /> : "NOPE"}
		</div>
	);
}
