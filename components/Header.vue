<script setup>
import { useStore } from "../stores/store";
const store = useStore();
const hanldeClickModule = (value) => {
	store.handleShowModule(value);
};

const handleLogout = () => {
	navigateTo("/");
};

const handleOpenSidebar = () => {
	store.isShowSidebar = false;
};

const handleCloseSidebar = () => {
	store.isShowSidebar = true;
};
</script>

<template>
	<div class="flex items-center justify-between mt-2">
		<div class="flex items-center">
			<div class="hidden xl:block lg:hidden md:hidden sm:hidden">
				<button
					@click="handleOpenSidebar()"
					v-if="store.isShowSidebar"
					class="px-3 py-1 mr-5 rounded-full opacity-75 bg-card"
				>
					<Icon name="material-symbols:menu" color="white" size="24px" />
				</button>
				<button
					v-else
					@click="handleCloseSidebar()"
					class="px-3 py-1 mr-5 rounded-full opacity-75 bg-card"
				>
					<Icon name="material-symbols:menu-open-rounded" color="white" size="24px" />
				</button>
			</div>
			<div class="hidden xl:block lg:hidden md:hidden sm:hidden">
				<h6 class="text-2xl font-extrabold text-white" v-if="store.modules.dashboard">
					Dashboard
				</h6>
				<h6 class="text-2xl font-extrabold text-white" v-else-if="store.modules.attendance">
					Attendance
				</h6>
				<h6 class="text-2xl font-extrabold text-white" v-else-if="store.modules.project">
					Project
				</h6>
				<h6 class="text-2xl font-extrabold text-white" v-else-if="store.modules.profile">
					Profile
				</h6>
				<h6 class="text-2xl font-extrabold text-white" v-else-if="store.modules.employees">
					Employees
				</h6>
			</div>
		</div>
		<div class="block w-full mx-4 xl:hidden lg:hidden md:hidden sm:hidden">
			<div class="flex justify-between">
				<button
					@click="() => hanldeClickModule('dashboard')"
					:class="{ active: store.modules.dashboard === true }"
					class="w-12 pb-1"
				>
					<Icon name="material-symbols:space-dashboard" color="black" size="35px" />
				</button>
				<button
					@click="() => hanldeClickModule('attendance')"
					:class="{ active: store.modules.attendance === true }"
					class="w-12 pb-1"
				>
					<Icon name="material-symbols:calendar-clock" color="black" size="35px" />
				</button>
				<button
					@click="() => hanldeClickModule('project')"
					:class="{ active: store.modules.project === true }"
					class="w-12 pb-1"
				>
					<Icon name="material-symbols:files" color="black" size="35px" />
				</button>
				<button
					@click="() => hanldeClickModule('profile')"
					:class="{ active: store.modules.profile === true }"
					class="w-12 pb-1"
				>
					<Icon name="material-symbols:person-rounded" color="black" size="35px" />
				</button>
				<button
					@click="() => hanldeClickModule('employees')"
					:class="{ active: store.modules.employees === true }"
					class="w-12 pb-1"
				>
					<Icon name="material-symbols:group-rounded" color="black" size="35px" />
				</button>
			</div>
		</div>
		<div class="hidden w-full mx-4 lg:mx-40 xl:hidden lg:block md:block sm:block">
			<div class="flex justify-between">
				<button
					@click="() => hanldeClickModule('dashboard')"
					:class="{ active: store.modules.dashboard === true }"
					class="w-24 pb-1"
				>
					Dashboard
				</button>
				<button
					@click="() => hanldeClickModule('attendance')"
					:class="{ active: store.modules.attendance === true }"
					class="w-24 pb-1"
				>
					Attendance
				</button>
				<button
					@click="() => hanldeClickModule('project')"
					:class="{ active: store.modules.project === true }"
					class="w-20 pb-1"
				>
					Project
				</button>
				<button
					@click="() => hanldeClickModule('profile')"
					:class="{ active: store.modules.profile === true }"
					class="w-20 pb-1"
				>
					Profile
				</button>
				<button
					@click="() => hanldeClickModule('employees')"
					:class="{ active: store.modules.employees === true }"
					class="w-24 pb-1"
				>
					Employees
				</button>
			</div>
		</div>
		<div class="hidden sm:hidden xl:block lg:hidden md:hidden">
			<button @click="handleLogout()" class="flex items-center">
				<Icon name="material-symbols:logout-sharp" color="black" size="24px" class="mr-1" />
				Logout
			</button>
		</div>
	</div>
</template>

<style scoped>
.active {
	font-weight: bolder;
	border-bottom: 2px solid black;
}

.bg-card {
	background-color: #334155;
}

/* * {
	border: 1px solid red;
} */
</style>
