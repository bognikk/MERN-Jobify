import { Router } from "express";
const router = Router();

import {
	getAllJobs,
	getJob,
	createJob,
	updateJob,
	deleteJob,
} from "../controllers/job-controllers.js";
import { validateJobInput } from "../middleware/validation.js";

// router.get('/', getAllJobs),
// router.post('/', createJob)
router.route("/").get(getAllJobs).post(validateJobInput, createJob);
router
	.route("/:id")
	.get(getJob)
	.patch(validateJobInput, updateJob)
	.delete(deleteJob);

export default router;
