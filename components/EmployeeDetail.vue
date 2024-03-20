<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "../stores/store";
const store = useStore();

const employeeDetail = {
	employee1: {
		id: 1,
		name: "chods",
		jobPosition: "associate software engineer",
		email: "j.teodoro@qstrike.com",
		online: true,
		employeeType: "engineers",
	},
	employee2: {
		id: 2,
		name: "bryan",
		jobPosition: "associate software engineer",
		email: "b.pecho@qstrike.com",
		online: true,
		employeeType: "engineers",
	},
	employee3: {
		id: 3,
		name: "jehu",
		jobPosition: "associate software engineer",
		email: "j.casimiro@qstrike.com",
		online: true,
		employeeType: "engineers",
	},
	employee4: {
		id: 4,
		name: "ron",
		jobPosition: "associate software engineer",
		email: "r.andajer@qstrike.com",
		online: false,
		employeeType: "engineers",
	},
	employee5: {
		id: 5,
		name: "remmar",
		jobPosition: "senior software engineer",
		email: "remmar@qstrike.com",
		online: true,
		employeeType: "engineers",
	},
	employee6: {
		id: 6,
		name: "nico",
		jobPosition: "senior software engineer",
		email: "nico@qstrike.com",
		online: false,
		employeeType: "engineers",
	},
	employee7: {
		id: 7,
		name: "raks",
		jobPosition: "research and development manager",
		email: "raks@qstrike.com",
		online: true,
		employeeType: "engineers",
	},
	employee8: {
		id: 7,
		name: "raks",
		jobPosition: "Junior Software Engineer",
		email: "kiel@qstrike.com",
		online: false,
		employeeType: "engineers",
	},
};

const searchEmployee = computed(() => {
	const searchKeyword = store.searchEmployee.toLowerCase();

	const EmployeesArray = Object.values(employeeDetail);

	return EmployeesArray.filter((employee: any) => {
		return employee.name.toLowerCase().includes(searchKeyword);
	});
});
</script>

<template>
	<div>
		<div class="flex justify-between">
			<div class="py-7">
				<h6 class="font-semibold">Employee List</h6>
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
						class="bg-gray-50 border shadow-lg shadow-slate-300 border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search project name..."
						autocomplete="off"
						v-model="store.searchEmployee"
					/>
				</div>
			</div>
		</div>
	</div>
	<div
		class="grid grid-cols-1 gap-4 mb-4 xl:grid xl:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1"
	>
		<div
			v-for="employee in searchEmployee"
			:key="employee.id"
			class="shadow-lg rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-slate-300"
		>
			<div class="flex items-center p-5">
				<div class="relative">
					<NuxtImg
						src="../public/profile.JPG"
						class="object-contain object-center w-16 h-16 bg-gray-500 border border-black rounded-full"
					/>
					<div
						:class="
							employee.online
								? 'absolute w-3 h-3 bg-green-500 rounded-full right-1 bottom-1 border border-green-600'
								: 'absolute w-3 h-3 bg-gray-300 rounded-full right-1 bottom-1 border border-gray-400'
						"
					></div>
				</div>

				<div class="ml-5 text-left">
					<h6 class="font-semibold capitalize">{{ employee.name }}</h6>
					<h6 class="text-sm text-gray-500 capitalize">{{ employee.jobPosition }}</h6>
					<p class="text-sm">{{ employee.email }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
