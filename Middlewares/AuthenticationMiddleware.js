import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import Admin from "../Models/AdminModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.admin = await Admin.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const admin = (req, res, next) => {
  if (req.admin && req.admin.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};

const patientMiddleware = (req, res, next) => {
  if (req.patient && req.patient.isPatient) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as a patient");
  }
};

const doctorMiddleware = (req, res, next) => {
  if (req.doctor && req.doctor.isDoctor) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as a doctor");
  }
};

export { protect, admin, patientMiddleware, doctorMiddleware };
