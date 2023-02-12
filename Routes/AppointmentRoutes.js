import express from "express";
const appointmentRouter = express.Router();
import {
  admin,
  patientMiddleware,
  protect,
} from "../Middlewares/AuthenticationMiddleware";
import {
  addAppointment,
  getAppointmentById,
  getMyApptsAsDoctor,
  getMyApptsAsPatient,
  updateAppointment,
  getAllAppointments,
  deleteAppointment,
} from "../Controllers/AppointmentController";

appointmentRouter
  .route("/")
  .post(addAppointment)
  .get(protect, admin, getAllAppointments);
appointmentRouter.route("/update/:id").put(updateAppointment);
appointmentRouter
  .route("/:id")
  .get(protect, getAppointmentById)
  .delete(deleteAppointment);

appointmentRouter
  .route("/mypatient/:patient")
  .get(protect, getMyApptsAsPatient);

appointmentRouter.route("/mydoctor/:doctor").get(getMyApptsAsDoctor);

export default appointmentRouter;
