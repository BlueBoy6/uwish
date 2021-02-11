export function translatorApiMessages(apiCode: string) {
	switch (apiCode) {
		case "Auth.form.error.invalid":
			return "Mot de passe incorrect veuillez réessayer.";
		default:
			"Une erreur inconnue provenant de l'api est arrivé.";
	}
}
