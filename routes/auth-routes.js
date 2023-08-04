import { Router } from "express";
const router = Router();
import { register, login } from "../controllers/auth-controllers.js";
import { validateRegisterInput } from "../middleware/validation.js";

router.post("/register", validateRegisterInput, register);
router.post("/login", login);

export default router;
