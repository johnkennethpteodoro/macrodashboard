<script setup>
const employeeDataOveriew = {
	all: {
		id: 1,
		type: "All",
		quantity: 22,
	},
	admins: {
		id: 2,
		type: "Admins",
		quantity: 3,
	},
	engineers: {
		id: 3,
		type: "Engineers",
		quantity: 45,
	},
	creatives: {
		id: 4,
		type: "Creatives",
		quantity: 22,
	},
};
</script>

<template>
	<div class="p-4 sm:ml-64"><OverviewCards :employeeData="employeeDataOveriew" /></div>
</template>

<style scoped></style>
