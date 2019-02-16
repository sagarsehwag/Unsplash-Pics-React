import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization:
			"Client-ID dc85353f937727ebf5008b6c71a7395691163ea5b2f319c8902a74cbcbc8b927"
	}
});
