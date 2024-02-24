import { defineStore } from "pinia";
import { Modules } from "../types/global";

export const useStore = defineStore({
	id: "store",
	state: () => ({
		modules: {
			dashboard: true,
			attendance: false,
			project: false,
			profile: false,
			employees: false,
		} as Modules,
	}),
	actions: {
		handleShowModule(value: string) {
			for (const module in this.modules) {
				this.modules[module as keyof Modules] = module === value;
			}
		},
	},
	getters: {},
});
