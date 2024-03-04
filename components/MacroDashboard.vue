<script setup>
import { useStore } from "../stores/store";
const store = useStore();
</script>

<template>
	<NuxtLayout>
		<SideBar
			class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full xl:-translate-x-0 lg:-translate-x-full md:lg:-translate-x-full sm:-translate-x-full"
		/>
		<Header class="p-4 ml-2 xl:ml-64 lg:ml-2 lg:bg-none md:ml-2 sm:ml-2" />
		<Dahsboard
			class="p-4 ml-2 xl:ml-64 lg:ml-2 md:ml-2 sm:ml-2"
			v-if="store.modules.dashboard"
		/>
		<Attendance
			class="p-4 ml-2 xl:ml-64 lg:ml-2 md:ml-2 sm:ml-2"
			v-else-if="store.modules.attendance"
		/>
		<Project
			class="p-4 ml-2 xl:ml-64 lg:ml-2 md:ml-2 sm:ml-2"
			v-else-if="store.modules.project"
		/>
		<Profile
			class="p-4 ml-2 xl:ml-64 lg:ml-2 md:ml-2 sm:ml-2"
			v-else-if="store.modules.profile"
		/>
		<Employees
			class="p-4 ml-2 xl:ml-64 lg:ml-2 md:ml-2 sm:ml-2"
			v-else-if="store.modules.employees"
		/>
	</NuxtLayout>
</template>

<style scoped></style>
