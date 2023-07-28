import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
	{
		company: { type: String, required: true },
		position: { type: String, required: true },
		jobStatus: {
			type: String,
			enum: ["interview", "declined", "pending"],
			default: "pending",
			required: true,
		},
		jobType: {
			type: String,
			enum: ["full-time", "part-time", "internship"],
			default: "full-time",
			required: true,
		},
		jobLocation: {
			type: String,
			default: "my city",
			required: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.model("Job", JobSchema);
