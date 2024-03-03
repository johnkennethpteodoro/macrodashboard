<script setup lang="ts">
import { useStore } from "../stores/store";
const store = useStore();

const hanldeClickModule = (value: string) => {
	store.handleShowModule(value);
};
</script>

<template>
	<div class="h-full overflow-y-auto shadow-lg bg-slate-950 shadow-gray-300">
		<div class="pt-5 px-7">
			<button
				@click="() => hanldeClickModule('dashboard')"
				class="flex items-center w-full px-3 py-3 mb-2 text-white rounded-sm"
			>
				<Icon
					name="material-symbols:incomplete-circle"
					color="white"
					size="24px"
					class="mr-5"
				/>
				QUICKSTRIKE
			</button>
		</div>
		<div class="px-4 py-4">
			<button
				@click="() => hanldeClickModule('dashboard')"
				class="flex items-center w-full px-3 py-3 mb-2 text-white rounded-sm hover:bg-slate-500"
				:class="{ active: store.modules.dashboard === true }"
			>
				<Icon
					name="material-symbols:space-dashboard"
					color="white"
					size="24px"
					class="mr-5"
				/>Dashboard
			</button>
			<button
				@click="() => hanldeClickModule('attendance')"
				class="flex items-center w-full px-3 py-3 mb-2 text-white rounded-sm hover:bg-slate-500"
				:class="{ active: store.modules.attendance === true }"
			>
				<Icon
					name="material-symbols:calendar-clock"
					color="white"
					size="24px"
					class="mr-5"
				/>Attendance
			</button>
			<button
				@click="() => hanldeClickModule('project')"
				class="flex items-center w-full px-3 py-3 mb-2 text-white rounded-sm hover:bg-slate-500"
				:class="{ active: store.modules.project === true }"
			>
				<Icon name="material-symbols:files" color="white" size="24px" class="mr-5" />Project
			</button>
			<button
				@click="() => hanldeClickModule('profile')"
				class="flex items-center w-full px-3 py-3 mb-2 text-white rounded-sm hover:bg-slate-500"
				:class="{ active: store.modules.profile === true }"
			>
				<Icon
					name="material-symbols:person-rounded"
					color="white"
					size="24px"
					class="mr-5"
				/>Profile
			</button>
			<button
				@click="() => hanldeClickModule('employees')"
				class="flex items-center w-full px-3 py-3 mb-2 text-white rounded-sm hover:bg-slate-500"
				:class="{ active: store.modules.employees === true }"
			>
				<Icon
					name="material-symbols:group-rounded"
					color="white"
					size="24px"
					class="mr-5"
				/>Employees
			</button>
		</div>
	</div>
</template>

<style scoped>
.active {
	background-color: #475569;
	border-left: 4px solid #94a3b8;
}
</style>
