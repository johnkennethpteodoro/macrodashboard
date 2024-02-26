<script lang="ts" setup>
import { useStore } from "../stores/store";
const store = useStore();
</script>

<template>
	<div class="flex items-center justify-between">
		<h6 class="text-2xl font-extrabold" v-if="store.modules.dashboard">Dashboard</h6>
		<h6 class="text-2xl font-extrabold" v-else-if="store.modules.attendance">Attendance</h6>
		<h6 class="text-2xl font-extrabold" v-else-if="store.modules.project">Project</h6>
		<h6 class="text-2xl font-extrabold" v-else-if="store.modules.profile">Profile</h6>
		<h6 class="text-2xl font-extrabold" v-else-if="store.modules.employees">Employees</h6>
		<div class="flex items-center">
			<Icon
				name="material-symbols:circle-notifications"
				color="black"
				size="24px"
				class="mr-5"
			/>
			<div class="flex items-center">
				<h6 class="mr-4">juan@strike.com</h6>
				<NuxtImg
					src="../public/profile.JPG"
					class="object-contain object-center w-12 h-12 bg-gray-500 border border-black rounded-full"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
