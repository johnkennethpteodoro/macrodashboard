export interface Modules {
	dashboard: boolean;
	attendance: boolean;
	project: boolean;
	profile: boolean;
	employees: boolean;
}

export interface UserData {
	id: number;
	name: string;
	title: string;
	email: string;
	password: string;
	phone: string;
	address: string;
	memberSince: string;
	department: string;
	employmentType: string;
	shift: string;
	manager: string;
	pagibig: string;
	philhealth: string;
	sssNumber: string;
	tin: string;
}
