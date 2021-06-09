import { State } from "store/storeTypes";

export const groups = null;

export function setGroups(state: State, payload: any) {
	state.groups = payload;
	return state;
}
