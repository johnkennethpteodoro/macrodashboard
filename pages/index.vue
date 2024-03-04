<script setup>
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
		navigateTo(data ? "/profile" : "/");
	} catch (error) {
		errorMsg.value = error.message;
	}
}
</script>
<template>
	<div>
		<div class="grid h-screen grid-cols-3 gap-4">
			<div class="bg-blue-50"></div>
			<div class="flex items-center justify-center col-span-2 px-72">
				<div class="w-full py-12 bg-white rounded px-7">
					<form @submit.prevent="signUp" class="grid gap-4">
						<h6 class="mb-6 text-4xl font-bold text-center">QUICKSRIKE</h6>
						<h6 class="font-bold text-center">LOGIN</h6>
						<input
							type="email"
							v-model="email"
							placeholder="Email"
							class="block px-4 py-3 bg-gray-100 rounded-md"
						/>
						<input
							type="password"
							v-model="password"
							placeholder="Password"
							class="block px-4 py-3 bg-gray-100 rounded-md"
						/>

						<button
							type="submit"
							class="px-5 py-2 mt-5 text-lg text-white bg-blue-500 rounded-md"
						>
							Login
						</button>
						<p v-if="errorMsg" class="text-red-600 capitalize">{{ errorMsg }}</p>
						<p v-if="successMsg" class="text-green-700 capitalize">{{ successMsg }}</p>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
