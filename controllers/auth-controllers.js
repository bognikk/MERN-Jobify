import { StatusCodes } from "http-status-codes";
import User from "../models/user-model.js";

import bcrypt from "bcryptjs";

export const register = async (req, res) => {
	const isFirstAccount = (await User.countDocuments()) === 0;
	req.body.role = isFirstAccount ? "admin" : "user";

	const hashedPassword = await bcrypt.hash(req.body.password, 12);
	req.body.password = hashedPassword;

	const user = await User.create(req.body);
	res.status(StatusCodes.CREATED).json({ msg: "user created" });
};

export const login = async (req, res) => {
	res.send("login");
};
