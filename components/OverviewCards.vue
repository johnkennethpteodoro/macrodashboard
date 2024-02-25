<script setup>
const projectOverviewData = {
	inProgress: {
		id: 1,
		status: "In Progress",
		quantity: 22,
	},
	operational: {
		id: 2,
		status: "Operational",
		quantity: 3,
	},
	underMaintainance: {
		id: 3,
		status: "Under Maintainance",
		quantity: 45,
	},
	completed: {
		id: 4,
		status: "Completed",
		quantity: 22,
	},
};
</script>

<template>
	<div class="grid grid-cols-4 gap-4 mb-4">
		<div
			v-for="projectOverview in projectOverviewData"
			:key="projectOverview.id"
			class="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800"
		>
			<div class="block text-center p-7">
				<h6 class="mb-1 text-lg font-medium">{{ projectOverview.status }}</h6>
				<h1 class="text-3xl font-extrabold">{{ projectOverview.quantity }}</h1>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
