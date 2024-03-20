<script setup>
import { useStore } from "../stores/store";
const store = useStore();
</script>

<template>
	<NuxtLayout>
		<SideBar
			v-if="store.isShowSidebar"
			class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full xl:-translate-x-0 lg:-translate-x-full md:lg:-translate-x-full sm:-translate-x-full"
		/>
		<SidebarIconOnly
			v-else
			class="fixed top-0 left-0 z-40 w-20 h-screen transition-transform -translate-x-full xl:-translate-x-0 lg:-translate-x-full md:lg:-translate-x-full sm:-translate-x-full"
		/>

		<Header
			class="p-4"
			:class="{
				'xl:ml-20 lg:ml-2 md:ml-2 sm:ml-2 ml-2': !store.isShowSidebar,
				'xl:ml-64 lg:ml-2 md:ml-2 sm:ml-2 ml-2': store.isShowSidebar,
			}"
		/>
		<Dahsboard
			class="p-4"
			:class="{
				'xl:ml-20 lg:ml-2 md:ml-2 sm:ml-2 ml-2': !store.isShowSidebar,
				'xl:ml-64 lg:ml-2 md:ml-2 sm:ml-2 ml-2': store.isShowSidebar,
			}"
			v-if="store.modules.dashboard"
		/>
		<Attendance
			class="p-4"
			:class="{
				'xl:ml-20 lg:ml-2 md:ml-2 sm:ml-2 ml-2': !store.isShowSidebar,
				'xl:ml-64 lg:ml-2 md:ml-2 sm:ml-2 ml-2': store.isShowSidebar,
			}"
			v-else-if="store.modules.attendance"
		/>
		<Project
			class="p-4"
			:class="{
				'xl:ml-20 lg:ml-2 md:ml-2 sm:ml-2 ml-2': !store.isShowSidebar,
				'xl:ml-64 lg:ml-2 md:ml-2 sm:ml-2 ml-2': store.isShowSidebar,
			}"
			v-else-if="store.modules.project"
		/>
		<Profile
			class="p-4"
			:class="{
				'xl:ml-20 lg:ml-2 md:ml-2 sm:ml-2 ml-2': !store.isShowSidebar,
				'xl:ml-64 lg:ml-2 md:ml-2 sm:ml-2 ml-2': store.isShowSidebar,
			}"
			v-else-if="store.modules.profile"
		/>
		<Employees
			class="p-4"
			:class="{
				'xl:ml-20 lg:ml-2 md:ml-2 sm:ml-2 ml-2': !store.isShowSidebar,
				'xl:ml-64 lg:ml-2 md:ml-2 sm:ml-2 ml-2': store.isShowSidebar,
			}"
			v-else-if="store.modules.employees"
		/>
	</NuxtLayout>
</template>

<style scoped></style>
