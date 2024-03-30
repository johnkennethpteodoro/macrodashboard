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
		searchProject: "",
		searchEmployee: "",
		isLoading: false,
		isAuthenticated: false,
		isShowSidebar: true,
		projectStatus: "All",
	}),
	actions: {
		handleShowModule(value: string) {
			for (const module in this.modules) {
				this.modules[module as keyof Modules] = module === value;
			}
		},
		setAuthenticated(status: boolean) {
			this.isAuthenticated = status;
		},
		handleFilterProject(value: string) {
			console.log("🚀 ~ handleFilterProject ~ value:", value);
			this.projectStatus = value;
		},
	},
	getters: {
		isLoggedIn(): boolean {
			return this.isAuthenticated;
		},
		getProjectStatus(): string {
			return this.projectStatus;
		},
	},
});
