import asyncHandler from "express-async-handler";
import Appointment from "../Models/AppointmentModel.js";

const addAppointment = asyncHandler(async (req, res) => {
  const { startingHour, bookingDate, patient, doctor } = req.body;

  const appointmentExists = await Appointment.findOne({
    bookingDate: req.body.bookingDate,
    startingHour: req.body.startingHour,
  });
  if (appointmentExists) {
    res.status(301);
    throw new Error("appointment already taken");
    return;
  } else {
    const appointment = new Appointment({
      patient,
      doctor,
      startingHour,
      bookingDate,
    });

    const createdAppointment = await appointment.save();

    res.status(201).json(createdAppointment);
  }
});
const getAppointmentById = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id)
    .populate("patient", "id name")
    .populate(
      "doctor",
      "id name email password phoneNumber city address speciality"
    )
    .sort({ bookingDate: 1 });

  if (appointment) {
    res.json(appointment);
  } else {
    res.status(404);
    throw new Error("Appointment not found");
  }
});
const updateAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);

  if (appointment) {
    appointment.bookingDate = req.body.bookingDate;
    appointment.startingHour = req.body.startingHour;
    const appointmentExists = await Appointment.findOne({
      bookingDate: appointment.bookingDate,
      startingHour: appointment.startingHour,
    });
    if (appointmentExists) {
      throw new Error("Appointment already Taken");
    } else {
      await appointment.save();
      res.json(appointment);
    }
  } else {
    res.status(404);
    throw new Error("appointment not found");
  }
});
const getMyApptsAsPatient = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find({
    patient: req.params.patient,
  })
    .populate("doctor", "id name")
    .populate("patient", "id name")
    .sort({ bookingDate: 1 });
  res.json(appointments);
});
const getMyApptsAsDoctor = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find({ doctor: req.params.doctor })
    .populate("patient", "id name")
    .populate("doctor", "id name")
    .sort({ bookingDate: 1 });

  res.json(appointments);
});
const getAllAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find({})
    .populate("patient", "id name")
    .populate("doctor", "id name")
    .sort({ bookingDate: 1 });

  if (appointments) {
    res.json(appointments);
  } else {
    res.status(404);
    throw new Error("Patient not found");
  }
});
const deleteAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);

  if (appointment) {
    await appointment.remove();
    res.json({ message: "Appointment removed" });
  } else {
    res.status(404);
    throw new Error("appointment not found");
  }
});
export {
  addAppointment,
  updateAppointment,
  getAppointmentById,
  getMyApptsAsPatient,
  getMyApptsAsDoctor,
  getAllAppointments,
  deleteAppointment,
};
