import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";

// routers
import jobRoutes from "./routes/job-routes.js";
import authRoutes from "./routes/auth-routes.js";

// middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import { authenticateUser } from "./middleware/auth.js";

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/v1/jobs", authenticateUser, jobRoutes);
app.use("/api/v1/auth", authRoutes);

app.use("*", (req, res) => {
	res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
	await mongoose.connect(process.env.MONGO_URL);
	app.listen(port, () => {
		console.log(`server running on PORT ${port}`);
	});
} catch (error) {
	console.log(error);
	process.exit(1);
}
