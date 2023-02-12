import express from "express";
const adminRouter = express.Router();
import { authAdmin, registerAdmin } from "../Controllers/AdminController";
import { protect, admin } from "../Middlewares/AuthenticationMiddleware";

adminRouter.route("/").post(registerAdmin); 
adminRouter.route("/login").post(authAdmin);


export default adminRouter;
