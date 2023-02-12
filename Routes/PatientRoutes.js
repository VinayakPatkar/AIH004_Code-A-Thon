import express from "express";
const patientRouter = express.Router();
import { admin, protect } from "../Middlewares/AuthenticationMiddleware";
import {
  authPatient,
  getAllPatients,
  getPatientById,
  getPatientProfile,
  registerPatient,
  updatePatient,
  deletePatient,
} from "../Controllers/PatientController";

patientRouter.route("/login").post(authPatient);
patientRouter.route("/profile/:id").get(getPatientProfile);
patientRouter
  .route("/:id")
  .get(protect, getPatientById)
  .put(protect, updatePatient)
  .delete(protect, deletePatient);
patientRouter
  .route("/")
  .get(protect, admin, getAllPatients)
  .post(registerPatient);

export default patientRouter;
