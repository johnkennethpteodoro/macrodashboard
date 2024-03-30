<script setup>
const projectOverviewData = {
	all: {
		id: 1,
		status: "All",
		quantity: 4,
	},
	operational: {
		id: 2,
		status: "Operational",
		quantity: 2,
	},
	underMaintainance: {
		id: 3,
		status: "Under Maintenance",
		quantity: 2,
	},
	completed: {
		id: 4,
		status: "Completed",
		quantity: 1,
	},
};
</script>

<template>
	<div>
		<OverviewCards :projectData="projectOverviewData" />
		<ProjectDetail />
	</div>
</template>

<style scoped></style>
