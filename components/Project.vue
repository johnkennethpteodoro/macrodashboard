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
	<div class="p-4 sm:ml-64">
		<OverviewCards :projectData="projectOverviewData" />
		<ProjectDetail />
	</div>
</template>

<style scoped></style>
