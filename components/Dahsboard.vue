<script setup lang="ts">
import { onMounted, ref } from "vue";

import { useStore } from "../stores/store";
const store = useStore();

const hanldeClickModule = (value: string) => {
	store.handleShowModule(value);
};

const getCurrentDateTime = () => {
	const now = new Date();
	return {
		time: now.toLocaleTimeString(),
		day: now.toLocaleDateString("en-US", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		}),
	};
};

const currentDateTime = ref(getCurrentDateTime());

onMounted(() => {
	setInterval(() => {
		currentDateTime.value = getCurrentDateTime();
	}, 1000);
});

const birthdayCelebrants = {
	person1: {
		id: 1,
		name: "Zaria Correa",
		birthday: "Feb 05",
	},
	person2: {
		id: 2,
		name: "Monica Schroeder",
		birthday: "Feb 07",
	},
	person3: {
		id: 3,
		name: "Annie Rangel",
		birthday: "Feb 09",
	},
	person4: {
		id: 4,
		name: "Kai Christian",
		birthday: "Feb 12",
	},
	person5: {
		id: 5,
		name: "Kaisley Kelly",
		birthday: "Feb 22",
	},
	person6: {
		id: 6,
		name: "Tru Austin",
		birthday: "Feb 29",
	},
};
</script>

<template>
	<div>
		<div
			class="grid items-center grid-cols-6 mb-4 rounded xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:col-span-6 sm:grid sm:grid-cols-6 bg-gray-50 dark:bg-gray-800"
		>
			<div class="h-full col-span-2 xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2">
				<div class="pt-5 pb-5 pl-5 xl:p-8 lg:p-8 md:p-7 sm:p-5">
					<h6 class="text-lg font-black xl:text-4xl lg:text-4xl md:text-2xl sm:text-lg">
						Juan Dela Cruz
					</h6>
					<p class="text-sm capitalize xl:text-lg lg:text-lg md:text-lg sm:text-sm">
						software engineer
					</p>

					<button
						@click="() => hanldeClickModule('attendance')"
						class="px-5 py-2 text-white bg-red-600 rounded mt-7"
					>
						Clock In
					</button>
				</div>
			</div>
			<div
				class="h-full col-span-4 rounded-r xl:col-span-2 lg:col-span-2 md:col-span-4 to-trapezoid sm:col-span-4 bg-slate-950"
			>
				<div class="z-50 pt-5 pb-5 pr-5 text-right xl:p-8 lg:p-8 md:p-7 sm:p-5">
					<h6
						class="text-2xl font-extrabold text-white xl:text-6xl lg:text-6xl md:text-4xl sm:text-3xl"
					>
						{{ currentDateTime.time }}
					</h6>
					<p
						class="text-sm font-bold text-white xl:text-xl lg:text-lg md:text-lg sm:text-sm"
					>
						{{ currentDateTime.day }}
					</p>
					<p
						class="mt-5 text-sm text-gray-500 ml-14 xl:text-lg lg:text-lg md:text-lg sm:text-sm"
					>
						Welcome to QX Macro Dashboard
					</p>
				</div>
			</div>
		</div>
		<div
			class="grid grid-cols-1 gap-4 mb-4 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-6 md:grid md:col-span-6 sm:grid sm:col-span-6"
		>
			<div
				class="rounded xl:col-span-3 lg:col-span-4 md:col-span-3 bg-gray-50 dark:bg-gray-800 sm:col-span-3"
			>
				<div class="items-center py-7 px-7">
					<h6 class="font-semibold">Announcement</h6>
				</div>
				<div class="block xl:flex lg:block md:block sm:block">
					<Announcement />
					<Announcement />
					<Announcement />
				</div>
			</div>
			<div
				class="justify-center block rounded xl:col-span-1 lg:col-span-2 md:col-span-3 bg-gray-50 sm:col-span-3 dark:bg-gray-800"
			>
				<div class="flex items-center px-7 py-7">
					<Icon name="material-symbols:cake" color="black" size="24px" class="mr-5" />
					<h6 class="font-semibold">Birthday Celebrants</h6>
				</div>
				<div class="pt-0 pb-5">
					<div
						v-for="celebrants in birthdayCelebrants"
						:key="celebrants.id"
						class="flex items-center py-1.5 px-7"
					>
						<h6
							class="p-2 mr-4 text-xs font-bold text-white capitalize rounded bg-slate-950"
						>
							{{ celebrants.birthday }}
						</h6>
						<p class="text-gray-600 capitalize">{{ celebrants.name }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.to-trapezoid {
	-webkit-clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
	clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
}
</style>
