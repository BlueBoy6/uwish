export type Groups = {
	id: Number;
	Name: String;
};

export type Wish = {
	id: Number;
	name: String;
	url: String;
};

export type Wishlists = {
	id: Number;
	Title: String;
	Wishes: Wish[];
};

export type User = {
	jwt: String | null;
	userName: String | null;
	groups: Groups[] | null;
	wishlists: Wishlists[] | null;
};