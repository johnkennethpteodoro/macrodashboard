<script setup>
import { useStore } from "../stores/store";
const store = useStore();
const client = useSupabaseClient();
const email = ref("");
const password = ref("");
const errorMsg = ref(null);
const successMsg = ref(null);

async function signUp() {
	try {
		let { data, error } = await client.auth.signInWithPassword({
			email: email.value,
			password: password.value,
		});
		if (error) {
			throw error;
		}
		successMsg.value = "Sucessfully login";
		setTimeout(() => {
			successMsg.value = null;
		}, 5000);
		store.setAuthenticated(true);
		navigateTo(data ? "/profile" : "/");
	} catch (error) {
		errorMsg.value = error.message;
		setTimeout(() => {
			errorMsg.value = null;
		}, 5000);
	}
}
</script>
<template>
	<div>
		<div
			class="grid h-screen grid-cols-3 gap-4 xl:grid-cols-3 xl:grid lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 sm:grid sm:grid-cols-3"
		>
			<div class="hidden bg-slate-950 xl:block lg:hiden md:hidden sm:hidden"></div>
			<div
				class="flex items-center justify-center col-span-3 px-10 xl:col-span-2 lg:col-span-3 md:col-span-3 sm:col-span-3 xl:px-64 lg:px-72 md:px-40 sm:px-32"
			>
				<div class="w-full py-12 rounded-xl bg-slate-950 px-7">
					<form @submit.prevent="signUp" class="grid gap-4">
						<h6 class="mb-6 text-4xl font-bold text-center text-white">QUICKSRIKE</h6>
						<h6 class="text-center text-white">LOGIN</h6>
						<input
							type="email"
							v-model="email"
							placeholder="Email"
							class="block px-4 py-3 text-white placeholder-white rounded-md bg-slate-400"
						/>
						<input
							type="password"
							v-model="password"
							placeholder="Password"
							class="block px-4 py-3 placeholder-white rounded-md bg-slate-400"
						/>

						<button
							type="submit"
							class="px-5 py-2 mt-5 text-lg text-white rounded-md bg-slate-700"
						>
							Login
						</button>
						<p v-if="errorMsg" class="text-red-700 capitalize">{{ errorMsg }}</p>
						<p v-if="successMsg" class="text-green-700 capitalize">{{ successMsg }}</p>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
