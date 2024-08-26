import { Router } from "express";
import { loginUser, logout, registerUser } from "../controller/user.controller.js";
import { Authentication } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser)

router.route("/logout").post(Authentication, logout);

export default router;