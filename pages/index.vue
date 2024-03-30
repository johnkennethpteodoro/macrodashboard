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
	<div class="flex items-center justify-center h-screen">
		<div class="w-96">
			<div class="py-12 shadow-md rounded-xl bg-card6 px-7 shadow-slate-700">
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
						class="px-5 py-2 text-lg text-white rounded-md mt-9 bg-slate-900"
					>
						Login
					</button>
					<p v-if="errorMsg" class="text-red-700 capitalize">{{ errorMsg }}</p>
					<p v-if="successMsg" class="text-green-700 capitalize">{{ successMsg }}</p>
				</form>
			</div>
		</div>
	</div>
</template>

<style scoped>
.bg-card6 {
	background-image: url("../public/bgCard6.svg");
}

.bg-card {
	background-color: #334155;
}
</style>
