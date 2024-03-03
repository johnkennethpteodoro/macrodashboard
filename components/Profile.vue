<script lang="ts" setup>
import { onMounted, ref } from "vue";
import type { MyInformation } from "../types/global";
import { useStore } from "../stores/store";

const store = useStore();
const supabase = useSupabaseClient();

const myInformation = ref<MyInformation[]>([]);

const fetchUserData = async () => {
	store.isLoading = true;

	try {
		const { data: user, error } = await supabase.from("user").select("*");

		if (user) {
			console.log("Supabase connected successfully!");
			myInformation.value = user;
		} else {
			console.error("Supabase query error:", error);
		}
	} catch (error) {
		console.error("Supabase connection error:", error);
	} finally {
		setTimeout(() => {
			store.isLoading = false;
		}, 1000);
	}
};

onMounted(async () => {
	await fetchUserData();
});
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
				<div v-for="mySelf in myInformation" :key="mySelf.id" class="pb-5 mt-4 text-center">
					<h6 class="text-xl font-medium capitalize">{{ mySelf.name }}</h6>
					<p class="text-sm font-light">QX-092023-272{{ mySelf.id }}</p>
				</div>
			</div>
		</div>

		<div
			class="grid grid-cols-1 gap-4 mb-4 xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1"
		>
			<div
				v-for="mySelf in myInformation"
				:key="mySelf.id"
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
					<p class="mr-2 text-xs text-gray-500 uppercase">Full Name:</p>
					<h6 class="text-sm">{{ mySelf.name }}</h6>
				</div>
				<div class="flex items-center mt-5">
					<p class="mr-2 text-xs text-gray-500 uppercase">Email:</p>
					<h6 class="text-sm">{{ mySelf.email }}</h6>
				</div>
				<div class="flex items-center mt-5">
					<p class="mr-2 text-xs text-gray-500 uppercase">Phone:</p>
					<h6 class="text-sm">{{ mySelf.phone }}</h6>
				</div>
				<div class="flex items-center mt-5">
					<p class="mr-2 text-xs text-gray-500 uppercase">Address:</p>
					<h6 class="text-sm">
						{{ mySelf.address }}
					</h6>
				</div>
			</div>
			<div
				v-for="mySelf in myInformation"
				:key="mySelf.id"
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
					<p class="mr-2 text-xs text-gray-500 uppercase">Member Since:</p>
					<h6 class="text-sm">{{ mySelf.memberSince }}</h6>
				</div>
				<div class="flex items-center mt-5">
					<p class="mr-2 text-xs text-gray-500 uppercase">Deparment:</p>
					<h6 class="text-sm">{{ mySelf.department }}</h6>
				</div>
				<div class="flex items-center mt-5">
					<p class="mr-2 text-xs text-gray-500 uppercase">Employement Type:</p>
					<h6 class="text-sm">{{ mySelf.employmentType }}</h6>
				</div>
				<div class="flex items-center mt-5">
					<p class="mr-2 text-xs text-gray-500 uppercase">Shift:</p>
					<h6 class="text-sm">{{ mySelf.shift }}</h6>
				</div>
				<div class="flex items-center mt-5">
					<p class="mr-2 text-xs text-gray-500 uppercase">Manager:</p>
					<h6 class="text-sm">{{ mySelf.manager }}</h6>
				</div>
			</div>
			<div
				v-for="mySelf in myInformation"
				:key="mySelf.id"
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
					<p class="mr-2 text-xs text-gray-500 uppercase">Pagibig:</p>
					<h6 class="text-sm">{{ mySelf.pagibig }}</h6>
				</div>
				<div class="flex items-center mt-5">
					<p class="mr-2 text-xs text-gray-500 uppercase">Philhealth:</p>
					<h6 class="text-sm">{{ mySelf.philhealth }}</h6>
				</div>
				<div class="flex items-center mt-5">
					<p class="mr-2 text-xs text-gray-500 uppercase">sss-number:</p>
					<h6 class="text-sm">{{ mySelf.sssNumber }}</h6>
				</div>
				<div class="flex items-center mt-5">
					<p class="mr-2 text-xs text-gray-500 uppercase">tin:</p>
					<h6 class="text-sm">{{ mySelf.tin }}</h6>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
