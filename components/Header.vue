<script lang="ts" setup>
import { useStore } from "../stores/store";
const store = useStore();
const hanldeClickModule = (value: string) => {
	store.handleShowModule(value);
};
</script>

<template>
	<div class="flex items-center justify-between mt-2">
		<div class="hidden xl:block lg:hidden md:hidden sm:hidden">
			<h6 class="text-2xl font-extrabold" v-if="store.modules.dashboard">Dashboard</h6>
			<h6 class="text-2xl font-extrabold" v-else-if="store.modules.attendance">Attendance</h6>
			<h6 class="text-2xl font-extrabold" v-else-if="store.modules.project">Project</h6>
			<h6 class="text-2xl font-extrabold" v-else-if="store.modules.profile">Profile</h6>
			<h6 class="text-2xl font-extrabold" v-else-if="store.modules.employees">Employees</h6>
		</div>
		<div class="block xl:hidden lg:blocl md:block sm:block">
			<div class="flex justify-between gap-4">
				<button
					@click="() => hanldeClickModule('dashboard')"
					class="font-medium"
					:class="{ active: store.modules.dashboard === true }"
				>
					Dashboard
				</button>
				<button
					@click="() => hanldeClickModule('attendance')"
					class="font-medium"
					:class="{ active: store.modules.attendance === true }"
				>
					Attendance
				</button>
				<button
					@click="() => hanldeClickModule('project')"
					class="font-medium"
					:class="{ active: store.modules.project === true }"
				>
					Project
				</button>
				<button
					@click="() => hanldeClickModule('profile')"
					class="font-medium"
					:class="{ active: store.modules.profile === true }"
				>
					Profile
				</button>
				<button
					@click="() => hanldeClickModule('employees')"
					class="font-medium"
					:class="{ active: store.modules.employees === true }"
				>
					Employee
				</button>
			</div>
		</div>
		<div class="hidden sm:hidden xl:block lg:hidden md:hidden">
			<button class="flex items-center">
				<Icon name="material-symbols:logout-sharp" color="black" size="24px" class="mr-1" />
				Logout
			</button>
		</div>
	</div>
</template>

<style scoped>
.active {
	font-weight: bolder;
}
</style>
