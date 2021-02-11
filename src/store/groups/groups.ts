import { State } from "store/storeTypes";

export const groups = null;

export function setGroups(state: State, payload: any) {
	console.log("payload :", payload);
	state.groups = payload;
	return state;
}
