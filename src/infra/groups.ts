import Api from "infra/api/api";

export async function getGroups(token: string) {
	const groups = await Api.get("/groups", "", {
		Authorization: `Bearer ${token}`,
	});
	return groups;
}
