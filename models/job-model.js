import mongoose from "mongoose";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";

const JobSchema = new mongoose.Schema(
	{
		company: { type: String, required: true },
		position: { type: String, required: true },
		jobStatus: {
			type: String,
			enum: Object.values(JOB_STATUS),
			default: JOB_STATUS.PENDING,
			required: true,
		},
		jobType: {
			type: String,
			enum: Object.values(JOB_TYPE),
			default: JOB_TYPE.FULL_TIME,
			required: true,
		},
		jobLocation: {
			type: String,
			default: "my city",
			required: true,
		},
		createdBy: {
			type: mongoose.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

export default mongoose.model("Job", JobSchema);
