import express from "express";
import { signinUser, signupUser } from "../controllers/authController.js";

const routes = express.Router();

routes.post("/sign-up", signupUser);
routes.post("/sign-in", signinUser);

export default routes;