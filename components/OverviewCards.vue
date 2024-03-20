<script setup>
const props = defineProps({
	employeeData: Object,
	projectData: Object,
});
</script>

<template>
	<div
		class="grid grid-cols-2 gap-4 mb-4 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1"
	>
		<button
			v-for="employeeData in props.employeeData"
			:key="employeeData.id"
			class="flex items-center justify-center shadow-lg rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-slate-300"
		>
			<div class="block text-center p-7">
				<h6 class="mb-1 text-sm font-medium xl:text-lg lg:text-lg md:text-lg sm:text-sm">
					{{ employeeData.type }}
				</h6>
				<h1 class="text-3xl font-extrabold">{{ employeeData.quantity }}</h1>
			</div>
		</button>
		<button
			v-for="projectOverview in props.projectData"
			:key="projectOverview.id"
			class="flex items-center justify-center shadow-lg rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-slate-300"
		>
			<div class="block text-center p-7">
				<h6 class="mb-1 text-sm font-medium xl:text-lg lg:text-lg md:text-lg sm:text-sm">
					{{ projectOverview.status }}
				</h6>
				<h1 class="text-3xl font-extrabold">{{ projectOverview.quantity }}</h1>
			</div>
		</button>
	</div>
</template>

<style lang="scss" scoped></style>
