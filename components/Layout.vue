<script setup lang="ts">
import { useStore } from "../stores/store";
const store = useStore();
</script>

<template>
	<SideBar
		class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
	/>
	<Header class="p-4 sm:ml-64" />
	<Dahsboard class="p-4 sm:ml-64" v-if="store.modules.dashboard" />
	<Attendance class="p-4 sm:ml-64" v-else-if="store.modules.attendance" />
	<Project class="p-4 sm:ml-64" v-else-if="store.modules.project" />
</template>

<style scoped></style>
