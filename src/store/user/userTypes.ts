export type Wish = {
	id: number;
	name: string;
	url: string;
};

export type Wishlists = {
	id: number;
	Title: string;
	Wishes: Wish[];
};

export type User = {
	jwt: string | null;
	userName: string | null;
	isLogged: boolean;
	wishlists: Wishlists[] | null;
};
