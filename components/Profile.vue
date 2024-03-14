<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useStore } from "../stores/store";
import { useFetchUserData } from "../composables/useFetchUserData";
import type { UserData } from "../types/global";

const userDataList = ref<UserData[]>([]);
const store = useStore();

const fetchUserData = async () => {
	store.isLoading = true;
	try {
		const fetchedUserData = await useFetchUserData();
		console.log("💾 UserData: ", fetchedUserData);
		userDataList.value = fetchedUserData;
	} catch (error) {
		console.error("Error fetching user data:", error);
	} finally {
		store.isLoading = false;
	}
};

onMounted(fetchUserData);
</script>

<template>
	<div>
		<Loading v-if="store.isLoading" />
		<div class="grid grid-cols-1 mb-4">
			<div class="rounded shadow-lg bg-gray-50 dark:bg-gray-800 shadow-gray-200">
				<div class="rounded-t h-36 bg-slate-950"></div>
				<div class="flex justify-center">
					<NuxtImg
						src="../public/profile.JPG"
						class="object-contain object-center w-20 h-20 bg-gray-500 rounded-full -mt-14"
					/>
				</div>
				<div
					v-for="userData in userDataList"
					:key="userData.id"
					class="pb-5 mt-4 text-center"
				>
					<h6 class="text-xl font-medium capitalize">{{ userData.name }}</h6>
					<p class="text-sm font-light">QX-092023-272{{ userData.id }}</p>
				</div>
			</div>
		</div>

		<div
			class="grid grid-cols-1 gap-4 mb-4 xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1"
		>
			<div
				v-for="userData in userDataList"
				:key="userData.id"
				class="rounded shadow-lg bg-gray-50 dark:bg-gray-800 py-7 px-7 shadow-gray-200"
			>
				<div class="items-center">
					<h6 class="flex items-center font-semibold">
						<Icon
							name="material-symbols:person-rounded"
							color="black"
							size="24px"
							class="mr-2"
						/>Personal Information
					</h6>
				</div>
				<div class="flex items-center mt-8">
					<p class="mr-2 text-xs font-bold text-gray-400 uppercase">Full Name:</p>
					<h6 class="text-sm capitalize">{{ userData.name }}</h6>
				</div>
				<div class="flex items-center mt-5">
					<p class="mr-2 text-xs font-bold text-gray-400 uppercase">Email:</p>
					<h6 class="text-sm">{{ userData.email }}</h6>
				</div>
				<div class="flex items-center mt-5">
					<p class="mr-2 text-xs font-bold text-gray-400 uppercase">Phone:</p>
					<h6 class="text-sm">{{ userData.phone }}</h6>
				</div>
				<div class="flex items-center mt-5">
					<p class="mr-2 text-xs font-bold text-gray-400 uppercase">Address:</p>
					<h6 class="text-sm capitalize">
						{{ userData.address }}
					</h6>
				</div>
			</div>
			<div
				v-for="userData in userDataList"
				:key="userData.id"
				class="rounded shadow-lg bg-gray-50 dark:bg-gray-800 py-7 px-7 shadow-gray-200"
			>
				<div class="items-center">
					<h6 class="flex items-center font-semibold">
						<Icon
							name="material-symbols:person-rounded"
							color="black"
							size="24px"
							class="mr-2"
						/>
						Other Information
					</h6>
				</div>
				<div class="flex items-center mt-8">
					<p class="mr-2 text-xs font-bold text-gray-400 uppercase">Member Since:</p>
					<h6 class="text-sm">{{ userData.memberSince.slice(0, 10) }}</h6>
				</div>
				<div class="flex items-center mt-5">
					<p class="mr-2 text-xs font-bold text-gray-400 uppercase">Deparment:</p>
					<h6 class="text-sm capitalize">{{ userData.department }}</h6>
				</div>
				<div class="flex items-center mt-5">
					<p class="mr-2 text-xs font-bold text-gray-400 uppercase">Employement Type:</p>
					<h6 class="text-sm capitalize">{{ userData.employmentType }}</h6>
				</div>
				<div class="flex items-center mt-5">
					<p class="mr-2 text-xs font-bold text-gray-400 uppercase">Shift:</p>
					<h6 class="text-sm">{{ userData.shift }}</h6>
				</div>
				<div class="flex items-center mt-5">
					<p class="mr-2 text-xs font-bold text-gray-400 uppercase">Manager:</p>
					<h6 class="text-sm capitalize">{{ userData.manager }}</h6>
				</div>
			</div>
			<div
				v-for="userData in userDataList"
				:key="userData.id"
				class="rounded shadow-lg bg-gray-50 dark:bg-gray-800 py-7 px-7 shadow-gray-200"
			>
				<div class="items-center">
					<h6 class="flex items-center font-semibold">
						<Icon
							name="material-symbols:credit-card"
							color="black"
							size="24px"
							class="mr-2"
						/>Benefits
					</h6>
				</div>
				<div class="flex items-center mt-8">
					<p class="mr-2 text-xs font-bold text-gray-400 uppercase">Pagibig:</p>
					<h6 class="text-sm">{{ userData.pagibig }}</h6>
				</div>
				<div class="flex items-center mt-5">
					<p class="mr-2 text-xs font-bold text-gray-400 uppercase">Philhealth:</p>
					<h6 class="text-sm">{{ userData.philhealth }}</h6>
				</div>
				<div class="flex items-center mt-5">
					<p class="mr-2 text-xs font-bold text-gray-400 uppercase">sss-number:</p>
					<h6 class="text-sm">{{ userData.sssNumber }}</h6>
				</div>
				<div class="flex items-center mt-5">
					<p class="mr-2 text-xs font-bold text-gray-400 uppercase">tin:</p>
					<h6 class="text-sm">{{ userData.tin }}</h6>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
