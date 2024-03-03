<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "../stores/store";
const store = useStore();

const projectDetail = {
	project1: {
		id: 1,
		projectName: "vectorsoft",
		status: "under maintenance",
		rate: 5,
	},
	project2: {
		id: 2,
		projectName: "desgin studio",
		status: "opearational",
		rate: 5,
	},
	project3: {
		id: 3,
		projectName: "brand data import",
		status: "inprogress",
		rate: 5,
	},
	project4: {
		id: 4,
		projectName: "qx7",
		status: "completed",
		rate: 5,
	},
};

const searchProject = computed(() => {
	const searchKeyword = store.searchProject.toLowerCase();

	const projectsArray = Object.values(projectDetail);

	return projectsArray.filter((project: any) => {
		return project.projectName.toLowerCase().includes(searchKeyword);
	});
});
</script>

<template>
	<div>
		<div class="flex justify-between">
			<div class="py-7">
				<h6 class="font-semibold">Project List</h6>
			</div>
			<div class="grid items-center w-80">
				<div class="relative w-full">
					<div
						class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3"
					>
						<Icon name="material-symbols:search" color="black" size="20px" />
					</div>
					<input
						type="text"
						class="bg-gray-50 shadow-lg shadow-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search project name..."
						autocomplete="off"
						v-model="store.searchProject"
					/>
				</div>
			</div>
		</div>
	</div>
	<div
		class="grid grid-cols-1 gap-4 mb-4 xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-1 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1"
	>
		<div
			v-for="project in searchProject"
			:key="project.id"
			class="rounded shadow-lg bg-gray-50 dark:bg-gray-800 shadow-gray-200"
		>
			<div class="p-5">
				<NuxtImg
					src="../public/designStudio.png"
					class="object-cover object-center w-full h-auto border border-gray-300 shadow-lg shadow-gray-100"
				/>
				<div>
					<div class="flex justify-between mt-5">
						<div>
							<h6 class="text-xl font-bold capitalize">{{ project.projectName }}</h6>
							<p class="text-sm text-gray-400 capitalize">{{ project.status }}</p>
						</div>
						<div class="flex">
							<h6 class="mr-3 font-bold">5</h6>
							<div class="flex">
								<Icon
									name="material-symbols:star-rounded"
									color="orange"
									size="20px"
								/>
								<Icon
									name="material-symbols:star-rounded"
									color="orange"
									size="20px"
								/>
								<Icon
									name="material-symbols:star-rounded"
									color="orange"
									size="20px"
								/>
								<Icon
									name="material-symbols:star-rounded"
									color="orange"
									size="20px"
								/>
								<Icon
									name="material-symbols:star-rounded"
									color="orange"
									size="20px"
								/>
							</div>
						</div>
					</div>
					<div class="flex gap-2 mt-5">
						<button
							class="px-5 py-2 text-sm text-white bg-red-600 rounded shadow-lg shadow-gray-200"
						>
							View Project
						</button>
						<button
							class="px-5 py-2 text-sm text-red-600 border border-red-600 rounded shadow-lg shadow-gray-200"
						>
							See More
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
