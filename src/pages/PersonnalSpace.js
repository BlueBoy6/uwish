import React, { useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useStore } from "store/index";
import { api } from "infra/api/api";
import { groups } from "store/groups/groups";

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

	return (
		<div className="personnal-space">
			<h1>Votre espace {state.user.userName}</h1>
			<button onClick={disconnect}>Déconnexion 😔</button>
			{state.groups?.length > 0 ? (
				state.groups.map((group, id) => (
					<div className="family-card" key={id}>
						{group.Name}
					</div>
				))
			) : (
				<div>{`Vous n'êtes dans aucun groupe, créez-en un !`}</div>
			)}
			<div></div>
		</div>
	);
}
