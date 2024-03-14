export const useFetchUserData = async () => {
	const supabase = useSupabaseClient();
	try {
		const { data: user } = await supabase.from("user").select("*");

		if (user) {
			console.log("Supabase connected successfully!");
			return user;
		}
	} catch (error) {
		console.error("Supabase connection error:", error);
	}
};
