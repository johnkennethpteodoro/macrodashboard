<script setup lang="ts">
import { onMounted, ref } from "vue";

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
	<div class="p-4 sm:ml-64">
		<div class="grid items-center grid-cols-3 mb-4 rounded bg-gray-50 dark:bg-gray-800">
			<div class="h-full">
				<div class="p-8">
					<h6 class="text-4xl font-black">Juan Dela Cruz</h6>
					<p class="capitalize">software engineer</p>

					<button class="px-5 py-2 text-white bg-red-600 rounded mt-7 text-md">
						Clock In
					</button>
				</div>
			</div>
			<div class="h-full col-span-2 rounded-r to-trapezoid bg-slate-950">
				<div class="z-50 p-8 text-right">
					<h6 class="text-6xl font-extrabold text-white">{{ currentDateTime.time }}</h6>
					<p class="text-xl font-bold text-white">{{ currentDateTime.day }}</p>
				</div>
				<p class="text-lg text-gray-500 ml-14">Welcome to QX Macro Dashboard</p>
			</div>
		</div>
		<div class="grid grid-cols-4 gap-4 mb-4">
			<div class="col-span-3 rounded bg-gray-50 dark:bg-gray-800">
				<div class="items-center py-7 px-7">
					<h6 class="font-semibold">Announcement</h6>
				</div>
				<div class="flex">
					<Announcement />
					<Announcement />
					<Announcement />
				</div>
			</div>
			<div class="justify-center rounded bg-gray-50 dark:bg-gray-800">
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
