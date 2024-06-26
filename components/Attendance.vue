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
				class="relative mb-4 overflow-x-auto rounded-2xl p-7 bg-card1 sm:rounded-2xl dark:bg-gray-800 xl:col-span-4"
			>
				<div class="text-center">
					<div v-if="isOpenClockoutMsg" class="flex justify-between mb-2 text-sm">
						<h6 class="font-semibold text-white">Rendered Hours</h6>
						<p class="text-white">{{ totalRenderHours }}</p>
					</div>
					<div v-if="isOpenClockoutMsg" class="grid grid-cols-2 gap-4 mb-16">
						<div class="p-4 border border-black rounded-xl bg-slate-50">
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
						<div class="p-4 border border-white rounded-xl bg-slate-900">
							<p
								class="mb-1 text-sm font-semibold text-center text-white opacity-50 xl:text-left lg:tex-left md:text-left sm:text-center"
							>
								<Icon
									name="material-symbols:timer-off-rounded"
									color="white"
									size="22px"
									class="mr-1 opacity-60"
								/>Clock-out
							</p>
							<h6
								class="mb-5 text-xl font-light text-center text-white xl:text-left lg:tex-left md:text-left sm:text-center"
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
							<h6 class="text-xl font-semibold text-white capitalize">
								Good day, john Kenneth
							</h6>
							<p class="mt-2 text-sm text-white">Tap the button bellow to clock in</p>
						</div>

						<div class="mt-16 mb-8">
							<Icon
								name="material-symbols:keyboard-double-arrow-down-rounded"
								color="white"
								size="50px"
								class="opacity-35"
							/>
						</div>
					</div>
					<div class="flex justify-center">
						<div class="relative flex w-36 h-36">
							<span
								class="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-slate-50"
							></span>
							<button
								@click="isOpenClockIn = true"
								label="Open"
								data-modal-target="popup-modal"
								data-modal-toggle="popup-modal"
								class="text-xl font-black text-black uppercase border-2 rounded-full shadow-2xl w-36 h-36 border-slate-700 drop-shadow-lg bg-slate-300 shadow-gray-500"
							>
								clock in
							</button>
						</div>
					</div>

					<UModal v-model="isOpenClockIn" prevent-close>
						<UCard
							:ui="{
								ring: '',
								divide: 'divide-y divide-gray-100 dark:divide-gray-800',
							}"
							class="bg-card"
						>
							<div class="text-center">
								<Icon
									name="material-symbols:warning"
									color="red"
									size="60px"
									class="opacity-50"
								/>
							</div>
							<div class="my-5 text-center">
								<p class="text-lg text-white">
									Would you like to conitinue with clock in?
								</p>
							</div>
							<div class="mt-3 text-center">
								<div class="flex justify-center">
									<button
										class="px-4 py-2 mr-2 text-sm text-white rounded-full bg-slate-950 w-28"
										@click="handleClockIn"
									>
										Yes
									</button>
									<button
										class="px-4 py-2 text-sm text-white border border-white rounded-full w-28"
										@click="isOpenClockIn = false"
									>
										Cancel
									</button>
								</div>
							</div>
						</UCard>
					</UModal>

					<div class="mt-12">
						<h6 class="text-xl font-semibold text-white">{{ currentDateTime.time }}</h6>
						<p class="text-sm text-white">{{ currentDateTime.day }}</p>
					</div>
				</div>
			</div>
			<div
				v-if="isClockIn"
				class="relative mb-4 overflow-x-auto rounded-2xl p-7 bg-card1 sm:rounded-2xl dark:bg-gray-800 xl:col-span-4"
			>
				<div>
					<div class="flex justify-between text-sm">
						<h6 class="font-semibold text-white">Collected Hours</h6>
						<p class="text-white">0:00</p>
					</div>
					<div class="grid grid-cols-2 gap-4 mt-3">
						<div class="p-4 border border-black rounded-2xl bg-slate-50">
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
						<div class="p-4 border border-slate-200 rounded-2xl bg-slate-900">
							<p
								class="mb-1 text-sm font-semibold text-center text-white opacity-50 xl:text-left lg:tex-left md:text-left sm:text-center"
							>
								<Icon
									name="material-symbols:timer-off-rounded"
									color="white"
									size="22px"
									class="mr-1 opacity-60"
								/>Clock-out
							</p>
							<p
								class="text-sm text-center text-white xl:text-left lg:text-left md:text-left sm:text-center"
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
					<div class="flex justify-center">
						<div class="relative flex w-36 h-36">
							<span
								class="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-slate-50"
							></span>
							<button
								@click="isOpenClockOut = true"
								label="Open"
								data-modal-target="popup-modal"
								data-modal-toggle="popup-modal"
								class="text-xl font-black text-white uppercase border border-white rounded-full shadow-2xl w-36 h-36 drop-shadow-lg bg-slate-900 shadow-gray-500"
							>
								clock out
							</button>
						</div>
					</div>

					<UModal v-model="isOpenClockOut" prevent-close>
						<UCard
							:ui="{
								ring: '',
								divide: 'divide-y divide-gray-100 dark:divide-gray-800',
							}"
							class="bg-card"
						>
							<div class="text-center">
								<Icon
									name="material-symbols:warning"
									color="red"
									size="60px"
									class="opacity-50"
								/>
							</div>
							<div class="my-5 text-center">
								<p class="text-lg text-white">
									Would you like to continue with clock out?
								</p>
							</div>
							<div class="mt-3 text-center">
								<div class="flex justify-center">
									<button
										class="px-4 py-2 mr-2 text-sm text-white rounded-md w-28 bg-slate-950"
										@click="handleClockOut"
									>
										Yes
									</button>
									<button
										class="px-4 py-2 text-sm text-white border border-white rounded-md w-28"
										@click="isOpenClockIn = false"
									>
										Cancel
									</button>
								</div>
							</div>
						</UCard>
					</UModal>

					<div class="mt-10">
						<h6 class="text-xl font-semibold text-white">{{ currentDateTime.time }}</h6>
						<p class="text-sm text-white">{{ currentDateTime.day }}</p>
					</div>
				</div>
			</div>
			<div class="xl:col-span-2">
				<div class="flex items-center justify-between px-4 py-4">
					<h6 class="font-semibold">Recent Leaves</h6>
					<button class="px-4 py-2 text-sm text-white rounded-full bg-slate-950">
						Sort By
						<Icon
							name="solar:alt-arrow-down-line-duotone"
							color="white"
							size="16px"
							class="ml-2"
						/>
					</button>
				</div>
				<div class="mb-4 rounded-2xl bg-card dark:bg-gray-800 py-7">
					<div class="flex items-center justify-between mb-3 px-7">
						<div>
							<h6 class="text-lg text-white">Going for a trip</h6>
							<p class="text-xs text-gray-400">Vacation Leave</p>
						</div>
						<h6 class="px-3 py-1 text-sm text-white bg-green-700 rounded-2xl">
							Pending
						</h6>
					</div>
					<div class="flex items-center px-7">
						<Icon
							name="material-symbols:calendar-clock"
							color="white"
							size="24px"
							class="mr-2"
						/>
						<!-- <p class="text-xs">{{ currentDateTimeIn.day }}</p> -->
					</div>
				</div>
				<div class="mb-4 rounded-2xl bg-card dark:bg-gray-800 py-7">
					<div class="flex items-center justify-between mb-3 px-7">
						<div>
							<h6 class="text-lg text-white">Going for a trip</h6>
							<p class="text-xs text-gray-400">Vacation Leave</p>
						</div>
						<h6 class="px-3 py-1 text-sm text-white bg-green-700 rounded-full">
							Pending
						</h6>
					</div>
					<div class="flex items-center px-7">
						<Icon
							name="material-symbols:calendar-clock"
							color="white"
							size="24px"
							class="mr-2"
						/>
						<!-- <p class="text-xs">{{ currentDateTimeIn.day }}</p> -->
					</div>
				</div>
				<div class="mb-4 rounded-2xl bg-card dark:bg-gray-800 py-7">
					<div class="flex items-center justify-between mb-3 px-7">
						<div>
							<h6 class="text-lg text-white">Going for a trip</h6>
							<p class="text-xs text-gray-400">Vacation Leave</p>
						</div>
						<h6 class="px-3 py-1 text-sm text-white bg-green-700 rounded-full">
							Pending
						</h6>
					</div>
					<div class="flex items-center px-7">
						<Icon
							name="material-symbols:calendar-clock"
							color="white"
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
				class="relative mb-4 overflow-x-auto rounded-2xl bg-card sm:rounded-2xl dark:bg-gray-800 xl:col-span-4"
			>
				<div class="flex items-center justify-between py-7 px-7">
					<h6 class="font-semibold text-white">Attendance Logs</h6>
					<div class="flex items-center">
						<h6 class="mr-5 font-semibold text-white">Month</h6>
						<button class="h-10 px-4 text-sm text-white rounded-full bg-slate-950">
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
						class="text-xs text-white border-t border-b dark:bg-gray-700 dark:text-gray-400"
					>
						<tr>
							<th scope="col" class="px-6 py-4">Date</th>
							<th scope="col" class="px-6 py-4">
								<div class="flex items-center">Time In</div>
							</th>
							<th scope="col" class="px-6 py-4">
								<div class="flex items-center">Time Out</div>
							</th>
							<th scope="col" class="px-6 py-4">
								<div class="flex items-center">Time Rendered</div>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="attendance in attendanceLogs"
							:key="attendance.id"
							class="border-t border-white dark:bg-gray-800 dark:border-gray-700"
						>
							<th
								scope="row"
								class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
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
.bg-card1 {
	background-image: url(/bgCard1.svg);
}

.bg-card {
	background-color: #334155;
}

/* * {
	border: 1px solid red;
} */
</style>
