import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	lastName: {
		type: String,
		default: "lastName",
		required: true,
	},
	location: {
		type: String,
		default: "my city",
		required: true,
	},
	role: {
		type: String,
		enum: ["user", "admin"],
		default: "user",
		required: true,
	},
});

export default mongoose.model("User", UserSchema);
