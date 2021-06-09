import Api from "infra/api/api";

export async function getGroups(token: string) {
	const groups = await Api.get("/groups", "", {
		Authorization: `Bearer ${token}`,
	});
	return groups;
}

type groupFromApi = {
	id: number;
	Name: string;
	created_at: Date;
	updated_at: Date;
};

// type groupFormated = {
// 	id: number;
// 	name: string;
// 	members: userFromApi[];
// 	wishlists: any[];
// };

// type userFromApi = {
// 	id: 1;
// 	userName: string;
// 	email: string;
// 	provider: string;
// 	confirmed: boolean;
// 	blocked: boolean;
// 	role: number;
// 	wishlists: number;
// 	created_at: Date;
// 	updated_at: Date;
// };

export async function getGroupsOfUser(token: string, groups: groupFromApi[]) {
	const idsForApiCall = groups
		.map((group) => (group.id ? `&id=${group.id}` : ""))
		.join("");

	const response = await Api.get(`/groups?${idsForApiCall}`, "", {
		Authorization: `Bearer ${token}`,
	});

	if (response.success) {
		const mapGroups = response.data.map((group: any) => ({
			id: group.id,
			name: group.Name,
			members: group.users,
			wishlists: group.wishlists,
		}));

		return mapGroups;
	} else {
		return response;
	}
}
