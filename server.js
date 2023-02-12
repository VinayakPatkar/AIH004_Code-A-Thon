import express from "express";
import cors from "cors";
import connectDB from "./configurations/Database.js";
import path from "path";
import doctorRouter from "./Routes/DoctorRoutes";
import appointmentRouter from "./Routes/AppointmentRoutes.js";
import patientRouter from "./Routes/PatientRoutes";
import uploadRouter from "./Routes/UploadRoutes.js";

import { notFound, errorHandler } from "./Middlewares/ErrorMiddleware";
import adminRouter from "./Routes/AdminRoutes";

connectDB();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/admin/", adminRouter);
app.use("/api/v1/doctors", doctorRouter);
app.use("/api/v1/appts/", appointmentRouter);
app.use("/api/v1/patients", patientRouter);
app.use("/api/v1/upload", uploadRouter);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(notFound);
app.use(errorHandler);
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});
