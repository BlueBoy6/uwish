import { User } from "store/user/userTypes";
import { Group } from "store/groups/groupsTypes";

export type State = {
	user: User;
	groups: Group[] | null;
};
