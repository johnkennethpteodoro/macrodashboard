<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
const UPDATE_INTERVAL_MS = 1000;

const setOpacity = ref(false);
const isClockedIn = ref(false);
const now = new Date();

const getCurrentDateTimeIn = () => {
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

const getCurrentDateTimeOut = () => {
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

const currentDateTimeOut = ref(getCurrentDateTimeOut());
const currentDateTimeIn = ref(getCurrentDateTimeIn());
let intervalIdTimeIn: any;
let intervalIdTimeOut: any;

onMounted(() => {
	startClockInInterval();
	startClockOutInterval();
});

const startClockInInterval = () => {
	intervalIdTimeIn = setInterval(() => {
		currentDateTimeIn.value = getCurrentDateTimeIn();
	}, UPDATE_INTERVAL_MS);
};

const startClockOutInterval = () => {
	intervalIdTimeOut = setInterval(() => {
		currentDateTimeOut.value = getCurrentDateTimeOut();
	}, UPDATE_INTERVAL_MS);
};

const handleClockIn = () => {
	setOpacity.value = true;
	isClockedIn.value = true;
};

const handleClockOut = () => {
	setOpacity.value = false;
	isClockedIn.value = false;
};

watch(isClockedIn, (newValue, oldValue) => {
	if (newValue) {
		clearInterval(intervalIdTimeIn);
		startClockOutInterval();
	} else if (oldValue) {
		clearInterval(intervalIdTimeOut);
		startClockInInterval();
	}
});

const attendanceLogs = {
	attendance1: {
		id: 1,
		date: now.toLocaleTimeString(),
		timeIn: now.toLocaleTimeString(),
		timeOut: now.toLocaleTimeString(),
		timeRendered: now.toLocaleTimeString(),
	},
	attendance2: {
		id: 2,
		date: now.toLocaleTimeString(),
		timeIn: now.toLocaleTimeString(),
		timeOut: now.toLocaleTimeString(),
		timeRendered: now.toLocaleTimeString(),
	},
	attendance3: {
		id: 3,
		date: now.toLocaleTimeString(),
		timeIn: now.toLocaleTimeString(),
		timeOut: now.toLocaleTimeString(),
		timeRendered: now.toLocaleTimeString(),
	},
};
</script>

<template>
	<div class="p-4 sm:ml-64">
		<div class="grid grid-cols-3 gap-4 mb-4">
			<div
				class="items-center justify-center col-span-2 rounded bg-gray-50 dark:bg-gray-800 p-7"
			>
				<div class="flex justify-between w-full">
					<div class="items-center">
						<h6 class="text-xl font-extrabold">{{ currentDateTimeIn.time }}</h6>
						<p class="-mt-1 text-sm leading-7">{{ currentDateTimeIn.day }}</p>
					</div>
					<button class="h-10 px-4 text-sm text-white rounded bg-slate-950">
						Leave request
					</button>
				</div>
				<div class="flex w-full gap-5 mt-7">
					<div
						class="w-full py-16 text-center text-white rounded bg-slate-950"
						:class="{ 'opacity-20': setOpacity }"
					>
						<div class="flex justify-center mb-5">
							<Icon
								name="material-symbols:alarm-on"
								color="white"
								size="24px"
								class="mr-2"
							/>
							<h6 class="text-xl font-extrabold">TIME IN</h6>
						</div>
						<h6 class="text-4xl">{{ currentDateTimeIn.time }}</h6>
						<p class="text-lg font-thin">{{ currentDateTimeIn.day }}</p>
						<button
							@click="handleClockIn"
							class="px-12 py-2 mt-24 text-lg text-white bg-red-600 rounded"
							:disabled="setOpacity"
						>
							Clock In
						</button>
					</div>
					<div
						class="w-full py-16 text-center text-black border border-black rounded bg-whte"
						:class="{ 'opacity-20': !setOpacity }"
					>
						<div class="flex justify-center mb-5">
							<Icon
								name="material-symbols:alarm-on"
								color="black"
								size="24px"
								class="mr-2"
							/>
							<h6 class="text-xl font-extrabold">TIME OUT</h6>
						</div>
						<h6 class="text-4xl">{{ currentDateTimeOut.time }}</h6>
						<p class="text-lg font-thin">{{ currentDateTimeOut.day }}</p>
						<button
							@click="handleClockOut"
							class="px-12 py-2 mt-24 text-lg text-white bg-red-600 rounded"
							:disabled="!isClockedIn"
						>
							Clock Out
						</button>
					</div>
				</div>
			</div>
			<div>
				<div class="flex items-center justify-between px-4 py-4">
					<h6 class="font-semibold">Recent Leaves</h6>
					<button class="px-4 py-2 text-sm text-white rounded bg-slate-950">
						Sort By
						<Icon
							name="solar:alt-arrow-down-line-duotone"
							color="white"
							size="16px"
							class="ml-2"
						/>
					</button>
				</div>
				<div class="mb-4 rounded bg-gray-50 dark:bg-gray-800 py-7">
					<div class="flex items-center justify-between mb-3 px-7">
						<div>
							<h6 class="text-lg">Going for a trip</h6>
							<p class="text-xs text-gray-500">Vacation Leave</p>
						</div>
						<h6 class="px-3 py-1 text-sm text-white bg-green-700 rounded">Pending</h6>
					</div>
					<div class="flex items-center px-7">
						<Icon
							name="material-symbols:calendar-clock"
							color="black"
							size="24px"
							class="mr-2"
						/>
						<p class="text-xs">{{ currentDateTimeIn.day }}</p>
					</div>
				</div>
				<div class="mb-4 rounded bg-gray-50 dark:bg-gray-800 py-7">
					<div class="flex items-center justify-between mb-3 px-7">
						<div>
							<h6 class="text-lg">Going for a trip</h6>
							<p class="text-xs text-gray-500">Vacation Leave</p>
						</div>
						<h6 class="px-3 py-1 text-sm text-white bg-green-700 rounded">Pending</h6>
					</div>
					<div class="flex items-center px-7">
						<Icon
							name="material-symbols:calendar-clock"
							color="black"
							size="24px"
							class="mr-2"
						/>
						<p class="text-xs">{{ currentDateTimeIn.day }}</p>
					</div>
				</div>
				<div class="mb-4 rounded bg-gray-50 dark:bg-gray-800 py-7">
					<div class="flex items-center justify-between mb-3 px-7">
						<div>
							<h6 class="text-lg">Going for a trip</h6>
							<p class="text-xs text-gray-500">Vacation Leave</p>
						</div>
						<h6 class="px-3 py-1 text-sm text-white bg-green-700 rounded">Pending</h6>
					</div>
					<div class="flex items-center px-7">
						<Icon
							name="material-symbols:calendar-clock"
							color="black"
							size="24px"
							class="mr-2"
						/>
						<p class="text-xs">{{ currentDateTimeIn.day }}</p>
					</div>
				</div>
			</div>
		</div>

		<div class="relative mb-4 overflow-x-auto bg-white rounded sm:rounded-lg dark:bg-gray-800">
			<div class="flex items-center justify-between py-7 px-7">
				<h6 class="font-semibold">Attendance Logs</h6>
				<div class="flex items-center">
					<h6 class="mr-5 font-semibold">Month</h6>
					<button class="h-10 px-4 text-sm text-white rounded bg-slate-950">
						February
						<Icon
							name="solar:alt-arrow-down-line-duotone"
							color="white"
							size="16px"
							class="ml-2"
						/>
					</button>
				</div>
			</div>
			<table class="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
				<thead
					class="text-xs text-gray-700 bg-slate-50 dark:bg-gray-700 dark:text-gray-400"
				>
					<tr>
						<th scope="col" class="px-6 py-3">Date</th>
						<th scope="col" class="px-6 py-3">
							<div class="flex items-center">Time In</div>
						</th>
						<th scope="col" class="px-6 py-3">
							<div class="flex items-center">Time Out</div>
						</th>
						<th scope="col" class="px-6 py-3">
							<div class="flex items-center">Time Rendered</div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="attendance in attendanceLogs"
						:key="attendance.id"
						class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
					>
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{{ attendance.date }}
						</th>
						<td class="px-6 py-4">{{ attendance.date }}</td>
						<td class="px-6 py-4">{{ attendance.date }}</td>
						<td class="px-6 py-4">{{ attendance.date }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<style scoped></style>
