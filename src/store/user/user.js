export const userInitialState = {
	user: { name: null, connected: false, groups: null, lists: null },
};

export function setName(state, action) {
	return {
		...state,
		user: {
			...state.user,
			name: action.payload,
		},
	};
}

export function setUserGroups(state, action) {
	return {
		...state,
		groups: action.payload,
	};
}
