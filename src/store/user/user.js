export const userInitialState = {
	user: { jwt: null, name: null, connected: false, groups: null, lists: null },
};

export function setUser(state, action) {
	return { ...state, user: action.payload };
}

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
