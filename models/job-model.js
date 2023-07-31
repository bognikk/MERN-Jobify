import mongoose from "mongoose";
import { JOB_STATUS } from "../utils/constants.js";

const JobSchema = new mongoose.Schema(
	{
		company: { type: String, required: true },
		position: { type: String, required: true },
		jobStatus: {
			type: String,
			enum: Object.values(JOB_STATUS),
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
