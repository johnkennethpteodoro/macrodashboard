import { defineStore } from "pinia";

export const useStore = defineStore({
	id: "store",
	state: () => ({
		getId: false,
	}),
	actions: {},
	getters: {},
});
