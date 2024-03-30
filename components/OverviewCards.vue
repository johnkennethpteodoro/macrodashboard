<script setup>
import { useStore } from "../stores/store";
const store = useStore();
const props = defineProps({
	employeeData: Object,
	projectData: Object,
});
</script>

<template>
	<div
		class="grid grid-cols-2 gap-4 mb-4 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2"
	>
		<button
			v-for="employeeData in props.employeeData"
			:key="employeeData.id"
			class="flex items-center justify-center bg-card rounded-2xl dark:bg-gray-800"
		>
			<div class="block text-center p-7">
				<h6
					class="mb-1 text-sm font-medium text-white xl:text-lg lg:text-lg md:text-lg sm:text-sm"
				>
					{{ employeeData.type }}
				</h6>
				<h1 class="text-3xl font-extrabold text-white">{{ employeeData.quantity }}</h1>
			</div>
		</button>
		<button
			v-for="projectOverview in props.projectData"
			:key="projectOverview.id"
			class="flex items-center justify-center rounded-2xl bg-card dark:bg-gray-800"
			@click="store.handleFilterProject(projectOverview.status)"
			:class="{ activeCard: store.projectStatus === projectOverview.status }"
		>
			<div class="block text-center p-7">
				<h6
					class="mb-1 text-sm font-medium text-white xl:text-lg lg:text-lg md:text-lg sm:text-sm"
				>
					{{ projectOverview.status }}
				</h6>
				<h1 class="text-3xl font-extrabold text-white">{{ projectOverview.quantity }}</h1>
			</div>
		</button>
	</div>
</template>

<style scope>
.bg-card {
	background-color: #334155;
}

.activeCard {
	background: #1f2a36;
}
</style>
