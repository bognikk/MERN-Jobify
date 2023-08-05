import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
	const hashedPassword = await bcrypt.hash(password, 12);
	return hashedPassword;
};
