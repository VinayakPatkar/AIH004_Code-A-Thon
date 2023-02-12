import asyncHandler from "express-async-handler";
import generateToken from "../Utils/GenerateToken.js";

import Admin from "../models/adminModel.js";

const authAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const adminUser = await Admin.findOne({ email });

  if (adminUser && (await adminUser.matchPassword(password))) {
    res.json({
      _id: adminUser._id,
      name: adminUser.name,
      email: adminUser.email,
      isAdmin: adminUser.isAdmin,
      token: generateToken(adminUser._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await Admin.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const newAdmin = await Admin.create({
    name,
    email,
    password,
  });

  if (newAdmin) {
    res.status(201).json({
      _id: newAdmin._id,
      name: newAdmin.name,
      email: newAdmin.email,
      isAdmin: newAdmin.isAdmin,
      token: generateToken(newAdmin._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid admin data");
  }
});


export { authAdmin, registerAdmin };
