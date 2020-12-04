import React from "react";
export default function Login() {
	return (
		<div className="login-page">
			<h1>Uwish</h1>
			<h2>Connectez-vous</h2>
			<div className="login-input">
				<input type="text" placeholder="login" />
			</div>
			<div className="password-input">
				<input type="password" placeholder="password" />
			</div>
			<button type="submit">Joyeux cadeaux !</button>
		</div>
	);
}
