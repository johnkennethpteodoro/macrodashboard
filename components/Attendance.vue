<script lang="ts" setup>
import { onMounted, ref, computed } from "vue";
import { useStore } from "../stores/store";
const store = useStore();

const now = new Date();
const isClockIn = ref(false);
const getTimeClockIn = ref("");
const getTimeClockOut = ref("");
const isOpenClockIn = ref(false);
const isOpenClockOut = ref(false);
const isOpenClockoutMsg = ref(false);

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

const handleClockIn = () => {
	store.isLoading = true;
	isClockIn.value = true;
	const { time } = currentDateTime.value;
	getTimeClockIn.value = time;
	console.log("🚀 ~ handleClockIn ~ getTimeClockIn.value:", getTimeClockIn.value);
	isOpenClockOut.value = false;

	setTimeout(() => {
		store.isLoading = false;
	}, 2000);
};

const handleClockOut = () => {
	store.isLoading = true;
	isClockIn.value = false;
	isOpenClockoutMsg.value = true;
	const { time } = currentDateTime.value;
	getTimeClockOut.value = time;
	console.log("🚀 ~ handleClockOut ~ getTimeClockOut.value:", getTimeClockOut.value);
	isOpenClockIn.value = false;
	setTimeout(() => {
		store.isLoading = false;
	}, 2000);
};

const totalRenderHours = computed(() => {
	const clockOut = getTimeClockOut.value;
	const clockIn = getTimeClockIn.value;

	const timeInTimestamp = new Date(`01/01/2000 ${clockIn}`).getTime();
	const timeOutTimestamp = new Date(`01/01/2000 ${clockOut}`).getTime();

	const timeDifference = timeOutTimestamp - timeInTimestamp;

	const totalHours = Math.floor(timeDifference / (1000 * 60 * 60));
	const totalMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
	const totalSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

	const formattedTime = `${totalHours}:${totalMinutes}:${totalSeconds}`;

	return formattedTime;
});

onMounted(() => {
	setInterval(() => {
		currentDateTime.value = getCurrentDateTime();
	}, 1000);
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
	<div>
		<Loading v-if="store.isLoading" />
		<div class="gap-4 xl:grid xl:grid-cols-6">
			<div
				v-if="!isClockIn"
				class="relative mb-4 overflow-x-auto shadow-lg rounded-2xl p-7 bg-gray-50 shadow-slate-300 sm:rounded-2xl dark:bg-gray-800 xl:col-span-4"
			>
				<div class="text-center">
					<div v-if="isOpenClockoutMsg" class="flex justify-between mb-2 text-sm">
						<h6 class="font-semibold text-gray-400">Rendered Hours</h6>
						<p class="text-green-800">{{ totalRenderHours }}</p>
					</div>
					<div v-if="isOpenClockoutMsg" class="grid grid-cols-2 gap-4 mb-16">
						<div class="p-4 border border-slate-200 rounded-xl bg-slate-50">
							<p
								class="mb-1 text-sm font-semibold text-center opacity-50 xl:text-left lg:tex-left md:text-left sm:text-center text-slate-800"
							>
								<Icon
									name="material-symbols:alarm-on"
									color="black"
									size="22px"
									class="mr-1 opacity-60"
								/>Clock-in
							</p>
							<h6
								class="text-xl font-light text-center xl:text-left lg:tex-left md:text-left sm:text-center"
							>
								{{ getTimeClockIn }}
							</h6>

							<div class="items-center justify-between mt-4 xl:flex">
								<p
									class="px-3 py-1 text-sm rounded-full bg-slate-200 text-slate-700"
								>
									Interscope
								</p>
								<p
									class="mt-2 text-xs font-normal text-gray-400 xl:text-sm lg:text-sm md:text-sm sm:text-xs sm:mt-2"
								>
									Start work at {{ getTimeClockIn }}
								</p>
							</div>
						</div>
						<div class="p-4 border border-red-200 rounded-xl bg-red-50">
							<p
								class="mb-1 text-sm font-semibold text-center text-red-700 opacity-50 xl:text-left lg:tex-left md:text-left sm:text-center"
							>
								<Icon
									name="material-symbols:timer-off-rounded"
									color="red"
									size="22px"
									class="mr-1 opacity-60"
								/>Clock-out
							</p>
							<h6
								class="mb-5 text-xl font-light text-center xl:text-left lg:tex-left md:text-left sm:text-center"
							>
								{{ getTimeClockOut }}
							</h6>

							<p
								class="text-xs font-normal text-gray-400 xl:text-right xl:text-sm lg:text-sm md:text-sm sm:text-xs"
							>
								Out work at {{ getTimeClockOut }}
							</p>
						</div>
					</div>
					<div v-else>
						<div class="mb-5">
							<h6 class="text-xl font-semibold capitalize text-slate-950">
								Good day, john Kenneth
							</h6>
							<p class="mt-2 text-sm">Tap the button bellow to clock in</p>
						</div>

						<div class="mb-16">
							<Icon
								name="material-symbols:keyboard-double-arrow-down-rounded"
								color="black"
								size="50px"
								class="opacity-35"
							/>
						</div>
					</div>

					<button
						@click="isOpenClockIn = true"
						label="Open"
						data-modal-target="popup-modal"
						data-modal-toggle="popup-modal"
						class="w-40 h-40 text-xl font-black text-white uppercase border border-white rounded-full shadow-2xl bg-slate-950 shadow-gray-500"
					>
						clock in
					</button>

					<UModal v-model="isOpenClockIn" prevent-close>
						<UCard
							:ui="{
								ring: '',
								divide: 'divide-y divide-gray-100 dark:divide-gray-800',
							}"
						>
							<div class="text-center">
								<Icon name="material-symbols:warning" color="red" size="50px" />
							</div>
							<div class="my-5 text-center">
								<p class="text-lg">Would you like to conitinue with clock in?</p>
							</div>
							<div class="mt-3 text-center">
								<div class="flex justify-center">
									<button
										class="w-20 px-4 py-2 mr-2 text-sm text-white bg-green-500 rounded-md"
										@click="handleClockIn"
									>
										Yes
									</button>
									<button
										class="w-20 px-4 py-2 text-sm text-white bg-red-500 rounded-md"
										@click="isOpenClockIn = false"
									>
										Cancel
									</button>
								</div>
							</div>
						</UCard>
					</UModal>

					<div class="mt-5">
						<h6 class="text-xl font-semibold">{{ currentDateTime.time }}</h6>
						<p class="text-sm">{{ currentDateTime.day }}</p>
					</div>
				</div>
			</div>
			<div
				v-if="isClockIn"
				class="relative mb-4 overflow-x-auto shadow-lg rounded-2xl p-7 bg-gray-50 shadow-slate-300 sm:rounded-2xl dark:bg-gray-800 xl:col-span-4"
			>
				<div>
					<div class="flex justify-between text-sm">
						<h6 class="font-semibold text-gray-400">Collected Hours</h6>
						<p class="text-green-800">0:00</p>
					</div>
					<div class="grid grid-cols-2 gap-4 mt-3">
						<div class="p-4 border border-slate-200 rounded-2xl bg-slate-50">
							<p
								class="mb-1 text-sm font-semibold text-center opacity-50 xl:text-left lg:tex-left md:text-left sm:text-center text-slate-800"
							>
								<Icon
									name="material-symbols:alarm-on"
									color="black"
									size="22px"
									class="mr-1 opacity-60"
								/>Clock-in
							</p>
							<h6
								class="text-xl font-light text-center xl:text-left lg:tex-left md:text-left sm:text-center"
							>
								{{ getTimeClockIn }}
							</h6>
							<div class="items-center justify-between mt-4 xl:flex">
								<p
									class="flex justify-center px-3 py-1 text-sm rounded-full bg-slate-200 text-slate-700"
								>
									Interscope
								</p>
								<p
									class="mt-2 text-xs font-normal text-gray-400 xl:text-sm lg:text-sm md:text-sm sm:text-xs sm:mt-2"
								>
									Start work at {{ getTimeClockIn }}
								</p>
							</div>
						</div>
						<div class="p-4 border border-red-200 rounded-2xl bg-red-50">
							<p
								class="mb-1 text-sm font-semibold text-center text-red-700 opacity-50 xl:text-left lg:tex-left md:text-left sm:text-center"
							>
								<Icon
									name="material-symbols:timer-off-rounded"
									color="red"
									size="22px"
									class="mr-1 opacity-60"
								/>Clock-out
							</p>
							<p
								class="text-sm text-center xl:text-left lg:text-left md:text-left sm:text-center"
							>
								Do not forget to clock out before 5:00 PM
							</p>
							<p
								class="mt-8 text-xs text-center text-gray-400 xl:text-right xl:text-sm"
							>
								End work at 5:00 PM
							</p>
						</div>
					</div>
				</div>
				<div class="mt-12 text-center">
					<button
						@click="isOpenClockOut = true"
						label="Open"
						data-modal-target="popup-modal"
						data-modal-toggle="popup-modal"
						class="w-40 h-40 text-xl font-black text-white uppercase bg-red-600 border border-white rounded-full shadow-2xl shadow-gray-500"
					>
						clock out
					</button>

					<UModal v-model="isOpenClockOut" prevent-close>
						<UCard
							:ui="{
								ring: '',
								divide: 'divide-y divide-gray-100 dark:divide-gray-800',
							}"
						>
							<div class="text-center">
								<Icon name="material-symbols:warning" color="red" size="50px" />
							</div>
							<div class="my-5 text-center">
								<p class="text-lg">Would you like to continue with clock out?</p>
							</div>
							<div class="mt-3 text-center">
								<div class="flex justify-center">
									<button
										class="w-20 px-4 py-2 mr-2 text-sm text-white bg-green-500 rounded-md"
										@click="handleClockOut"
									>
										Yes
									</button>
									<button
										class="w-20 px-4 py-2 text-sm text-white bg-red-500 rounded-md"
										@click="isOpenClockIn = false"
									>
										Cancel
									</button>
								</div>
							</div>
						</UCard>
					</UModal>

					<div class="mt-5">
						<h6 class="text-xl font-semibold">{{ currentDateTime.time }}</h6>
						<p class="text-sm">{{ currentDateTime.day }}</p>
					</div>
				</div>
			</div>
			<div class="xl:col-span-2">
				<div class="flex items-center justify-between px-4 py-4">
					<h6 class="font-semibold">Recent Leaves</h6>
					<button
						class="px-4 py-2 text-sm text-white rounded-full shadow-lg bg-slate-950 shadow-slate-300"
					>
						Sort By
						<Icon
							name="solar:alt-arrow-down-line-duotone"
							color="white"
							size="16px"
							class="ml-2"
						/>
					</button>
				</div>
				<div
					class="mb-4 shadow-lg rounded-2xl bg-gray-50 dark:bg-gray-800 py-7 shadow-slate-300"
				>
					<div class="flex items-center justify-between mb-3 px-7">
						<div>
							<h6 class="text-lg">Going for a trip</h6>
							<p class="text-xs text-gray-500">Vacation Leave</p>
						</div>
						<h6
							class="px-3 py-1 text-sm text-white bg-green-700 shadow-lg rounded-2xl shadow-slate-300"
						>
							Pending
						</h6>
					</div>
					<div class="flex items-center px-7">
						<Icon
							name="material-symbols:calendar-clock"
							color="black"
							size="24px"
							class="mr-2"
						/>
						<!-- <p class="text-xs">{{ currentDateTimeIn.day }}</p> -->
					</div>
				</div>
				<div
					class="mb-4 shadow-lg rounded-2xl bg-gray-50 dark:bg-gray-800 py-7 shadow-slate-300"
				>
					<div class="flex items-center justify-between mb-3 px-7">
						<div>
							<h6 class="text-lg">Going for a trip</h6>
							<p class="text-xs text-gray-500">Vacation Leave</p>
						</div>
						<h6
							class="px-3 py-1 text-sm text-white bg-green-700 rounded-full shadow-lg shadow-slate-300"
						>
							Pending
						</h6>
					</div>
					<div class="flex items-center px-7">
						<Icon
							name="material-symbols:calendar-clock"
							color="black"
							size="24px"
							class="mr-2"
						/>
						<!-- <p class="text-xs">{{ currentDateTimeIn.day }}</p> -->
					</div>
				</div>
				<div
					class="mb-4 shadow-lg rounded-2xl bg-gray-50 dark:bg-gray-800 py-7 shadow-slate-300"
				>
					<div class="flex items-center justify-between mb-3 px-7">
						<div>
							<h6 class="text-lg">Going for a trip</h6>
							<p class="text-xs text-gray-500">Vacation Leave</p>
						</div>
						<h6
							class="px-3 py-1 text-sm text-white bg-green-700 rounded-full shadow-lg shadow-slate-300"
						>
							Pending
						</h6>
					</div>
					<div class="flex items-center px-7">
						<Icon
							name="material-symbols:calendar-clock"
							color="black"
							size="24px"
							class="mr-2"
						/>
						<!-- <p class="text-xs">{{ currentDateTimeIn.day }}</p> -->
					</div>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-4">
			<div
				class="relative mb-4 overflow-x-auto shadow-lg rounded-2xl bg-gray-50 shadow-slate-300 sm:rounded-2xl dark:bg-gray-800 xl:col-span-4"
			>
				<div class="flex items-center justify-between py-7 px-7">
					<h6 class="font-semibold">Attendance Logs</h6>
					<div class="flex items-center">
						<h6 class="mr-5 font-semibold">Month</h6>
						<button
							class="h-10 px-4 text-sm text-white rounded-full shadow-lg bg-slate-950 shadow-slate-300"
						>
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
				<table
					class="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400"
				>
					<thead
						class="text-xs text-gray-700 border-t border-b bg-slate-50 dark:bg-gray-700 dark:text-gray-400"
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
							class="border-b dark:bg-gray-800 dark:border-gray-700"
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
	</div>
</template>

<style scoped>
/* * {
	border: 1px solid red;
} */
</style>
