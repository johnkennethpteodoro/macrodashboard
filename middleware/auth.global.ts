import { useStore } from "../stores/store";
export default defineNuxtRouteMiddleware((to, from) => {
	const store = useStore();
	const isLoggedIn = store.isLoggedIn;

	// if (isLoggedIn && to.path === "/") {
	// 	return navigateTo("/profile");
	// }

	// if (!isLoggedIn && to.path !== "/") {
	// 	return navigateTo("/");
	// }
});
